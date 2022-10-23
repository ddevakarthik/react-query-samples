import React from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export default function QueryBasic() {
  return <BasicReactQuery />;
}

function BasicReactQuery() {
  const { isLoading, error, data, isFetching } = useQuery(
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
    </div>
  );
}
