import React from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";

export default function DependentQueries() {
  return (
    <>
      <ul>
        <li>Dependent Queries (To watch fetchStatus)</li>
      </ul>

      <ReactDependentQueries />
    </>
  );
}

function ReactDependentQueries() {
  const { data: todoList = [] } = useQuery(["alltodos"], () =>
    axios.get("http://localhost:8080/alltodos").then((res) => res.data)
  );

  async function fetchTodoById(todoid) {
    const response = await axios.get(`http://localhost:8080/mytodos/${todoid}`);
    return response.data;
  }

  const todoQueries = useQueries({
    queries: todoList?.map((todo) => {
      return {
        queryKey: ["mytodos", todo.id],
        queryFn: () => fetchTodoById(todo.id),
        enabled: !!todoList,
      };
    }),
  });

  return (
    <div>
      <p> {JSON.stringify(todoQueries)}</p>
    </div>
  );
}
