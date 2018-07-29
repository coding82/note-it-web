import axios from 'axios';
const server = 'https://server-note-it.herokuapp.com/';

//get
const GET_USERS = 'GET_USERS'
const getUsers = users => ({type: GET_USERS}, users)
export const getUsersThunk = () => dispatch =>
  axios.get(`${server}/api/users`)
    .then( res => dispatch(getUsers(res.data)))
    .catch( err => console.error('Error from fetching all users', err))

/* server code

router.get('/', (req, res, next) => {
  return User.findAll()
  .then( users => res.json(users).status(200))
  .catch(next)
})

*/

const SINGLE_USER = 'SINGLE_USER'
const singleUser = user => ({type: SINGLE_USER}, user)
export const singleUserThunk = userId => dispatch =>
  axios.get(`${server}/api/users/${userId}`)
    .then( res => dispatch(singleUser(res.data)))
    .catch( err => console.error('Error from fetching single user', err))
/* server code
## req.params.userId needed

router.get('/:id',(req, res, next) => {
  return User.findById(req.params.id)
  .then( user => res.json(user).status(200))
  .catch(next)
})

*/

//post
const NEW_USER = 'NEW_USER'
const newUser = user => ({type: NEW_USER}, user)
export const newUserThunk = user => dispatch =>
  axios.post(`${server}/api/users`, user)
    .then( res => dispatch(createUser(res.data)))
    .catch( err => console.error('Error from creating a new USER', err))
/* server code
## req.body needed

router.post('/', (req, res, next) => {
  return User.create(req.body)
    .then( user => res.status(201).json(user) )
    .catch(next)
})

*/


//put (user)
const NEW_POST = 'NEW_POST'
const newPost = user => ({type: NEW_POST}, user)
export const newPostThunk = (userId, content) => dispatch =>
  axios.put(`${server}/api/users/${userId}/newpost`, content)
    .then( res => dispatch(newPost(res.data)))
    .catch( err => console.error('Error from creating a new POST', err))
/* server code
## req.body.content, req.params.userId needed

router.put('/:id/newpost', (req, res, next) => {
  // req.body.content
  return User.update({'posts': Sequelize.fn('array_append', Sequelize.col('posts'), req.body.content)}, { where: {id: req.params.id}, returning: true})
    .then(([_, updated]) => res.status(201).json(updated[0]))
    .catch(next)
})

*/


const EDIT_POST = 'EDIT_POST'
const editPost = user => ({type: EDIT_POST}, user)
export const editPostThunk = (userId, postId, content) => dispatch =>
  axios.put(`${server}/api/users/${userId}`, { content, postId })
    .then( res => dispatch(editPost(res.data)))
    .catch( err => console.error('Error from editing a POST', err))
/* server code
## req.body.postId(postIdx), req.body.content, req.params.userId needed

router.put('/:id/editone', (req, res, next) => {
  let {id, content} = req.body
  return User.findById(req.params.id)
    .then( user => {
      user.posts.splice(id, 1, content);
      return User.update({'posts': user.posts}, {where: {id: req.params.id}, returning: true })
    })
    .then(([_, updated]) => res.status(201).json(updated[0]))
    .catch(next)
})

*/


//put (user)
const ONE_TO_TRASH = 'ONE_TO_TRASH'
const oneToTrash = user => ({type: ONE_TO_TRASH}, user)
export const oneToTrashThunk = (userId, postId) => dispatch => {
  axios.put(`${server}/api/users/${userId}/onetotrash`, postId)
    .then( res => dispatch(oneToTrash(res.data)))
    .catch( err => console.error('Error from move a post to TRASH', err))
}
/* server code
## req.body.postId(postIdx) req.params.userId needed

router.put('/:id/onetotrash', (req, res, next) => {
  // put input - req.body.id
  return User.findById(req.params.id)
    .then( user => {
      let outItem = user.posts.splice( +req.body.id, 1)
      let leftItems = user.posts;
              User.update(
                {'trash': Sequelize.fn('array_append', Sequelize.col('trash'), outItem[0])},
                {where: {id: req.params.id},
                returning: true})
       return User.update(
                {'posts': leftItems},
                {where: {id: req.params.id},
                returning: true})
        .then(([_, updated]) => res.status(201).json(updated[0]))
    })
    .catch(next)
})

*/

const EMPTY_TRASH = 'EMPTY_TRASH'
const emptyTrash = user => ({type: EMPTY_TRASH}, user)
export const emptyTrashThunk = userId => dispatch =>
  axios.put(`${server}/api/users/${userId}/emptytrash`)
    .then( res => dispatch(emptyTrash(res.data)))
    .catch( err => console.error('Error from emptying the TRASH bin', err))
/* server code
## req.params.userId needed

router.put('/:id/emptytrash', (req, res, next) => {
  return User.update({'trash': [] }, {where: {id: req.params.id}, returning: true})
    .then(([_, updated]) => res.status(201).json(updated[0]))
    .catch(next)
})

*/


const EMPTY_POSTS = 'EMPTY_POSTS'
const emptyPosts = user => ({type: EMPTY_POSTS}, user)
export const emptyPostsThunk = userId => dispatch =>
  axios.put(`${server}/api/users/${userId}/emptyposts`)
    .then( res => dispatch(emptyPosts(res.data)))
    .catch( err => console.error('Error from emptying the POSTS bin', err))
/* server code
## req.params.userId needed

router.put('/:id/emptyposts', (req, res, next) => {
  return User.update({'posts': [] }, {where: {id: req.params.id}, returning: true})
    .then(([_, updated]) => res.status(201).json(updated[0]))
    .catch(next)
})

*/

export default ( state = {} , action) => {
  switch(action.type) {
    case GET_USERS:
        return action.users
    case SINGLE_USER:
        return action.user
    case NEW_USER:
        return action.user
    case NEW_POST:
        return action.user
    case EDIT_POST:
        return action.user
    case ONE_TO_TRASH:
        return action.user
    case EMPTY_POSTS:
        return action.user
    case EMPTY_TRASH:
    return action.user
    default:
        return state;
  }
}
