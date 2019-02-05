let authorsData = [
    {
        "id": "1",
        "firstName": "John",
        "lastName": "Doe",
        "email": "jdoe@gmail.com",
        "address": "123 Smyrna Dr"
    },
    {
        "id": "2",  
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "janedoe@gmail.com",
        "address": "456 Cumberland Drive"
    },
    {
        "id": "3",    
        "firstName": "Mark",
        "lastName": "Twain",
        "email": "mtwain@gmail.com",
        "address": "440 S Water St"
    },
    {
        "id": "4",
        "firstName": "Ryan",
        "lastName": "Collins",
        "email": "rcollins@gmail.com",
        "address": "1000 Oaks Lane"
    }
];

//Action Types
const GET_AUTHORS = 'GET_AUTHORS';
const ADD_AUTHOR = 'ADD_AUTHOR';
const REMOVE_AUTHOR = 'REMOVE_AUTHOR';
const EDIT_AUTHOR = 'EDIT_AUTHOR';

//Action Creators
export function getAuthors() {
  return {
    type: GET_AUTHORS,
    authors : authorsData
  };
}

export function addAuthor(author) {
  return {
    type: ADD_AUTHOR,
    author
  }
}

export function removeAuthor(authorId){
  return {
    type: REMOVE_AUTHOR,
    authorId
  }
}

export function editAuthor(author){
  return {
    type: EDIT_AUTHOR,
    author
  }
}

//Reducers
export default function reducer(state=[], action) {

  switch(action.type){

    case GET_AUTHORS:
      return action.authors;
    case ADD_AUTHOR:
      authorsData = [...authorsData, action.author];
      return authorsData;
    case REMOVE_AUTHOR:
      authorsData = authorsData.filter(author => author.id !== action.authorId);
      return authorsData;
    case EDIT_AUTHOR:
      authorsData = authorsData.map(author => author.id === action.author.id ? action.author : author);
      return authorsData;
    default:
      return state;
  }
}