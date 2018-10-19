const Mutation = {
  async createItem(parents, args, context, info) {
    // TODO: Check if they are logged in

    const item = await context.db.mutation.createItem({
      data: {
        ... args
      }
    }, info)

    console.log(item);
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
