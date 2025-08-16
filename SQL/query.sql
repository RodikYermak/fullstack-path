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

SELECT brand, model, price FROM cars
WHERE price > ANY (
    SELECT SUM(sold_price) FROM sold_cars
    JOIN staff ON staff.id = sold_cars.seller
        GROUP BY staff.dealership_id
);