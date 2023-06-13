const { writeFile } = require('fs/promises');

const user = (name, age, isAdult) => {
    return {
        name,
        age,
        isAdult
    }
}

async function getUser(body) {
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

async function saveUser(body) {
    const userBody = await getUser(body);
    
    try {
        await writeFile(__dirname + '/db.txt', JSON.stringify(userBody), {flag: 'a+'}); // flaf a+ means that data in file won't be replaces
    } catch (err) {
        console.log(err.message);
    }

    return userBody;
}

module.exports = saveUser;