/* eslint-disable react/prop-types */
export default function Form({ dataRef, handleForm }) {
  function handleSubmit(e) {
    e.preventDefault();
    let text = dataRef.current.textH3Form.innerText;
    if (text.toLowerCase() == "add book") {
      handleForm(false);
    } else {
      handleForm(true);
      dataRef.current.textH3Form.innerText = "Add Book";
      dataRef.current.form.classList.replace("bg-orange-400", "bg-sky-300");
    }
  }

  return (
    <section id="form" className="w-full lg:w-[40%]  bg-sky-100  pb-28 lg:rounded-tr-full rounded-b-full pt-20">
      <div ref={(el) => (dataRef.current.form = el)} className="transition bg-sky-300 p-3 sm:w-[60%]  w-[80%] mx-auto rounded-3xl shadow-lg">
        <div className="flex justify-center">
          <h3 ref={(el) => (dataRef.current.textH3Form = el)} className="font-serif px-5 text-base font-semibold text-center -translate-y-6 bg-slate-100 rounded-full">
            Add Book
          </h3>
        </div>
        <form action="" onSubmit={handleSubmit} className="-translate-y-3">
          <div className="px-4 mb-2">
            <label htmlFor="title" className=" block pb-1 text-base font-mono ">
              Title
            </label>
            <input ref={(e) => (dataRef.current.title = e)} type="text" name="" id="title" className="w-full p-1 px-2 focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md  bg-slate-100" />
          </div>
          <div className="px-4 mb-2">
            <label htmlFor="author" className="font-mono block pb-1 text-base ">
              Author
            </label>
            <input ref={(e) => (dataRef.current.author = e)} type="text" name="" id="author" className="w-full p-1 px-2 focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md  bg-slate-100" />
          </div>
          <div className="px-4 mb-2">
            <label htmlFor="publication_year" className="font-mono block pb-1 text-base ">
              Publication Year
            </label>
            <input ref={(e) => (dataRef.current.year = e)} type="text" name="" id="publication_year" className="w-full p-1 px-2 focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md  bg-slate-100" />
          </div>
          <div className="px-4 mb-2">
            <input value="1" ref={(e) => (dataRef.current.finish = e)} type="checkbox" name="" id="finish" className=" p-1 px-2 focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md  bg-slate-100" />
            <label htmlFor="" className="px-2 text-base">
              The book has been finished.
            </label>
          </div>
          <div className="px-4 sm mt-4 ">
            <button className="p-1 text-white font-semibold font-serif w-full bg-blue-400 rounded-full">Add</button>
          </div>
        </form>
      </div>
    </section>
  );
}
