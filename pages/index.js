
import useSWR, { mutate } from "swr";
import { useState, useEffect } from "react";
import Todos from "../components/Todos";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Home() {
  const { data, error } = useSWR("/api/todos", fetcher);
  const [todoItem, setTodoItem] = useState("");
 

  const handleSubmit = (e) =>{
    e.preventDefault();
    addTodo(todoItem);
    setTodoItem("");
}

  const addTodo = async (title ) => {
    await fetcher("/api/todos", {
      method: "POST",
      body: JSON.stringify({title: title}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    mutate("/api/todos");
  };

  

  
  return (
    
    <div>
      <h1 className="text-center font-sans text-[#FFFFFF] text-lg"><strong><span className="text-[#21A7F9]">/</span><span className="text-[#FF7964]">/</span><span className="text-[#00CCDB]">O</span> WesterOps</strong></h1>
  
    <div
      className=" flex w-[718px] h-[800px] 
      bg-white mt-5 mb-5  flex-col text-gray-200 rounded
      
      
      "
      id="todoitem"
    >
    
      
      <h1 className="w-36 font-['Inter'] border-b-4 border-[#FF7964] text-center mx-auto text-[#194591] font-semibold text-[20px]">
        ToDo List
      </h1>
      <hr />
      <div className="flex flex-col mt-8 w-3/4 mx-auto">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center">
          <div className="w-full flex h-10 items-center pl-2 pr-2 mb-2 rounded border-2 border-[#999C9F]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#21A7F9"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="15" y1="10" x2="3" y2="10"></line>
              <line x1="21" y1="6" x2="3" y2="6"></line>
              <line x1="21" y1="14" x2="3" y2="14"></line>
              <line x1="14" y1="18" x2="3" y2="18"></line>
            </svg>
            <input
              className="flex w-full h-full p-0 items-center text-sm ml-2 outline-none placeholder:text-[#010A1B] text-[#010A1B]"
              type="text"
              value={todoItem}
              placeholder="Add a task..."
              onChange={(e) => setTodoItem(e.target.value)}
            
            />
          </div>
          <button
            className="w-10 h-10 bg-[#21A7F9] px-2 ml-2 rounded"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        </form>

        <ul>
        {data?.filter((item) => item.pinned)
            .map(({ id, title , checked, pinned }) => (
              <Todos
              id={id}
              title={title}
              isChecked = {checked}
              isPinned = {pinned}
              />
            ))},
          <hr className="border-solid border-sm my-5"></hr>
          {data?.filter((item) => !item.pinned)
            .map(({ id, title , checked , pinned}) => (
              <Todos
              id={id}
              title={title}
              isChecked = {checked}
              isPinned = {pinned}
              />
            ))}
        </ul>
      </div>
    </div>
    </div>
  );
}
