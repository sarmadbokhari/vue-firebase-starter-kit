export function user(state) {
  if (!state.user) {
    return null
  } else {
    return state.user
  }
}