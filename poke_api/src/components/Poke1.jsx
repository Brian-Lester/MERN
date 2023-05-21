import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Poke1 = () => {
        const [responseData, setResponseData] = useState(null);
        useEffect(()=>{
            axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
                .then(response=>{setResponseData(response.data)})
        }, []);  

    return (
        <div>
            <ul>
            {responseData && responseData.results.map((item, idx) => (
          <div key={idx}>
            <li>
              {item.name}
            </li>
          </div>
        ))}
            </ul>
        </div>
    );
}

export default Poke1;