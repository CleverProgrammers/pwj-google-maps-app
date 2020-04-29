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

## TODO(TOGETHER): Style the input box and add the search icon

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

## TODO(API): Create a `post` API endpoint `/api/stores` 


## TODO(API) Save the list of stores in a variable called `dbStores`

#### HINTS:

- You will run into an error here when posting data
- Use the stores data we retrieved previously
- Use Postman to post the data
- `console.log()` the data to test

## TODO(API, TOGETHER): Create a MongoDB Databse in MongoDB Atlas

[Click Here](https://www.mongodb.com/cloud/atlas)

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
- Save the list of stores in dbStores
- Use the `.create()` function in mongoose to save the list
- Test it out using Postman
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

## TODO: Create a marker info window and display it on the click of a marker

#### HINTS:

- Use the documentation [here](https://developers.google.com/maps/solutions/store-locator/clothing-store-locator)
- Add an event listener to open info window on the click of a marker
- Use the `createMarker()` function
- Have the html of the info window be the following:

    ```"<b>" + name + "</b> <br/>" + address```

## TODO(TOGETHER): Style the info window based on the design

## TODO: Create HTML and Style for individual store items in the stores list container

#### HTML/CSS Structure:

```
.store-container
    .store-info-container
        .store-address
        .store-phone-number
    .store-number-container
        .store-number
```

## TODO: Show all stores in the stores list container using the stores retrieved from the API

#### HINTS:

- Create a `setStoresList()` function to loop over the stores
- Use template literals when creating the HTML for stores
- Replace the HTML in `.stores-list` with the HTML generated

## TODO: Open info window of a marker on the click of a store in the stores list

#### HINTS:

- Use the documentation [here](https://developers.google.com/maps/solutions/store-locator/clothing-store-locator)
- Create a `setOnClickListener()` function
- Create a `markers` list and add each marker into the array
- Use `.querySelectorAll()` to get all store elements
- Loop over every store element and add an event listener to trigger a marker

## TODO(API, TOGETHER): Get the coordinates of a zip code using Google Maps Geocoding API

This will allow us to search for stores based on zip code

#### HINTS:

- Add `zip_code` parameter to `/api/stores` API endpoint

## TODO(API, TOGETHER): Seach for stores around the zip code using MongoDB

#### HINTS:

- Use MongoDB GeoQuery to find the stores near that coordinate
- Use `distance` of 3218 meters
- Test out using Postman

## TODO(API): Create a `googleMapsService` to clean up the `get` api endpoint 

This service will contain all the logic to get coordinates based on zip code

#### HINTS:

- Use ASYNC/AWAIT 
- Use `googleMapsService` inside `get` API endpoint

## TODO(API, TOGETHER): Add Google Maps API Key to `.env` file

## TODO: Implement search of stores based on Zip Code

#### HINTS:

- Call `getStores()` function on click of `search` icon
- Get `zip code` data from input

## TODO: Clear all locations on every new search

#### HINTS:

- Use documentation
- Clear markers
- Clear `infoWindow`

## TODO(TOGETHER): Add starter screen when visiting the page for the first time

## TODO(TOGETHER): Add a no stores found message when there are no stores found















































