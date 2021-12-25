import React from 'react';
import axios from 'axios';


export class dataApi {
    static dataApi = async () => {
      const data = await axios.get("https://dog.ceo/api/breeds/image/random");
      return data.data.message;
    };
    
  }