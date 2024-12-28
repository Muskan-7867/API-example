import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from an API using Axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error ? <p>Error: {error}</p> : data.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}

export default AxiosExample;
