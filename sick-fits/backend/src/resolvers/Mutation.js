const Mutation = {
  async createItem(parents, args, context, info) {
    // TODO: Check if they are logged in

    const item = await context.db.mutation.createItem({ // "context.db.mutation" returns a promise
      data: {
        ... args
      }
    }, info) // info contains the query. Our mutation needs access to the query so it can specify what data gets returned from the DB

    return item;
  },
  updateItem(parent, args, ctx, info) {
    // first take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. Find the item
    const item = await ctx.db.query.item({ where }, `{ id title }`);
    // TODO // 2. Check if they own that item, or have permissions
    // 3. Delete it!
    return ctx.db.mutation.deleteItem({ where }, info);
  }
};

module.exports = Mutation;
