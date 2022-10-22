import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

const queryClient = new QueryClient();

export default function QueryBasic() {
  return (
    <QueryClientProvider client={queryClient}>
      <BasicReactQuery />
    </QueryClientProvider>
  );
}

function BasicReactQuery() {
  const { isLoading, error, data, isFetching } = useQuery(["todoData"], () =>
    axios.get("http://localhost:8080/todos").then((res) => res.data)
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
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
