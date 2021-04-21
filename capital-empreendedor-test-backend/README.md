# CE Test - Web Server

## Running the server

First of all, run `npm install` to configure the needed files to run the server.

Then, run `npm start` or `yarn start` to run the server on `http://localhost:3000/`. The server will **not** automatically reload if you change any of the source files.

### Backend decisions: 

The functions to get and set informations from the database were already made. The only need was to develop the router functions to fetch these data and send them to the frontend. Because of the lack of time and knowledge about routing and database, the implemented functions were made to get and set data based on predetermined values. The right way was to make these actions generalized, getting and setting data using informations from the request to get the right data from the database.