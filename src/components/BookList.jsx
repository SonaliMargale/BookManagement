
import Book from "./Book"
import "./style.css";
import { Link } from "react-router-dom";

function BookList({booksData}){

    return (
        <div className="bookList">
          { 
            booksData.map((data) => 
              <Link to={`/book/${data.id}`}>
              <Book key={data.id} bookDetails={data} />
              </Link>)
            
          }
        </div>
    )
}
export default BookList