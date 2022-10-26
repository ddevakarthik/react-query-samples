import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function QueryRetries() {
  return (
    <>
      <ul>
        <li>Query Retries (Alltodos gives 400) - Default retries 3 times</li>
        <li>Retries Delay</li>
      </ul>

      <ReactQueryRetries />
    </>
  );
}

function ReactQueryRetries() {
  const { isLoading, error, data, isFetching } = useQuery(
    ["alltodos"],
    () => axios.get("http://localhost:8080/alltodos").then((res) => res.data)
    // { retry: false }
    // { retry: 5}
    // {retry: true}
    // Always waits for 3000 ms
    // { retryDelay: 3000 }
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
