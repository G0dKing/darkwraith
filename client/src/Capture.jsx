import { useState, useEffect } from 'react';

const Capture = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/capture')
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Data Loaded</h1>
          {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Capture;
