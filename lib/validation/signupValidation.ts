type User = { username: String; email: String; password: String }
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const validateInputs = (user: User) => {
  if (!user.username || user.username.length < 3) {
    console.warn("Username Invalid")
    return false
  }
  if (!user.email.match(validRegex)) {
    console.warn("Email invalid")
    return false
  }
  if (!user.password || user.password.length < 6) {
    console.warn("Password invalid")
    return false
  }

  return true
}
