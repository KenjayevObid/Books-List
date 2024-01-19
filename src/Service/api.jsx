import axios from "axios";

const usersUrl = "http://localhost:3002/books";
const loginUrl = "http://localhost:3002/register";

export const getUsers = async (id) => {
  id = id || "";
  try {
    return await axios.get(`${usersUrl}/${id}`);
  } catch (error) {
    console.log("Error while calling getUsers api ", error);
  }
};

export const addUser = async (user) => {
  return await axios.post(`${usersUrl}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};
export const RegisterData = async (register) => {
  return await axios.post(`${loginUrl}`, register);
};
export const SignInData = async (signUser) => {
  const res = await axios.get(`${loginUrl}`);
  const resdata = res.data;
  
    const foundUser = resdata.find(
      (user) =>
        user.username == signUser.username && user.password == signUser.password
    )
    if (foundUser) {
      return true;
    } else {
      return false;
    
  }
};
