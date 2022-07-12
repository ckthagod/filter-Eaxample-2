import React from 'react'
// import { Users } from './users';
import "./app.css";
import { useState } from "react";
import Table from "./Table";
import { useEffect } from 'react/cjs/react.production.min';



const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchUsers = async () => {
      try{
        const res = await fetch("https://localhost:7087/api/Users");
        console.log(res.data);
        setData(res.data);
      } catch(e){
        console.log("error: " + e);
        return null;
      }
     
    };
    FetchUsers();
  },[]);

  const keys = ["first_name", "last_name", "email"];


  const Search = (d) => {
    return d.filter(
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
      <Table data={[]} />
    </div>
  )
}

export default App