import userDao from "../persistance/user.dao";

const getUser = (userId) => {
  userDao.get(user);
};
const updateUser = (userId) => {
    userDao.upadate(user);
  };
const addUser = (user) => {
  userDao.insert(user);
};
const removeUser = (userId) => {
  userDao.remove(user);
};
export default  {
  getUser,
  updateUser,
  addUser,
  removeUser}