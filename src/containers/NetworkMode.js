import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function NetworkMode() {
  return (
    <>
      <ul>
        <li>Network Mode : online Default</li>
        <li>Network Mode : always </li>
      </ul>

      <ReactNetworkMode />
    </>
  );
}

function ReactNetworkMode() {
  const todoId = 1111;

  // OPTION 1 - Network Mode : online Default
  const { isLoading, error, data, isFetching, fetchStatus } = useQuery(
    ["mytodos", todoId],
    () =>
      axios
        .get(`http://localhost:8080/mytodos/${todoId}`)
        .then((res) => res.data)
  );

  // OPTION 2 - Network Mode : always
  //   const { isLoading, error, data, isFetching, fetchStatus } = useQuery(
  //     ["mytodos", todoId],
  //     () =>
  //       axios
  //         .get(`http://localhost:8080/mytodos/${todoId}`)
  //         .then((res) => res.data),
  //     { networkMode: "always" }
  //   );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {JSON.stringify(data)}
      <div>{isFetching ? "Updating..." : ""}</div>
      <p>Fetch Status : {fetchStatus}</p>
    </div>
  );
}
