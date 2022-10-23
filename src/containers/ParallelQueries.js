import React from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

export default function ParallelQueries() {
  return (
    <>
      <ul>
        <li>useQueries</li>
      </ul>

      <ReactParallelQueries />
    </>
  );
}

function ReactParallelQueries() {
  const todoList = [
    {
      id: 1111,
      name: "Read Sprint",
    },
    {
      id: 2222,
      name: "Read Make Time",
    },
  ];

  async function fetchTodoById(todoid) {
    const response = await axios.get(`http://localhost:8080/mytodos/${todoid}`);
    return response.data;
  }

  const todoQueries = useQueries({
    queries: todoList.map((todo) => {
      return {
        queryKey: ["mytodos", todo.id],
        queryFn: () => fetchTodoById(todo.id),
      };
    }),
  });

  return (
    <div>
      <p> {JSON.stringify(todoQueries)}</p>
    </div>
  );
}
