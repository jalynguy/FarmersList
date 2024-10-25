class Cart{
    products = [];
    constructor(products = [], total){
        this.products = products;
        this.total = total;
    }
    addProduct(product){
        this.products.push(product);
        this.total += 1;
    }
    removeProduct(index){
        this.products.splice(index, 1)
        this.total -= 1;
    }
}