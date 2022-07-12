import React from 'react'
import { Users } from './users';
import "./app.css";
import { useState } from "react";
import Table from "./Table";



const App = () => {
  const [query, setQuery] = useState("");


  const keys = ["first_name", "last_name", "email"];
  const Search = (data) => {
    return data.filter(item =>
      item.first_name.toLowerCase().includes(query) ||
      item.last_name.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query)
    )
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