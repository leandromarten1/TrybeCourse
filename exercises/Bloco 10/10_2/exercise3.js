const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  setTimeout(() => console.log('Returned planet: ', mars.name), 4000); // inserido setTimeOut para o delay de 4s
};

getPlanet();/ / imprime Marte depois de 4 segundos