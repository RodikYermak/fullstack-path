/*
	Select the brand, model and price from cars
		where the price is greater than the sold price
			of any car that was sold by Frankie Fender
		and the car has not been sold
*/

-- SELECT brand, model, price FROM cars
--   WHERE price > ANY (
--     SELECT SC.sold_price FROM sold_cars SC
--       JOIN staff S ON SC.seller = S.id
--       WHERE S.name = 'Frankie Fender'
--   ) AND sold IS FALSE;

/*
	Select the brand, model and price where
		* the price is lower than any Ford
		* the brand is Volkswagen
*/

-- SELECT brand, model, price FROM cars
--     WHERE brand = 'Volkswagen'
--         AND price < ANY (SELECT price
--                     FROM cars
--                     WHERE brand = 'Ford');

/*
	Select the name, and sold price
		from the staff table, joined with sold_cars
		on matches between staff(id) and sold_cars(seller)
	Where the seller has sold a car for a price greater than
		any sum of a salesperson's total sales
*/
-- SELECT S.name, SC.sold_price
--     FROM staff S
--     JOIN sold_cars SC ON S.id = SC.seller
-- WHERE SC.sold_price > ANY(
-- SELECT SUM(sold_price) FROM sold_cars
--     GROUP BY seller
-- );

/*
	Select the brand, model and price from cars
	Where the price of the car is greater
		than the total sales of any dealership
*/

-- SELECT brand, model, price FROM cars
-- WHERE price > ANY (
--     SELECT SUM(sold_price) FROM sold_cars
--     JOIN staff ON staff.id = sold_cars.seller
--         GROUP BY staff.dealership_id
-- );

/*
	Select brand, model, condition and price from cars
		where the price is less than all cars which are in average condition (3)
*/

-- SELECT brand, model, condition, price
--   FROM cars
-- WHERE price < ALL (
--   SELECT price FROM cars
--     WHERE condition = 3
-- );

/*
	Select the brand, model and year from cars
	Where the year is before all cars with a brand of 'Ford'
	Order the results by year
*/

-- SELECT brand, model, year
-- FROM cars
-- WHERE year < ALL (
--     SELECT year
--     FROM cars
--     WHERE brand = 'FORD'
-- )
-- ORDER BY year;

/*
	Select the brand, model, city, and price from cars
		joined with dealerships where cars(dealership_id) matches dealerships(id)
	where the price is greater than the price of all sold cars
	order the results by city
*/

-- SELECT c.brand, c.model, d.city, c.price
-- FROM cars AS c
-- JOIN dealerships AS d 
--   ON c.dealership_id = d.id
-- WHERE c.price > ALL (
--     SELECT sc.sold_price 
--     FROM sold_cars AS sc
-- )
-- ORDER BY d.city;


/*
	Select colors of car where there has been a sale of that color car
*/

-- SELECT color FROM cars
--   WHERE EXISTS (
--     SELECT 1 FROM sold_cars WHERE cars_id = cars.id
--   );

/*
	Select colors of car where there has been a sale of that color car
*/

-- SELECT DISTINCT color FROM cars
--   WHERE EXISTS (
--     SELECT 1 FROM sold_cars WHERE cars_id = cars.id
--   )
--   ORDER BY color;


  /*
	Select the city, state and date established of dealerships
		Where there are no existing cars in stock

	Format the date in 'YYYY-MM-DD' format using TO_CHAR()
		and alias it as 'est'
*/
-- SELECT city, state, TO_CHAR(established, 'YYYY-MM-DD') AS est
-- FROM dealerships d
-- WHERE NOT EXISTS (
--     SELECT 1
--     FROM cars c
--     WHERE c.dealership_id = d.id
-- )

/*
	Select the city and state of dealerships
	Where there exists a car priced at more than $50,000

	Hint: you'll need to match cars(dealership_id) with dealerships(id)
	and then check for car price in your subquery
*/

-- SELECT city, state FROM dealerships
--     WHERE EXISTS(
--         SELECT 1
--         FROM cars
--         WHERE cars.dealership_id = dealerships.id AND cars.price > 50000
--     )

/*
	Select the name of salespeople
		(role = 'Salesperson')
	who have not sold a car for more than $45,000
*/

-- SELECT name FROM staff S
--   WHERE role = 'Salesperson'
--   AND NOT EXISTS (
--     SELECT 1 FROM sold_cars SC
--       WHERE SC.seller = s.id AND SC.sold_price > 45000
--   ) AND EXISTS (
--     SELECT 1 FROM sold_cars SC where seller = s.id
--   );

/*
	Select the brand, model, condition from cars
		Based on the car's condition level, output the following:
			* 'Excellent' when 4 or greater
			* 'Fair' when 3 or greater
			* 'Poor' when 1 or greater
			* 'Wrecked' for all other cases
		Aliased as 'condition label'
	From cars
	Order by the condition in descending order
*/

SELECT brand, model, condition, 
  CASE
    WHEN condition >= 4 THEN 'Excellent'
    WHEN condition >= 3 THEN 'Fair'
    WHEN condition >= 1 THEN 'Poor'
    ELSE 'Wrecked'
  END AS condition_label
  FROM cars
  ORDER BY condition DESC;
