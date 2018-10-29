const Mutation = {
  async createItem(parents, args, context, info) {
    // TODO: Check if they are logged in

    const item = await context.db.mutation.createItem({ // "context.db.mutation" returns a promise
      data: {
        ... args
      }
    }, info) // info contains the query. Our mutation needs access to the query so it can specify what data gets returned from the DB

    return item;
  }
  // createDog(parent, args, context, info) {
  //   global.dogs = global.dogs || [];
  //   // create a dog!
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
//   }
};

module.exports = Mutation;
