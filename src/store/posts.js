import axios from 'axios';
const server = 'https://server-note-it.herokuapp.com';


//put (user)
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
    case NEW_POST:
        return action.user;
    default:
        return state;
  }
}
