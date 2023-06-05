import { encryptDES, decryptDES } from "./encryption";

export const saveUser = (user) => {
  const users = getUsersFromStorage();
  const encryptedUser = {
    name: user.name,
    password: encryptDES(user.password),
    permissions: user.permissions,
  };
  users.push(encryptedUser);
  localStorage.setItem("users", JSON.stringify(users));
};

export const getUsers = () => {
  const storedUsers = getUsersFromStorage();
  const decryptedUsers = storedUsers.map((user) => {
    return {
      name: user.name,
      password: user.password, // No need to decrypt here
      permissions: user.permissions,
    };
  });
  return decryptedUsers;
};

export const clearUsers = () => {
  localStorage.removeItem("users");
};

const getUsersFromStorage = () => {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
};
