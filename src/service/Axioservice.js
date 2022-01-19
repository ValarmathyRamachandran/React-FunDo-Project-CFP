import axios from 'axios';

export class AxiosSercice {

postMethod(url,data,header=false){
  return axios.post(url,data, header)
}

  
}

export default AxiosSercice;

