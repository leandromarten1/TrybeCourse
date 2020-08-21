-- https://sqlbolt.com/lesson/select_queries_with_joins
-- Exercise solutions

-- 1
SELECT films.title, box.domestic_sales, box.international_sales
from boxoffice as box
inner join movies as films
on films.id = box.movie_id;

-- 2
select m.title, b.domestic_sales, b.international_sales
from movies as m
inner join boxoffice as b
on m.id = b.movie_id
where b.domestic_sales < b.international_sales

-- 3
select m.title, b.rating
from movies as m
inner join boxoffice as b
on m.id = b.movie_id
order by b.rating desc