function user(name, age, isAdult) {
    return {
        name,
        age,
        isAdult
    }
}

function saveUser(body) {
    if (body.age < 18) {
        return user(
            body.name.toUpperCase(),
            body.age,
            false,    
        )
    }

    return user(
        body.name.toUpperCase(),
        body.age,
        true,
    )
}

module.exports = saveUser;