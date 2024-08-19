class Storegiohang {
    
    name
    listProductgiohang

    constructor(nameInput) {
        this.name = nameInput;
        this.getStorage();
    }


    add(newProduct) {
        this.listProduct.push(newProduct);
        this.saveStorage();
    }

    getList() {
        return this.listProduct;
    }


    getProductByIndex(index) {
        let product = this.listProduct[index];
        return product;
    }


    saveStorage() {
        localStorage.setItem("listProductgiohang", JSON.stringify(this.listProduct));
    }

    getStorage() {
        let list = JSON.parse(localStorage.getItem("listProductgiohang"));
        if (list == null) {
            this.listProduct = [];
        } else {
            this.listProduct = list;
        }
    }

}
