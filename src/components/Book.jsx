/* eslint-disable react/prop-types */
export default function Book({ dataBook, handleClick, statusButtonEdit }) {
  let newButton = "";
  if (!statusButtonEdit) {
    newButton = (
      <li key={1} className="flex justify-end gap-2 mt-3 *:text-black">
        <button onClick={() => handleClick.changeStatus(dataBook)} className="px-5 lg:px-3 rounded-md bg-green-400">
          Done
        </button>
        <button onClick={() => handleClick.edit(dataBook)} className="px-5 lg:px-3 rounded-md bg-yellow-400">
          Edit
        </button>
        <button onClick={() => handleClick.delete(dataBook)} className="px-5 lg:px-3 rounded-md bg-red-400">
          Delete
        </button>
      </li>
    );
  } else {
    newButton = <li className="flex justify-end gap-2 mt-3 *:text-black"></li>;
  }

  return (
    <div className="bg-gray-100 shadow-lg mb-5 rounded-2xl p-3">
      <ul>
        <li>
          <label htmlFor="title" className="text-base font-semibold p-1">
            Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </label>
          <span className="text-base  font-serif p-1 w-full">{dataBook.title}</span>
        </li>
        <li>
          <label htmlFor="title" className="text-base font-semibold p-1">
            Author &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </label>
          <span className="text-base font-serif p-1">{dataBook.author}</span>
        </li>
        <li>
          <label htmlFor="title" className="text-base font-semibold p-1">
            Publication Year :
          </label>
          <span className="text-base font-serif p-1">{dataBook.year}</span>
        </li>
        {newButton}
      </ul>
    </div>
  );
}
