const USER_SELECTED = 'USER_SELECTED'
const selectUser = (user) => ({type: USER_SELECTED, payload: user})

export {selectUser, USER_SELECTED}