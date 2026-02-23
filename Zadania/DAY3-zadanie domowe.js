//1
class Bricks {
  constructor(name, id, collection) {
    this.name = name;
    this.id = id;
    this.collection = collection;
  }

  legoset() {
    console.log(
      `This set is called ${this.name} and its ID is ${this.id}. And it belongs to ${this.collection} collection.`,
    );
  }
}

const bricks = new Bricks("Pirate Lookout", 1696, "Pirates");

bricks.legoset();

class Catalog extends Bricks {
  constructor(name, id, collection, releaseYear) {
    super(name, id, collection);
    this.releaseYear = releaseYear;
  }
  release() {
    console.log(`Set was released in ${this.releaseYear}.`);
  }
}
const catalog = new Catalog("Bookshop", 10270, "Creator Expert", 2020);
catalog.legoset();
catalog.release();

//2
