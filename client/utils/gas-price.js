import axios from 'axios'
import configObj from '../config.js'
export default function getGasPrice(state) {
    var config = {
      method: 'get',
      url: `http://api.collectapi.com/gasPrice/stateUsaPrice?state=${state}`,
      headers: { 
        'Content-Type': 'application/json', 
        'authorization': configObj.GAS_API_KEY
      }
    };
    let data = axios(config)
    .then(function (response) {
      return response.data.result.state.gasoline;
    })
    .catch(function (error) {
      console.log(error);
    });
    return data
}