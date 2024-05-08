# Documentation: Recipe Application Backend Using NODE JS

   ## POSTMAN Collection is in project file

   
   ### Installation and Setup

To set up the project on your local machine, follow these steps:

Clone the repository from the provided source.

You'll get the  directory named  and *recipe-app-be*.
Navigate to  directory and run the command that is given below.

> npm install

After this, you need to run  app with the following command on each specific terminal.

  > npm run dev

*Note:* *Before starting the backend create a .env file based on the provided .env.example file in the backend folder and configure the environment variables.*

 ### API Endpoints
 **5.2.1** User Registration <br>
**5.2.2** User Login <br>
 **5.1**  Recipes CRUD <br>
**5.1.1** Create a Recipes <br>
**5.1.2** Retrieve All Recipes <br>
**5.1.3** Retrieve a Single Recipes <br>
**5.1.4** Update a Recipes <br>
**5.1.5** Delete a Recipes <br>
**5.2**   Users Management <br>



### Introduction
A Recipes CRUD backend is a Node.js application that provides endpoints to manage recipes. It typically includes functionalities to:

Register: For Register User 

Login:For Login 
Create:Create a Recipe for Logged In User
Read: Read and view Recipe 
Update: Update a Single Recipes 
Delete: Delete a Single Recipes

### Technologies Used
The backend of the project is built using the following technologies:

**Node.js** : JavaScript runtime environment
**Express.js**: Web application framework for Node.js
**MongoDB**: NoSQL database for storing car and user data
**JWT**: JSON Web Tokens for user authentication
**RESTful API principles**: HTTP methods and status codes for communication

### Project Structure
The project follows a common structure for an Express.js application. Here is an overview of the important files and directories:<br>

**index.js**: Entry point of the application<br>

**routes/**: Contains route files for car and user endpoints<br>

**middlewares/**: Contains middleware functions for authentication and error handling<br>

**models/**: Contains Schema  for table structure<br>

**controllers/**: Contains Functions Logic of Api<br>

**test/**: Contains .test.js files for testing and error handling<br>





