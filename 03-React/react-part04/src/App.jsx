import { useState, useEffect } from 'react';
import axios  from 'axios';

function App() {

  const [count, setCount] = useState(0);
  const [digimons, setDigimons] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    console.log('mounting');
    // send a request to 3rd party api
    // request to DB

    // fetch("https://digimon-api.vercel.app/api/digimon")
     axios.get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setDigimons(response.data.slice(0, 10)); // get just the first 10 for display
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

  }, []);

  useEffect(() => {
    console.log('updating');
    console.log('you just updated the count');
    // when count > 5 then send request to DB
  }, [count]);


  const handleCount = () => {
    setCount(count + 1);
  }


  return (
    <>
      <button type="button" onClick={handleCount}>Increment</button>
      {count}

        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h1>🐉 Digimon Characters</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {digimons.map((digimon, index) => (
                        <li key={index}>
                            <strong>{digimon.name}</strong> — {digimon.level}
                            <br />
                            <img src={digimon.img} alt={digimon.name} width="100" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </>
  )
}

export default App
