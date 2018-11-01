const addAgeAndCreateEmail = (user: {name: string, age: number}): 
            {name: string, age: number, email: string} => {
                     const newEmail = user.name + '@' +'email.com'
                     return {
                         ...user,
                         age: user.age + 1,
                         email: newEmail
                     }
                 }