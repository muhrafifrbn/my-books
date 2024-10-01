/* eslint-disable react/prop-types */
import Book from "./Book";

export default function Read({ dataBooks, handleClick, textContent, statusButtonEdit }) {
  // console.log(dataBooksFalse);
  return (
    <div id="read" className="w-full sm:w-1/2  p-2 py-4 ">
      <h3 className="font-serif px-5 text-base font-semibold">{textContent}</h3>
      <div id="list_noread" className="px-5 py-2 h-64 overflow-y-auto shadow-md">
        {dataBooks.map((book, i) => (
          <Book statusButtonEdit={statusButtonEdit} handleClick={handleClick} dataBook={book} key={i} />
        ))}
      </div>
    </div>
  );
}
