import React, { useState, useEffect } from 'react';

function FetchExample() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error ? <p>Error: {error}</p> : data.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}

export default FetchExample;
