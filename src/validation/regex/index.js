export const USERNAME_REGEX = /^(?!.*[_.]{2})(?![0-9])[a-zA-Z0-9_.]{4,15}$/
export const EMAIL_REGEX = /\S+@\S+\.\S+/
export const NAME_REGEX = /^[A-Za-z\s]+$/
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@#$%^&+=]{12,32}$/
