
const mysqlx = require('@mysql/xdevapi');

const config = {
  user: 'root', // Substitua pelo usuário que usa para conectar ao banco na sua máquina, `root` normalmente.
  password: '292311', // Sua senha.
  host: 'localhost', // Seu host, `localhost` é o comum.
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

let schema;

const connect = async () => {
  if (schema) return Promise.resolve(schema);
  try {
    const session = await mysqlx.getSession(config);
    schema = await session.getSchema('rest_exercicios');
    return schema;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};
module.exports = connect;