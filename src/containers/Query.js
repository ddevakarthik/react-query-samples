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
      {data.map((todo, i) => {
        return (
          <tr key={i}>
            <td>{todo.name}</td>
          </tr>
        );
      })}
      <div>{isFetching ? "Updating..." : ""}</div>
      <div> FetchStatus : {fetchStatus}</div>
    </div>
  );
}
