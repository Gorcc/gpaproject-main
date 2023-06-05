// userStorage.js

export const saveUser = (user) => {
  const users = getUsersFromStorage();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const getUsers = () => {
  return getUsersFromStorage();
};

export const clearUsers = () => {
  localStorage.removeItem("users");
};

const getUsersFromStorage = () => {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
};
