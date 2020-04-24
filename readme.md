# TODOS

## TODO(TOGETHER): Import Google Maps into our App

#### HINTS

- Show Google Maps in the full browser window

### TODO(OPTIONAL): Customize your Google Maps style

[Dcumentation](https://developers.google.com/maps/documentation/javascript/styling)

### TODO: Change the starting map location to be

    {lat: 34.063380, lng: -118.358080}

## TODO(TOGETHER): Create HTML and Style for the header `STORE LOCATOR`

## TODO: Create HTML and Style for the input container 

#### HINTS
- It does not need to have the input box or the search icon.
- It simply needs to show the box in the correct location with the correct background color
- Position the container to the best of your ability

#### HTML HINTS

    class: search-container

## TODO(TOGETHER): Style the input box and add the seaarch icon

## TODO: Create HTML and Style for the stores list container

#### CSS HINTS

    width: 400px;
    border-radius: 30px;
    background-color: white;
    top: 320px;

#### HTML HINTS

    class: stores-list-container

## TODO: Add a marker to the map at the following position

    {lat: 34.063380, lng: -118.358080}

## TODO(API): Set up NodeJS Server

##### Return `Hello World` for the root `/` get request

[Example](https://expressjs.com/en/starter/hello-world.html)

## TODO(API, TOGETHER): Retreive Stores data

## TODO(API, TOGETHER): Create a MongoDB Databse in MongoDB Atlas

[Click Here](https://www.mongodb.com/cloud/atlas)

## TODO(API): Create a `post` API endpoint `/api/stores` 


## TODO(API) Save the list of stores in a variable called `dbStores`

#### HINTS:

- You will run into an error here when posting data
- Use the stores data we retrieved previously
- Use Postman to post the data

## TODO(API, TOGETHER): Setup Mongoose to connect to MongoDB

- Install Mongoose

- Connect Mongoose to MongoDB Atlas

## TODO(API, TOGETHER): Create a Store model to define the schema(structure) of the data

#### SCHEMA:

    _id
    storeName
    phoneNumber
    address
    openStatusText
    addressLines
    location

## TODO(API): Create a `delete` API Endpoint `api/stores`

This will allow us to delete all the stores in the database

## TODO(API): Complete the `post` `/api/stores` endpoint to save the data in MongoDB Atlas

#### HINTS:

- Use the documentation link [here](https://mongoosejs.com/docs/api.html#model_Model.create)
- Make sure to correctly map the data to MondoDB Schema
- Feel free to use the `delete` api endpoint to reset the database and re-test

## TODO(API): Create a `get` API Endpoint `api/stores` to get all stores from database

#### HINTS:

- This should return the full list of stores
- Make sure to test it with Postman

## TODO: Retrieve list of stores from API

#### HINTS:

- Create a `getStores()` function
- `console.log` the list of stores to test

## TODO(TOGETHER): Show markers on the map using the stores retrieved from the API

#### HINTS:

- Create a `searchLocationsNear()` function to loop over all of the stores
- Create a `createMarker()` function to add marker to the map












































