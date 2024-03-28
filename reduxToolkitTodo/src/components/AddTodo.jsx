import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);

  useEffect(() => {
    if (isUpdateMode && todoToUpdate) {
      setInput(todoToUpdate.text);
    } else {
      setInput("");
    }
  }, [isUpdateMode, todoToUpdate]);

  const addOrUpdateTodo = (e) => {
    e.preventDefault();
    if (isUpdateMode && todoToUpdate) {
      dispatch(updateTodo({ id: todoToUpdate.id, text: input }));
      setIsUpdateMode(!isUpdateMode); //
    } else {
      dispatch(addTodo(input));
    }
    // how does dispatcher works
    // it works by using a reducer to add/change the value in to the store
    setInput("");
  };

  return (
    <form onSubmit={addOrUpdateTodo} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {isUpdateMode ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
