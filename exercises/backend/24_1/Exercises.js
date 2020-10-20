// Exercise 1
db.movies.updateOne({title: "Batman"}, {$max: {imdbRating: 7.7}});
// Pode ser tbm ...
db.movies.updateOne({title: "Batman"}, {$set: {imdbRating: 7.7}});

// Exercise 2
db.movies.updateOne({title: "Godzilla"}, {$set: {budget: 1}});

// Exercise 3
db.movies.updateOne({title: "Home Alone"}, {$set: {budget: 15, imdbRating: 5.5}});

// Exercise 4
db.movies.updateOne({title: "Batman"}, {$inc: {imdbRating: 2}});

// Exercise 5
db.movies.updateOne({title: "Home Alone"}, {$inc: {budget: 5}});

// Exercise 6
db.movies.updateOne({title: "Batman"}, {$mul: {imdbRating: 4}});

// Exercise 7
db.movies.updateOne({title: "Batman"}, {$rename: {"budget": "estimateBudget"}});

// Exercise 8
db.movies.updateOne({title: "Home Alone"}, {$min: {budget: 5}});

// Exercise 9
db.movies.updateOne({title: "Godzilla"}, {$max: {imdbRating: 8.6}, $set: {"category.1": "thriller"}});

// Exercise 10
db.movies.updateOne({title: "Home Alone"}, {$currentDate: {lastUpdated: { $type: "timestamp" }}});

// Exercise 11
db.movies.updateMany({}, {$set: {sequels: 0}});

// Exercise 12
db.movies.updateMany({}, {$unset: {estimateBudget: "", budget: ""}});

// Exercise 13
db.movies.updateMany({$in: ["Batman","Home Alone"]}, {$max: {imdbRating: 17}});

// EXERCISES BONUS

// Exercise 14
db.xmen.updateMany({class: "unknown"}, {$unset: {class: ""}, $currentDate: {lastUpdated: { $type: "timestamp" }}});

// Exercise 15
db.xmen.updateMany({}, {$rename: {"name": "hero_name", "true_name": "full_name"}, $set: {power: 100}, $currentDate: {lastUpdated: { $type: "timestamp" }}});

// Exercise 16
db.xmen.updateMany({$or: [{class: "omega"}, {class: "gama"}]}, {$max: {power: 500}});

// Exercise 17
db.xmen.updateMany({class: "gama"}, {$min: {power: 300}});

// Exercise 18
db.xmen.updateMany({class: {$exists: false}}, {$inc: {power: -100}});

// Exercise 19
db.xmen.updateMany({
    $or: [
        {$and:[
            {occupation: "Senior Staff"},
            {power: {$gt: 100}}
        ]},
        {$and: [
            {occupation: "Junior Staff"},
            {power: {$gt: 200}}
        ]}
    ]
}, {$set: {
    area: ["Students Room"]
}});

// Exercise 20

db.xmen.updateMany({$and: [{occupation: "Junior Staff"}, {area: {$exists: false}}]}, {$set: {area: ["outside"]}});
