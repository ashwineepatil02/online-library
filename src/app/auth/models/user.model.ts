export class UserModel{

    constructor( _fname: string,_lname: string, _email: string, _password: string, _isadmin: boolean){
        this.FName = _fname;
        this.LName = _lname;
        this.email = _email;
        this.password= _password;
        this.IsAdmin = _isadmin;
    }

    FName: string;
    LName: string;
    email: string;
    password: string;
    IsAdmin: boolean;
}