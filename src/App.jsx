import { useState } from 'react'
import './App.css'
import BookList from './components/BookList'
import { books } from './utils/mockData';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const [searchText, SetsearchText]  = useState("")
  const [filteredBooks, setfilteredBooks] = useState(books)

  function handlSearch(){
    console.log(searchText, "searchText");

    const filterBooks = books.filter((book) => book.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    console.log(filterBooks, "filterBooks")
 
    setfilteredBooks(filterBooks)
  }
 
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
