-- Exercise from https://github.com/XD-DENG/SQL-exercise/tree/master/SQL_exercise_01

SELECT * FROM praticando.Manufacturers;
SELECT * FROM praticando.Products;

-- 1.10 - Select all the data from the products, including all the data for each product's manufacturer.
select p.*, m.name
from praticando.Products as p
inner join praticando.Manufacturers as m
on p.Manufacturer = m.code;

-- 1.11 - Select the product name, price, and manufacturer name of all the products.
select p.name, p.price, m.name
from praticando.Products as p
inner join praticando.Manufacturers as m
on p.Manufacturer = m.code;

-- 1.12 - Select the average price of each manufacturer's products, showing only the manufacturer's code.
select avg(price), Manufacturer
from praticando.Products
group by Manufacturer;

-- 1.13 - Select the average price of each manufacturer's products, showing the manufacturer's name.
select avg(p.price), m.name
from praticando.Products as p
inner join praticando.Manufacturers as m
on p.Manufacturer = m.code
group by m.name;

-- 1.14 - Select the names of manufacturer whose products have an average price larger than or equal to $150.
select m.name, avg(p.price)
from praticando.Manufacturers as m
inner join praticando.Products as p
on p.Manufacturer = m.code
group by m.name
having avg(p.price) >= 150;
