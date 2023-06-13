const fs = require('fs').promises;
const path  = require('path');

const dbPath = path.join(__dirname, 'db.txt');

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
    try {
        const userBody = await getUser(body);
        await fs.writeFile(dbPath, JSON.stringify(userBody), {flag: 'a+'}); // flaf a+ means that data in file won't be replaces
        return userBody;
    } catch (err) {
        console.log(err.message);
        return err;
    }
}

module.exports = saveUser;