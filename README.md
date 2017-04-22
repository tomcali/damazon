# damazon
Week 12 Homework Project with MySQL

## Overview
This assignment concerns node.js and its use as a tool for interacting with a relational database.

I work through the instructions for the basic assignment, entering initial data for the store into a comma-delimited text file and creating a MySQL database using the Sequel Pro application. The database is called damazon_db.

## Viewing the App
The GitHub repository shows the work on the assignment. 

## Requirements
The requirements for this assignment may be found in the file homework_instructions.md, which is enclosed in the repository. 

## Technologies Used
* Git/GitHub
* node/npm with initial npm init to set up package.json
* node.js package fs for interacting with the MySQL database

## Coding Process 
* We start with GitHub, setting up the repository for the application 
* Clone the repository and set up the files required for this assignment, including .gitignore. 
* npm init to set up package.json with the ability to add packages/modules with npm init -y
* Added mysql package with npm install --save mysql
* Utilize appropriate node packages to complete the tasks required for the assignemnt for example npm install --save inquirer
* Set up comma-delimited file products.csv in Excel 
* Executed mysql.server start and defined the database scheme for products_db   via mysql.server start
* Entered Sequel Pro from localhost 127.0.0.1 with username root
* Created schema for products_db database using Sequel Pro (commands shown in create-database.sql)
* Read the contents of products.csv into MySQL  using Sequel Pro
* Wrote code handle user requests for product. 
* Executed the work under node.js
  

## Application Testing
