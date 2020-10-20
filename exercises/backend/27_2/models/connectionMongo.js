
const mongo = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const connect = () => {
  return mongo
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db('learning_rest'))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })

};
module.exports = connect;