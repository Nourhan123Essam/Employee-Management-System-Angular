export class Client{
    clientId: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    createdAt: Date;
  

    constructor(){
        this.clientId = 0;
        this.name = '';
        this.email = '';
        this.address = '';
        this.phone = '';
        this.createdAt = new Date;  
    }
}