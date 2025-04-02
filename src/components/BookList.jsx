
import Book from "./Book"
import "./style.css";

function BookList({booksData}){

    return (
        <div className="bookList">
          { 
            booksData.map((data) => <Book key={data.id} bookDetails={data} />)
          }
        </div>
    )
}
export default BookList