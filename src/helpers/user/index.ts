const createUser = async (email : string) => {
    const user = await prisma.user.findUnique({where :{email}})

    if(user) {
      throw new Error("User with this email already exists")
    }

    const new_user = await prisma.user.create(
      {data : {email}}
    )

    return new_user

 }
