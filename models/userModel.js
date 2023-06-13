const { readFile } = require('fs').promises;

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
    const user = await getUser(body);
    const file = await readFile(__dirname + '/db.txt', 'utf8');
    console.log(file);

    return user;
}

module.exports = saveUser;