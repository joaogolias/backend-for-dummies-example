const myUser = (usersArray: {name: string, email: string}[]) : {email: string}[] => {
    return usersArray.map((user) => {
            return {
                email: user.email
            }
        })   
}