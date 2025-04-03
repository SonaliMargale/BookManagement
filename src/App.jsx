import { useState, useEffect } from 'react'
import './App.css'
import BookList from './components/BookList'
// import { books } from './utils/mockData';
import Header from './components/Header';
import useFetch from "./utils/useFetch";
import { Outlet } from 'react-router-dom';

function App() {
  const [searchText, SetsearchText]  = useState("")
  const [filteredBooks, setfilteredBooks] = useState([])

  const {data, error, loading} = useFetch("https://www.freetestapi.com/api/v1/books")

  useEffect(() => {
      if(data) {
        setfilteredBooks(data)
      }
  },[data])

  if(error) {
    return <p>Error in loading Data: {error}</p>
  }

  if(loading) {
    return <p>Loading....</p>
  }

  function handlSearch(){
    console.log(searchText, "searchText");

    const filterBooks = books.filter((book) => book.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    console.log(filterBooks, "filterBooks")
 
    setfilteredBooks(filterBooks)
  }

  
  // async function fetchData(){
  //      const response = await fetch("https://www.freetestapi.com/api/v1/books");
  //      const data = await response.json()
  //      setfilteredBooks(data);
  //      console.log("data",data)
  // }
 
  return (
    <>
      <h1>BOOK MANAGEMENT APP</h1>
      <div className='search'>
        <p>search book</p>
        <div>
        <input type="text" 
         onChange={(e) => SetsearchText(e.target.value) }
         className='search-input'
         />
        <button onClick={handlSearch}>search</button>
        </div>
      </div>
      <Header />
      <BookList booksData = {filteredBooks}/>
      <Outlet />
    </>
  )
}

export default App
