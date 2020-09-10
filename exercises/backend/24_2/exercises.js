// Exercise 1
db.movies.updateOne({ title: "Batman" }, { $push: { category: "superhero" } });

// Exercise 2
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: { $each: ["villain", "comic-based"] } } },
);

// Exercise 3
db.movies.updateOne({ title: "Batman" }, { $pull: { category: "action" } });

// Exercise 4
db.movies.updateOne({ title: "Batman" }, { $pop: { category: -1 } });

// Exercise 5
db.movies.updateOne({ title: "Batman" }, { $pop: { category: 1 } });

// Exercise 6
db.movies.updateOne({ title: "Batman" }, { $addToSet: { category: "action" } });

// Exercise 7
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $push: { category: "90's" } },
);

// Exercise 8
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      cast: {
        $each: [
          {
            actor: "Macaulay Culkin",
            character: "Kevin",
          },
          {
            actor: "Joe Pesci",
            character: "Harry",
          },
          {
            actor: "Daniel Stern",
          },
        ],
      },
    },
  },
);

// Exercise 9
db.movies.updateOne({ "cast.actor": "Daniel Stern" }, {$set: {"cast.$.character": "Marv" }});

// Exercise 10
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      cast: {
        $each: [
          { character: "Batman" },
          { character: "Alfred" },
          { character: "Coringa" },
        ],
      },
    },
  },
);

// Exercise 11
db.movies.updateOne({title: "Batman", "cast.character": "Batman"}, {$push: {"cast.$.actor": "Christian Bale"}});
db.movies.updateOne({title: "Batman", "cast.character": "Alfred"}, {$push: {"cast.$.actor": "Michael Caine"}});
db.movies.updateOne({title: "Batman", "cast.character": "Coringa"}, {$push: {"cast.$.actor": "Heath Ledger"}});

// Exercise 12
db.movies.updateOne({title: "Batman", "cast.character": "Batman"}, {$push: {"cast.$.actor": {$each: ["Michael Keaton", "Val Kilmer","George Clooney"], $sort: 1}}})