import Form from "./Form";
import Books from "./Books";
import { useState, useRef, useEffect } from "react";

export default function Main() {
  const [books, setBooks] = useState(() => loadLocalStorage());
  const dataInput = useRef({});

  function handleForm(addOrUpdate) {
    // false = add book
    // true = update book
    if (!addOrUpdate) {
      addMyBook();
    } else {
      changeBook(getData(dataInput), "edit");
    }
    scrollGoToBooks(dataInput.current.books);
  }

  useEffect(() => {
    saveLocalStorage(books);
  }, [books]);

  function addMyBook() {
    setBooks([...books, getData(dataInput)]);
  }

  function scrollGoToBooks(ref) {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  let newBook;
  function changeBook(i, statusButton) {
    switch (statusButton) {
      case "done":
        newBook = [...books.filter((book) => book.id != i.id), i];
        setBooks(newBook);
        break;
      case "edit":
        newBook = [...newBook, i];
        setBooks(newBook);
        break;
      case "delete":
        newBook = [...books.filter((book) => book.id != i.id)];
        setBooks(newBook);
        break;
      default:
        newBook = [...books.filter((book) => book.id != i.id)];
    }
  }

  function loadLocalStorage() {
    if (localStorage.getItem("myBooks")) {
      let data = localStorage.getItem("myBooks");
      return [...JSON.parse(data)];
    }
    return [];
  }

  return (
    <main className="flex flex-wrap items-start ">
      <Form dataRef={dataInput} handleForm={handleForm} />
      <Books dataBooks={books} handleChange={changeBook} dataRef={dataInput} />
    </main>
  );
}

function getData(e) {
  let title = e.current.title.value;
  let author = e.current.author.value;
  let year = e.current.year.value;
  let status = e.current.finish.checked;
  let id = +new Date();

  resetForm(e);

  return {
    id,
    title,
    author,
    year,
    status,
  };
}

function resetForm(e) {
  e.current.title.value = "";
  e.current.author.value = "";
  e.current.year.value = "";
  e.current.finish.checked = "";
}

function saveLocalStorage(books) {
  let storage = typeof Storage;
  if (storage != undefined) {
    localStorage.setItem("myBooks", JSON.stringify(books));
  }
}
