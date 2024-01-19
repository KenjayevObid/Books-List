import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import NotFound from "./Component/NotFound";
import SignIn from "./Component/SignIn";
import Rejister from "./Component/Rejister";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav";
import { createContext, useState } from "react";

export const UserContext = createContext();
function App() {
  const [getBoolen, setGetBoolen] = useState(JSON.parse(localStorage.getItem('bool')));
  localStorage.setItem("bool", JSON.stringify(getBoolen));
  return (
    <UserContext.Provider value={[getBoolen, setGetBoolen]}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Rejister />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/all/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
