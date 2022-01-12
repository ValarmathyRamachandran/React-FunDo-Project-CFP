import axios from 'axios';

export class AxiosSercice extends Component
axios.post('/http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp?access_token=signup', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


  
};

