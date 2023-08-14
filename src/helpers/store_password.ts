interface User {
  email: string
  password: string
  username?: string
  name?: string
  avatar?: string
}

export default async function store_password(cred: User) {
  const pass = new PasswordCredential({
    id: cred?.username || cred.email,
    name: cred?.name || cred.username || "",
    password: cred.password,
    iconURL: cred.avatar || "",
  })
  return await navigator.credentials.store(pass)
}
