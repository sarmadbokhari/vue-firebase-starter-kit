export function runSetup({ state, commit }) {
  const user = JSON.parse(localStorage.getItem('team-user'));

  if (user) {
    commit('UPDATE_USER', user)
  }
}

// USER ACTIONS
export async function createUser({ commit }, { displayName, email, uid }) {
  const user = { displayName, email, uid }
  // const res = await firebase.database().ref('users').child(uid).set(user)

  commit('UPDATE_USER', user)
}