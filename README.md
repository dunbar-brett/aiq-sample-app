# AIQ Contact Manager 

This is a simple app for contact management using React and Express. It's not connected to a DB and all contacts are stored on a JSON file within the `server` directory

## To Run the App and Server

Once you clone this repo you need to install the node modules for both the React app and the Express app. I suggest having two terminal tabs or windows open, one in the main poject directory and one in the `server` directory.

In the main directory, install node modules:

`npm i`

Then navigate to the `server` directory and install it's node modules as well:

`cd server`
`npm i`

Now back in the main directory, start the React app server:

`npm run start`

And in the `server` directory run:

`npm run start` 

or if you want hot reload support:

`npm run dev`

You can then navigate to `http://localhost:3000/` in your browser to view the Contact Manager app.


## API Endpoints:

### Get Contacts
`http://localhost:3000/api/contacts`

Returns a list of contacts that are stored in the `contacts.json` file in `/server`

### Post Contacts
`http://localhost:3000/api/contacts`

Accepts a contact object with the following properties
Name (required)
Email (required)
Address (optional)