CREATE DATABASE damazon_db;

-- used if we want to revise the schema --
DROP TABLE products;

CREATE TABLE `products` (
  `item_id` int(10) DEFAULT NULL,
  `product_name` varchar(60) DEFAULT NULL,
  `department_name` varchar(60) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock_quantity` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- https://dev.mysql.com/doc/refman/5.7/en/load-data.html --
-- THIS IS THE STRUCTURE FOR THE SQL STATEMENTS --
-- HERE WORKING WITH FILE WITH HEADER ROW --
LOAD DATA LOCAL INFILE  
"/Users/poweruser/damazon/products.csv"
INTO TABLE products  
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(item_id,product_name,department_name,price,stock_quantity);

-- check the data
SELECT * FROM products;