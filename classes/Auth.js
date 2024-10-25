const Customer = require('./classes/Customer')
class Auth{
    customers = []
    constructor(customers = []){
        this.customers = customers;
    }
    register(name, email, shippingAddress){
        let newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
    }
    login(email){
        for(let i = 0; i<this.customers.length; i++){
            if(this.customers[i].email == email){
                return this.customers[i];
            }
        }
    }
}