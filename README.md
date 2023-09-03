# Project Setup Instructions

## Install Dependencies

1. **Project Setup:**

   - Open your terminal.

   - Navigate to the `YelpCamp` folder:
     ```sh
     cd ./YelpCamp
     ```

   - Install the required dependencies by running:
     ```sh
     npm i
     ```

   - Create a `.env` file in the `backend` folder with the following variables:

     ```plaintext
     MONGO_URI=
     CLOUDINARY_CLOUD_NAME=
     CLOUDINARY_KEY=
     CLOUDINARY_SECRET=
     MAPBOX_TOKEN=
     ```

     Be sure to replace the placeholders (`MONGO_URI`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET`, and `MAPBOX_TOKEN`) with your actual configuration values. 

     - `MONGO_URI` should be your MongoDB connection URI.
     - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_KEY`, and `CLOUDINARY_SECRET` are for Cloudinary integration.
     - `MAPBOX_TOKEN` is for Mapbox integration.

2. **Seed the Map Data:**

   - In your terminal, navigate to the `seeds` folder:
     ```sh
     cd ./seeds
     ```

   - Run the `index.js` script to seed the map data using the following command:
     ```sh
     node ./index.js
     ```

## Important Note

- Before running the server, make sure to install `nodemon` globally or as a development dependency. If not already installed, you can install it using the following command:

  ```sh
  npm install -g nodemon


## Running the Server

To run the server, use the following command:

```sh
npm run start
