// USER MUTATIONS
export function UPDATE_USER(state, user) {
  state.user = user
  localStorage.setItem('team-user', JSON.stringify(user))
}

export function REMOVE_USER(state) {
  state.user = null
  localStorage.removeItem('team-user')
}