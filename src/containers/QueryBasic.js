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
      {data.map((todo, i) => {
        return (
          <tr key={i}>
            <td>{todo.name}</td>
          </tr>
        );
      })}
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}
