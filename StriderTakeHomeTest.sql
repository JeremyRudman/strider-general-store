/* creates the tables needed to store receipts*/

CREATE TABLE Customers (
	CustomerId int,
	CustomerName nvarchar(max),
	PRIMARY KEY (CustomerId)
);

CREATE TABLE Receipts (
	OrderId int,
	CustomerId int,
	Total Money,
	OrderDateTime DateTime,
	PRIMARY KEY (OrderId),
	FOREIGN KEY (CustomerId) REFERENCES Customers(CustomerId),
);

CREATE TABLE ItemsOrdered (
	Id int IDENTITY,
	ItemName nvarchar(max),
	ItemPrice nvarchar(max),
	Quantity int,
	OrderId int,
	PRIMARY KEY (Id),
	FOREIGN KEY (OrderId) REFERENCES Receipts(OrderId),
);

/* parses the json into the correct table */

Declare @JSON varchar(max);


/* NOTE: the path will need to be changed to the correct location */
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'E:\Downloads\receipts.json', SINGLE_CLOB) import;

INSERT INTO Customers (CustomerId, CustomerName)
SELECT Distinct CustomerId, CustomerName
FROM OPENJSON (@JSON)
WITH 
(
    CustomerId int, 
    CustomerName nvarchar(max)
);

INSERT INTO Receipts (OrderId, CustomerId, Total, OrderDateTime)
SELECT OrderId, CustomerId, Total, Date
FROM OPENJSON (@JSON)
WITH 
(
    OrderId int, 
    CustomerId int, 
    Total Money, 
    Date DateTime 
);

INSERT INTO ItemsOrdered(ItemName, ItemPrice, Quantity, OrderId)
SELECT  Item, ItemPrice, Quantity, OrderId
FROM OPENJSON (@JSON)
WITH 
(
	OrderId int,
	Items nvarchar(max) as json
) as Orders
cross apply openjson(Orders.Items)
WITH(
	Item nvarchar(max),
	ItemPrice nvarchar(max),
	Quantity int
) as ItemsOrdered;


/* scripts to get repeat customers, the customer that spent the most, the total number of customers, and the item the was purchased the most */

SELECT Customers.CustomerName AS RepeatCustomers
FROM Receipts 
LEFT JOIN Customers ON Customers.CustomerId = Receipts.CustomerId
Group by Customers.CustomerName Having Count(*) > 1;

SELECT TOP 1 Customers.CustomerName, SUM(Total) as AmountSpent
FROM Receipts
LEFT JOIN Customers ON Customers.CustomerId = Receipts.CustomerId
GROUP BY Customers.CustomerName
ORDER BY SUM(Total) DESC;

SELECT COUNT(*) as NumberCustomers FROM Customers;

SELECT TOP 1 ItemName, Sum(Quantity) AS QuantityPurchased
FROM ItemsOrdered
GROUP BY ItemName
ORDER BY QuantityPurchased DESC;