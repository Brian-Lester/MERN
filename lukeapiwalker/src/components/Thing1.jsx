import React, { useState } from 'react';
import {useEffect } from 'react';
import axios from 'axios';

const Thing1 = (props) => {
    const { responseData, searchItem, setResponseData } = props
    const {homeWorld, setHomeWorld} = useState('')

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${searchItem.Obj}/${searchItem.id}`)
            .then(response=>{setResponseData(response.data)})
}, [searchItem]);  
if(searchItem.Obj === 'people'){
fetch(`${responseData.homeWorld}`)
.then(response => {
  // not the actual JSON response body but the entire HTTP response
    return response.json();
}).then(response => {
  // we now run another promise to parse the HTTP response into usable JSON
    setHomeWorld(response)
}).catch(err=>{
    console.log(err);
});}
    if (searchItem.Obj === 'people'){
        return (
            <div>
                <h1>Name: {responseData.name}</h1>
                <h1>Height: {responseData.height}</h1>
                <h1>Mass: {responseData.mass}</h1>
                {/* <h1>HomeWorld: {homeWorld.name}</h1> */}
            </div>
        );
    }
    else if (searchItem.Obj === "planets"){
        return (
            <div>
                <h1>Name: {responseData.name}</h1>
                <h1>Population: {responseData.population}</h1>
                <h1>Climate: {responseData.climate}</h1>
                <h1>Terrain: {responseData.terrain}</h1>
                {/* <h1>HomeWorld: {homeWorld.name}</h1> */}
            </div>
        );
    }
    else{
        return (
        <div>
            <h1>Name: {responseData.name}</h1>
            <h1>Model: {responseData.model}</h1>
            <h1>Cargo Capacity: {responseData.cargo_capacity}</h1>
            <h1>Vehicle Class: {responseData.vehicle_class}</h1>
        </div>
        )
    }
}

export default Thing1;
