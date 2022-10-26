import React from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function QueryCancellation() {
  return (
    <>
      <ul>
        <li>Query Cancellation - Manual</li>
      </ul>

      <ReactQueryCancellation />
    </>
  );
}

function ReactQueryCancellation() {
  const queryClient = useQueryClient();
  const { isLoading, error, data, isFetching } = useQuery(
    ["alltodos"],
    async ({ signal }) =>
      axios
        .get("http://localhost:8080/alltodos", { signal })
        .then((res) => res.data)
  );

  if (isLoading)
    return (
      <>
        <p>Loading</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            queryClient.cancelQueries(["alltodos"]);
          }}
        >
          Cancel
        </button>
      </>
    );

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
