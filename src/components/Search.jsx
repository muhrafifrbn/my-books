/* eslint-disable react/prop-types */
export default function Search({ handleSearch, dataRef, statusButtonEdit }) {
  let newButton = "";
  if (!statusButtonEdit) {
    newButton = (
      <button onClick={() => handleSearch(false)} className="w-1/4 px-3 sm:py-1 sm:px-1 text-white bg-blue-500 rounded-full">
        Search
      </button>
    );
  } else {
    newButton = <button className="w-1/4 px-3 sm:py-1 sm:px-1 text-white bg-red-500 rounded-full">No Search!</button>;
  }

  return (
    <div id="search" className="w-[80%] mx-auto   p-2 py-4">
      <h3 className="font-serif px-5 text-base font-semibold text-center">Search Book</h3>
      <div className="py-4 mb-2 flex items-center gap-1">
        <label htmlFor="title" className="text-center w-1/6 p-1 text-base font-semibold">
          Title
        </label>
        <input ref={dataRef} type="text" name="" id="title" className="p-1 w-full focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md  bg-slate-100" />
        {newButton}
      </div>
    </div>
  );
}
