import "./App.css";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";
import Book from "./Book";
function App() {
  const actors = [
    "Shakib Khan",
    "Shoriful Razer",
    "Salman Shah",
    "Rubel",
    "Jasim",
    "jayed khan",
  ];
  const singers = [
    { Id: 1, name: "Pritom", age: 35 },
    { Id: 2, name: "Arijit", age: 40 },
    { Id: 3, name: "Shan", age: 43 },
    { Id: 4, name: "Khan", age: 29 },
    { Id: 5, name: "Shreya", age: 36 },
    { Id: 6, name: "Jonita", age: 30 },
  ];
  const books = [
    { Id: 1, name: "Physics", price: 100 },
    { Id: 1, name: "Chemistry", price: 110 },
    { Id: 1, name: "Social Science", price: 130 },
    { Id: 1, name: "Political Science", price: 90 },
    { Id: 1, name: "Accounting", price: 180 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {books.map((books) => (
        <BookStore books={books}></BookStore>
      ))}
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      <Actor name={" Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
    </>
  );
}

export default App; // Single default export for App
