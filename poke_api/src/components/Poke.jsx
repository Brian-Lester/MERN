import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Poke = () => {
        const [responseData, setResponseData] = useState(null);
        useEffect(()=>{
            axios.get('https://pokeapi.co/api/v2/pokemon')
                .then(response=>{setResponseData(response.data)})
        }, []);  

    return (
        <div>
            <ul>
            {
                responseData.map((item,idx) =>(
                    <div key = {idx}>
                        <li>
                            {item.name}
                        </li>
                    </div>
                ))
            }
            </ul>
        </div>
    );
}

export default Poke;