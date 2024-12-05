import React from "react";
import { useState, useEffect } from "react";

const Todos = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(false);
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await fetch(url);
        const response = await res.json();
        console.log(response);
        if (res.ok) {
          setData(response);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error feching data", error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div>
      {loading ? <h1 style={{ color: "blue" }}>Loading....</h1> : null}

      <ol style={{ color: "crimson", fontSize: "20px" }}>
        {data.map((unq) => (
          <li key={unq.id}>{unq.title}</li>
        ))}
      </ol>
      {error ? <h1 style={{ color: "red" }}>Error</h1> : null}
    </div>
  );
};

export default Todos;
