import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

export default function Query() {
  return <ReactQuery />;
}

function ReactQuery() {
  const { isLoading, error, data, isFetching, fetchStatus } = useQuery(
    ["todoData"],
    () => axios.get("http://localhost:8080/todos").then((res) => res.data),
    { staleTime: 12000 }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ul>
        {data.map((todo, i) => {
          return <li key={i}>{todo.name}</li>;
        })}
      </ul>
      <div>{isFetching ? "Updating..." : ""}</div>
      <div> FetchStatus : {fetchStatus}</div>
    </div>
  );
}
