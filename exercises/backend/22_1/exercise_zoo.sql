-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. 
-- As informações a serem armazenadas sobre cada animal são:

-- Nome;

-- Espécie;

-- Sexo;

-- Idade;

-- Localização.

-- Cada animal também possui um cuidador, e cada cuidador pode ser responsável por mais de um animal. 
-- Além disso cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE managers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL
);

CREATE TABLE species (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL
);

CREATE TABLE locations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  city VARCHAR(45) NOT NULL,
  country VARCHAR(45) NOT NULL
);

CREATE TABLE zookeepers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES managers(id)
);

CREATE TABLE animals (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  birth DATE NOT NULL,
  sex VARCHAR(6) NOT NULL,
  zookeeper_id INT NOT NULL,
  location_id INT NOT NULL,
  specie_id INT NOT NULL,
  FOREIGN KEY (zookeeper_id) REFERENCES zookeepers(id),
  FOREIGN KEY (location_id) REFERENCES locations(id),
  FOREIGN KEY (specie_id) REFERENCES species(id) 
);
