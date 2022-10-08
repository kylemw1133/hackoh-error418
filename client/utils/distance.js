import axios from 'axios'
import configObj from '../config.js'
export default function calculateDistance(wp1, wp2) {
    var config = {
      method: 'get',
      url: `http://dev.virtualearth.net/REST/v1/Routes?key=${configObj.MAP_KEY} &wp.1=${wp1}&wp.2=${wp2}`,
      headers: { }
    };
    
    let data = axios(config)
    .then(function (response) {
      return response.data.resourceSets[0].resources[0].travelDistance;
    })
    .catch(function (error) {
      console.log(error);
    });
    return data
}