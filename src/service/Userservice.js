import AxiosSercice from "./Axioservice";

const service = new AxiosSercice();

let baseurl='http://fundoonotes.incubation.bridgelabz.com/api/';

service.postMethod();

class UserService{

    SignUp(data){
        service.postMethod(`${baseurl}user/userSignUp`,data)
    }

    SignIn(data){
        service.postMethod(`${baseurl}user/login`,data)
    }

    ForgotPassword(data){
        service.postMethod(`${baseurl}user/reset`,data)    
    }

    Reset(data){
        service.postMethod(`${baseurl}user/reset-password`,data)
    }
}