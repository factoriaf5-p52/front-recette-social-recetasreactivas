import { Axios } from "axios"
import React, { useState, useEffect } from 'react';
import recipeServices from "../../services/services"

interface IData {
  _id: string;
  title: string;
}

const AxiosTest = () =>  {


    const [data, setData] = useState([]);

    useEffect(() => {
       recipeServices.getAll()
      .then(response=>setData(response.data));
   
    }, []);

    return (
      <div>
      <h1>Lista de datos</h1>
      <ul>
        {/* {data.map(item => (
          <li key={item._id}>{item.title}</li>
        ))} */}{data}
      </ul>
    </div>
  );
} 

export default AxiosTest
