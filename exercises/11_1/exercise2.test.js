const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

describe('Testando Nomes', () => {
  test('Nome do usuário pelo ID', () =>{
    expect.assertions(1);
    return getUserName(4).then(name => {
      expect(name).toEqual('Mark');
    })
  });

  test('Nome do usuário pelo ID', () =>{
    expect.assertions(1);
    return getUserName(5).then(name => {
      expect(name).toEqual('Paul');
    })
  });
});

describe('Quando não existe ID', () => {
  test('Retorna mensagem de erro com ID', () => {
    return getUserName(1).catch(error =>
      expect(error).toEqual({ error: 'User with 1 not found.' })
    );
  });
});
