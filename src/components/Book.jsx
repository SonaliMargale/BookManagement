import "./style.css";


function Book({bookDetails}) {
    return (
        <div className="book-card">
        <img src={bookDetails.cover_image}
         alt="alt"  
         width="200px" 
         height="200px"
         className="book-cover"
         />
         <div className="book-details">
            <h2 className="book-title">{bookDetails.title}</h2>
            <p className="book-author">{bookDetails.author}</p>
            <p className="book-description">{bookDetails.description}</p>
         </div>
        </div>
    )
}
export default Book;
