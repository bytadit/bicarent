# Binar Car Rental (BICARENT) - Synrgy FSW3 Challenge 7
In this 7th Challenge i make 2 kind of works inside two folder, backend and frontend
## Backend
This work contained the backend field of application, creating Cars API, mimic to [this api](https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json). <br>
Express.JS used as the foundation, along with Sequelize to facilitate the ORM functionality (Migration, Model, etc). <br>
The Design Pattern used is, MVC with Service-Repository. The RDBMS used here is PostgreSQL<br>
Running this app is quite simple, just:
1. Setup PostgreSQL (if you haven't), and open the config/database.js (do your own config)
2. `npm install` ==> To install all required modules
3. `npm run db:create` ==> To create database, as your config
4. `npm run db:migrate` ==> To migrate all required table
5. `npm run db:seed` ==> To seed all predefined, data (seeder)
6. `npm start` ==> To run server
This App produced API in JSON, and will be used by FrontEnd App in another folder

## FrontEnd
This work is used to create the view of application. Using React.JS and its feature, React Context API, to manage state. This app contains the view of landing page (mimic to Challenge 1), and Cars Page where users can search the Cars by configuring some filters (Drivers, Date & Time, and Passenger Count). <br>
The cars data shows in Cars Page is fetched from API, created by running servers (backend app) created before. <br>
Running this app, is quite simple as well, you just need to :
1. `npm install` ==> To install all required modules
2. `npm start` ==> to start app

That's it, i can be better, later
Preview Below:
![](https://github.com/bytadit/bicarent/blob/Challenge_7/preview.gif)
