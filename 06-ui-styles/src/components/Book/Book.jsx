import './Book.css'; // importing the CSS file for styling the Book component


const Book = ({ book }) => {
    return (
        <div className="item"> {/* applying the 'item' class from Book.css to style this div */}
            <h2>{book.title}</h2>
            <p>Publication Year: {book.publication}</p>
        </div>
    );
}   

export default Book