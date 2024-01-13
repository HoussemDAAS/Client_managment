import users from "../models/data/users.data";
 

const get = (id) => {
    return users.find((user) => user.id === id);
}

const update = (user) => {

}
 const insert = (user) => {
    const newUser = {...user, id: users.length + 1};
    users.push(newUser);
    return true;
}
const Remove = (userId) => {

}
export {
    get,
    update,
    insert,
    Remove
}