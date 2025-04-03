import { useParams } from "react-router-dom"
import { books } from "../utils/mockData"

const BookDetails = () => {

    const params = useParams()
    const book = books.filter((book) => book.id == params.id)
    console.log(book)
    return(
        <>
        <h1>{`Book Details for Book with id ${params.id}`}</h1>
        {book.map((book) => {
            return (
                <>
                <h2>{book.title}</h2>
                <h3>{book.description}</h3>
                <img src={book.coverImage} alt="" />
                <h3>{book.price}</h3>
               </>
            )
        })}
        </>
    )
}
export default BookDetails