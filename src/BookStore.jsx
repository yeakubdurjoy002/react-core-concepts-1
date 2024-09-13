import "./Book.css";
export default function BookStore({ books }) {
  return (
    <div className="book">
      <h3>Books :{books.name}</h3>
      <h3>Books Price :{books.price}</h3>
    </div>
  );
}
