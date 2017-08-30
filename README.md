# My Reads

This is an app that allows you to track your reading, by seaching books and adding them too three custom shelfs:
* Currently Reading
* Want to Read
* Read

It's also possible to move a book from one shelf to another or removing a book from the shelfs selecting the "none" option.

## Prerequisites

You'll need to install Node.js and npm first.
[`Node + npm`](https://nodejs.org/en/download/)

## Installation

1. Clone this Repo
`git clone https://github.com/lookshinji/project_myreads.git myReads`
The myReads name is optional. You can change the directory name.

2. After cloning this repository, go inside the directory
`cd myReads`
Or cd **directory_name** you've chosen.

3. Once inside the main directory install all the dependencies with
`npm install`

4. After you have installed all the dependencies you just need to start the app
`npm start`

The App should be running in **`localhost:3000`**

## More about this project
This my approach to My Reads, an project for React Fundamentals Course at Udacity.
They provided a [template](https://github.com/udacity/reactnd-project-myreads-starter) for this App, with a static example of the CSS and HTML markup that may be used, but without any of the React code was is needed to complete the project.

I had to separate the code in different components, handle state, and LifeCycle events among other things to make the app work as expected.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Backend Server
To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## create-react-app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
