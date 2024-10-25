
class Customer{
    orderHistory = []
    constructor(name, email, shippingAddress, orderHistory = []){
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = orderHistory;
    }
    addToOrderHistory(Cart){
        this.orderHistory.push(Cart);
    }
}