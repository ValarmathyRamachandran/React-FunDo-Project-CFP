import axios from 'axios';

export class AxiosSercice {

postMethod(url,data,header="default"){
  return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data)
}

  
}

export default AxiosSercice;

