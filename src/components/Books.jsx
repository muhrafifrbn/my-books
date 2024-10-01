/* eslint-disable react/prop-types */
import Search from "./Search";
import Read from "./Read";
import { useRef, useState, useEffect } from "react";

export default function Books({ dataBooks, handleChange, dataRef }) {
  const dataSearch = useRef(null);
  const [filterBooks, setFilterBooks] = useState([]);
  const [statusButtonEdit, setStatusButtonEdit] = useState(false);

  useEffect(() => {
    setFilterBooks([...dataBooks]);
    setStatusButtonEdit(false);
  }, [dataBooks]);

  let booksTrue = filterBooks.filter((e) => e.status == true);
  let booksFalse = filterBooks.filter((e) => e.status == false);

  function changeFinishBook(i) {
    i.status = i.status ? false : true;
    handleChange(i, "done");
  }

  function deleteBook(i) {
    handleChange(i, "delete");
  }

  function handleFilter(modeEdit) {
    let resultSearch = [];
    if (modeEdit) {
      resultSearch = dataBooks.filter((e) => e.id != modeEdit); // Untuk menampilkan data buku yang tidak diedit
      setFilterBooks([...resultSearch]);
    } else {
      let title = dataSearch.current.value;
      // Menampilkan Data Buku berdasarkan pencarian
      resultSearch = dataBooks.filter((e) => e.title.toLowerCase().includes(title.toLowerCase()));
      setFilterBooks([...resultSearch]);
    }
  }

  function ModeEdit(book) {
    console.log("test");
    handleFilter(book.id);
    dataRef.current.title.value = book.title;
    dataRef.current.author.value = book.author;
    dataRef.current.year.value = book.year;
    dataRef.current.finish.checked = book.status;
    dataRef.current.textH3Form.innerText = "Update Book";
    dataRef.current.form.classList.replace("bg-sky-300", "bg-orange-400");
    handleChange(book);
    console.log(dataRef);
    setStatusButtonEdit(true);
    scrollGoToForm(dataRef.current.form);
    // console.log(dataRef.current.form.offsetTop + 50);
  }

  return (
    <section id="books" className="py-11 w-full lg:w-[60%]">
      <Search statusButtonEdit={statusButtonEdit} dataRef={dataSearch} handleSearch={handleFilter} />
      <div className="flex justify-center flex-wrap" ref={(el) => (dataRef.current.books = el)}>
        <Read statusButtonEdit={statusButtonEdit} dataBooks={booksFalse} handleClick={{ changeStatus: changeFinishBook, delete: deleteBook, edit: ModeEdit }} textContent="Not Finished Reading" />
        <Read statusButtonEdit={statusButtonEdit} dataBooks={booksTrue} handleClick={{ changeStatus: changeFinishBook, delete: deleteBook, edit: ModeEdit }} textContent="Completed Reading" />
      </div>
    </section>
  );
}

function scrollGoToForm(ref) {
  window.scrollTo({
    top: ref.offsetTop - 50,
    left: 0,
    behavior: "smooth",
  });
}
