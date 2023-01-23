import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Admin from './pages/admin/Admin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import UserContext from "./context/userContext";
import Dashboard from "@mui/icons-material/Dashboard";

import Onboarding from "./pages/role/Hr/onboarding/Onboarding";
import Gettemp from "./Sensor";
// import { useState, useEffect } from "react";
function App() {
  const { darkMode } = useContext(DarkModeContext);
   const [user, setUser ]=useState();
   const [temp, setTemp] = useState(10);

  //  console.log("the tempratue is ",gettemp())
  //  localStorage.setItem("tempraure",temp);
  //  localStorage.getItem()
  //  const UserContext=useContext(UserContext);




 
  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* <UserContext.provider user={user}> */}
      <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login  user={user} setUser={setUser}/>} />
      
           
          <Route path="/">

            <Route index element={<Home user={user} setUser={setUser}/>} />

           
           

                 </Route>


                 <Route path="/admin">


                 <Route index element={<Admin user={user} setUser={setUser}/>} />
                 </Route>




        </Routes>
      </BrowserRouter>
      {/* </UserContext.provider> */}
    </div>
  );



}

export default App;
