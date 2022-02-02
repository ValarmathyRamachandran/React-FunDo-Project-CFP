import Axiossercice from "./Axioservice";

const service = new Axiossercice();

let baseurl='http://fundoonotes.incubation.bridgelabz.com/api/';

var currenturl=window.location.href.toString().split('/resetpassword/');
// console.log(currenturl[1]);

let header={
    headers:{
        Authorization:currenturl[1]
    }
}


class UserService{

    SignUp(data){
       return service.postMethod(`${baseurl}user/userSignUp`,data)
    }

    SignIn(data){
        return service.postMethod(`${baseurl}user/login`,data)
    }

    ForgotPassword(data){
        return service.postMethod(`${baseurl}user/reset`,data)    
    }

    Reset(data){
        return service.postMethod(`${baseurl}user/reset-password`,data,header)
    }
}

export default UserService;