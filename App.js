import React from "react"
import './App.css';

import {ToastContainer} from "react-toastify"
import Navbar from "./components/Navbar";

import {Route,Routes,Switch} from "react-router-dom"
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
const  App=()=> {
  return (
    <div className="App">
      <ToastContainer/>
      {/* <h1>Hey buddy</h1> */}
      <Navbar/>

      <Routes>
      <Route path="/" element={ <Home/>}></Route>
      {/* <Route exact path="/" component={()=><Home/>}>
      
      </Route>
      <Route exact path="/add">
        <h1>Welcome to add</h1>
      </Route>
      
      <Route exact path="/edit/:id">
        <h1>Welcome to edit</h1>
      </Route> */}
    <Route path="/add" element={ <AddContact/>}></Route>
    <Route path="/edit/:id" element={<EditContact/>}></Route>


    </Routes>

    </div>
  );
}

export default App;
