const SECRET_KEY = "malzahar knows the truth";

const jwt = require('jsonwebtoken');

class AuthService {
    static isAuth()
    {
        const key = localStorage.getItem('auth_key');

        if(key){
            try{
                let decoded = jwt.verify(key, SECRET_KEY);
                console.log(decoded);
                return true;
            }
            catch {
                return false;
            }


        }
        else{
            return false;
        }
    }

    static getUsername()
    {
        const key = localStorage.getItem('auth_key');

        if(key){
            try{
                let decoded = jwt.verify(key, SECRET_KEY);

                console.log(decoded);

                return decoded.username;
            }
            catch {
                return "";
            }


        }
        else{
            return false;
        }
    }
}

export default AuthService;