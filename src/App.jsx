import './App.css'
import BookList from './components/BookList'
import { books } from './utils/mockData'

function App() {
 
  return (
    <>
      <h1>BOOK MANAGEMENT APP</h1>
      <BookList booksData = {books}/>
    </>
  )
}

export default App
