import React from 'react'
import { Users } from './users';
import "./app.css";
import { useState } from "react";
import Table from "./Table";
import axios from "axios";



const App = () => {
  const [query, setQuery] = useState("");
  const [data,setData] = useState([]);


  const keys = ["first_name", "last_name", "email"];
  console.log(Users[0]["email"]);

  const Search = (data) => {
    return data.filter(
      (item) => (keys.some((key) => item[key].toLowerCase().includes(query)))
    );
  }
  return (
    <div className='app'>
      <input
        type="text"
        placeholder='Search'
        className='search'
        onChange={(e) => setQuery(e.target.value)} />
      <Table data={Search(Users)} />
    </div>
  )
}

export default App