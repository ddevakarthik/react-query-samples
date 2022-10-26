import React from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";

export default function RefetchQueries() {
  return (
    <>
      <ul>
        <li>Refetch Queries</li>
      </ul>

      <ReactRefetchQueries />
    </>
  );
}

function ReactRefetchQueries() {
  const { isLoading, error, data, isFetching } = useQuery(
    ["alltodos"],
    () => axios.get("http://localhost:8080/alltodos").then((res) => res.data),
    { refetchInterval: 5000 }
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
    </div>
  );
}
