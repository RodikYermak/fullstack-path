-- SELECT name, role, sold_price FROM staff
-- 	FULL JOIN sold_cars ON staff.id = seller;

/*
	Select the city and average car price
	Round that car price to a whole number
	
	Only show dealerships which have cars
	
	Group by dealership city and state
*/

-- SELECT city, state, ROUND(AVG(price), 2) AS avg_price
--     FROM cars
--     RIGHT JOIN dealerships D ON dealership_id = D.id
-- GROUP BY city, state;

/*
	Select the name and role, alongside a total_sales:
		this is the sum of sales by a member of staff
	
	Use staff as your left table and sold_cars as your right table
	
	Include a where clause to select only staff with the role 'Salesperson'
	
	Group by staff name and role
	Order by the total_sales from high to low
*/
-- SELECT name, role, SUM(sold_price) AS total_sales
--     FROM staff
--     RIGHT JOIN sold_cars ON staff.id = seller
-- WHERE role  = 'Salesperson'
-- GROUP BY name, role
-- ORDER BY total_sales DESC

/*
	Select the city, state and
		count the total number of cars in each dealership
		alias the count as car_count
	
	Use cars as the left table, and dealerships as the right table
		choosing a join which will show every dealership
		
	Include a condition to count unsold cars
	
	Group by dealership city and state
	Order by the car_count
*/

-- SELECT city, state, COUNT(C.id) AS car_count
-- 	FROM cars C
-- 	RIGHT JOIN dealerships D ON dealership_id = D.id
-- WHERE sold IS NOT TRUE
-- GROUP BY city, state
-- ORDER BY car_count;


-- SELECT
-- 	C.brand,
-- 	C.model,
-- 	S.name AS seller_name,
-- 	D.city,
-- 	TO_CHAR(SC.sold_date, 'DD-MM-YYYY') AS date_of_sale
-- FROM sold_cars SC
-- 	INNER JOIN cars C ON SC.cars_id = C.id
-- 	LEFT JOIN staff S ON SC.seller = S.id
-- 	LEFT JOIN dealerships D ON S.dealership_id = D.id;

    /*
	Select the name, role and city from sold_cars
	
	Join with the staff and dealerships tables
		use appropriate joins to show staff who have no dealership_id
		
	Include a where clause to find
		- null values in sold_cars
		- staff who have the role 'Salesperson'
*/

-- SELECT
--     S.name,
--     S.role,
--     D.city
-- FROM sold_cars SC
--     FULL JOIN staff S ON SC.seller = S.id
--     LEFT JOIN dealerships D ON S.dealership_id = D.id
-- WHERE SC.id IS NULL
--     AND S.role = 'Salesperson';

/*
	Show the city and state of dealerships
		with a count of the cars sold
		aliased as cars_sold
		
	Select from sold_cars
		join with the relevant tables
		
	Include dealerships which have no sold cars
	
	Order the count in descending order
		
	Hint: you may need to join using a table not included in our columns
*/

SELECT
	D.city,
	D.state,
	COUNT(SC.id) AS cars_sold
FROM sold_cars SC
	LEFT JOIN cars C ON SC.cars_id = C.id
	RIGHT JOIN dealerships D ON C.dealership_id = D.id
GROUP BY D.city, D.state
ORDER BY cars_sold DESC;