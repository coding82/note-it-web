import axios from 'axios';
const server = 'https://server-note-it.herokuapp.com';

// users //
const GET_USERS = 'GET_USERS'
const getUsers = users => ({type: GET_USERS, users})
export const ThunkGetUsers = () => dispatch =>
  axios.get(`${server}/api/users`)
    .then( res => res.data)
    .then( data => dispatch(getUsers(data)))
    .catch( err => console.error('Error from fetching all users', err))

const SINGLE_USER = 'SINGLE_USER'
const singleUser = user => ({type: SINGLE_USER, user})
export const ThunkSingleUser = userId => dispatch =>
  axios.get(`${server}/api/users/${userId}`)
    .then( res => dispatch(singleUser(res.data)))
    .catch( err => console.error('Error from fetching single user', err))

const NEW_USER = 'NEW_USER'
const newUser = user => ({type: NEW_USER, user})
export const ThunkNewUser = user => dispatch =>
  axios.post(`${server}/api/users`, user)
    .then( res => dispatch(newUser(res.data)))
    .catch( err => console.error('Error from creating a new USER', err))





/// trash ///

const ONE_TO_TRASH = 'ONE_TO_TRASH'
const oneToTrash = user => ({type: ONE_TO_TRASH, user})
export const ThunkOneToTrash = (userId, postId) => dispatch => {
 return axios.put(`${server}/api/users/${userId}/onetotrash`, postId)
    .then( res => dispatch(oneToTrash(res.data)))
    .catch( err => console.error('Error from move a post to TRASH', err))
}

const RESTORE_ONE = 'RESTORE_ONE';
const restoreOne = user => ({type:RESTORE_ONE, user})
export const ThunkRestoreOne = (userId, postId) => dispatch => {
  return axios.put(`${server}/api/users/${userId}/restoreone`, postId)
    .then( res => dispatch(restoreOne(res.data)))
    .catch( err => console.error('Error from move a post to TRASH', err))
}

const RESTORE_ALL = 'RESTORE_ALL';
const restoreAll = user => ({type:RESTORE_ALL, user})
export const ThunkRestoreAll = userId => dispatch => {
  return axios.put(`${server}/api/users/${userId}/restoreall`)
    .then( res => dispatch(restoreOne(res.data)))
    .catch( err => console.error('Error from move a post to TRASH', err))
}

const EMPTY_TRASH = 'EMPTY_TRASH'
const emptyTrash = user => ({type: EMPTY_TRASH, user})
export const ThunkEmptyTrash = userId => dispatch =>
  axios.put(`${server}/api/users/${userId}/emptytrash`)
    .then( res => dispatch(emptyTrash(res.data)))
    .catch( err => console.error('Error from emptying the TRASH bin', err))





/// posts ///

const NEW_POST = 'NEW_POST'
const newPost = user => ({type: NEW_POST, user})
export const ThunkNewPost = (userId, content) => dispatch =>
  axios.put(`${server}/api/users/${userId}/newpost`, content)
    .then( res => dispatch(newPost(res.data)))
    .catch( err => console.error('Error from creating a new POST', err))

const EDIT_POST = 'EDIT_POST'
const editPost = user => ({type: EDIT_POST, user})
export const ThunkEditPost = (userId, postId, content) => dispatch =>
  axios.put(`${server}/api/users/${userId}`, { content, postId })
    .then( res => dispatch(editPost(res.data)))
    .catch( err => console.error('Error from editing a POST', err))

const EMPTY_POSTS = 'EMPTY_POSTS'
const emptyPosts = user => ({type: EMPTY_POSTS, user})
export const ThunkEmptyPosts = userId => dispatch =>
  axios.put(`${server}/api/users/${userId}/emptyposts`)
    .then( res => dispatch(emptyPosts(res.data)))
    .catch( err => console.error('Error from emptying the POSTS bin', err))


    
    

export default ( state = [] , action) => {
  switch(action.type) {
    case GET_USERS:
        return action.users
    case SINGLE_USER:
        return action.user;
    case NEW_POST:
        return action.user;
    case ONE_TO_TRASH:
        return action.user;
    case RESTORE_ONE:
        return action.user;
    case RESTORE_ALL:
        return action.user;
    default:
        return state;
  }
}
