import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function QueryKeys() {
  return (
    <>
      <ul>
        <li>Simple Params</li>
        <li>Multiple Keys</li>
        <li>Async Way</li>
        <li>Async Way - Error Server 400</li>
        <li>Async Way - Throwing Error</li>
        <li>Query function variables</li>
      </ul>

      <ReactQueryKeys />
    </>
  );
}

function ReactQueryKeys() {
  const todoId = 1111;

  // OPTION 1

  const { isLoading, error, data, isFetching } = useQuery(
    ["mytodos", todoId],
    () =>
      axios
        .get(`http://localhost:8080/mytodos/${todoId}`)
        .then((res) => res.data)
  );

  // OPTION 2 - MULTIPLE PARAMS

  //   const { isLoading, error, data, isFetching } = useQuery(
  //     ["mytodos", todoId],
  //     ({ queryKey }) =>
  //       axios
  //         .get(`http://localhost:8080/mytodos/${queryKey[1]}`)
  //         .then((res) => res.data)
  //     );

  // OPTION 3 - ASYNC way
  //   const { isLoading, error, data, isFetching } = useQuery(
  //     ["mytodos", todoId],
  //     async () => {
  //       const response = await axios.get(
  //         `http://localhost:8080/mytodos/${todoId}`
  //       );
  //       return response.data;
  //     }
  //   );

  // OPTION 4 - ASYNC way with  error - make service give 400
  //   const { isLoading, error, data, isFetching } = useQuery(
  //     ["mytodos", todoId],
  //     async () => {
  //       const response = await axios.get(
  //         `http://localhost:8080/mytodos/${todoId}`
  //       );
  //       return response.data;
  //     }
  //   );

  // OPTION 5 - ASYNC way with throwing error
  //   const { isLoading, error, data, isFetching } = useQuery(
  //     ["mytodos", todoId],
  //     async () => {
  //       const response = await axios.get(
  //         `http://localhost:8080/mytodos/${todoId}`
  //       );
  //       if (1 === 1) {
  //         throw new Error("Oh no no no, Dilwale puchde ne cha..................");
  //       }
  //       return response.data;
  //     }
  //   );

  //option 6 - object way - query function variables

  //   const { isLoading, error, data, isFetching } = useQuery(
  //     ["mytodos", { show: "all" }],
  //     async ({ queryKey }) => {
  //       const [_key, { show }] = queryKey;
  //       //console.log(_key);
  //       const response = await axios.get(
  //         `http://localhost:8080/mytodos?show=${show}`
  //       );

  //       return response.data;
  //     }
  //   );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {JSON.stringify(data)}
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}
