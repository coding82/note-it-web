import axios from 'axios';
const server = 'https://server-note-it.herokuapp.com';


//put (user)

/* server code
## req.params.userId needed

router.put('/:id/emptytrash', (req, res, next) => {
  return User.update({'trash': [] }, {where: {id: req.params.id}, returning: true})
    .then(([_, updated]) => res.status(201).json(updated[0]))
    .catch(next)
})

*/


export default ( state = [] , action) => {
  switch(action.type) {
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
