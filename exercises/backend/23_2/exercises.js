// Exercise 1 - Inspecionar um Documento e se familiarizar com ele.
// Exercise 2
db.superheroes.find({"aspects.height": {$lt: 180}});

// Exercise 3
db.superheroes.find({"aspects.height": {$lt: 180}}).count(); // 421

// Exercise 4
db.superheroes.find({"aspects.height": {$lte: 180}}).count(); // 459

// Exercise 5
db.superheroes.find({"aspects.height": {$gte: 200}}).limit(1); // Abomination

// Exercise 6
db.superheroes.find({"aspects.height": {$gte: 200}}).count(); // 59

// Exercise 7
db.superheroes.find({"aspects.eyeColor": "green"});

// Exercise 8
db.superheroes.find({"aspects.eyeColor": "blue"}).count(); // 225

// Exercise 9
db.superheroes.find({"aspects.hairColor": {$in: ["black", "No Hair"]}}); 

// Exercise 10
db.superheroes.find({"aspects.hairColor": {$in: ["black", "No Hair"]}}).count(); // Ao todo são 78

// Exercise 11
db.superheroes.find({"aspects.hairColor": {$nin: ["black", "No Hair"]}}).count() // 656

// Exercise 12
db.superheroes.find({"aspects.height": {$not: {$lte: 180}}}).count(); // 275

// Exercise 13
db.superheroes.find({$nor: [{race: "Human"}, {"aspects.height": {$lte: 180}}] });

// Exercise 14
db.superheroes.find({$and: [{"aspects.height": {$in: [180, 200]}}, {publisher: "Marvel Comics"}]})

// Exercise 15
db.superheroes.find({$and: [{"aspects.weight": {$gte: 80, $lte: 100}}, {"race": {$in: ["Human", "Mutant"]}}, {"publisher": {$ne: "DC Comics"}}]})

// Exercise 16
db.superheroes.find({"race": {$exists: false}}).count(); // 304

// Exercise 17
db.superheroes.find({"aspects.hairColor": {$exists: true}}).count(); // 562

// Exercise 18
db.superheroes.deleteOne({publisher: "Sony Pictures"}); // deleted 1

// Exercise 19
db.superheroes.deleteMany({publisher: "George Lucas"}); // deleted 14