const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }
      
  describe('Nome do usuário pelo ID', () => {
    test('Testando Async Await', async () => {
      const userName = await findUserById(4);
      expect(userName.name).toEqual('Mark');
    });

    test('Testando Async Await', async () => {
      const userName = await findUserById(5);
      expect(userName.name).toEqual('Paul');
    });
  });

  describe('Error teste', () => {
    test('Usando Try/Catch', async () => {
      try{
        await findUserById(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.'})
      }
    });
  });