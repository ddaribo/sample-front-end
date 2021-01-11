export class User{
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    city: string;
    receive_notifications: boolean;

    constructor(first_name: string){
        this.first_name = first_name;
        this.email = "";
        this.password ="";
        this.last_name="";
        this.city = "";
        this.receive_notifications = true;
    }
}