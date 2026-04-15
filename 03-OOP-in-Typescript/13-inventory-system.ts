class Product {
    private static _productCount: number = 0;
    readonly id: number;
    private _name: string = '';
    private _price: number = 0;

    constructor(name: string, price: number) {
        this.id = ++Product._productCount;
        this.name = name;
        this.price = price;
    }

    static get productCount(): number {
        return Product._productCount;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName.length < 1) {
            throw new Error('Name must contain at least 1 character');
        }

        this._name = newName;
    }

    get price(): number {
        return this._price;
    }

    set price(newPrice: number) {
        if (newPrice <= 0) {
            throw new Error('Price must be a positive');
        }

        this._price = newPrice;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }

}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
        let allProducts: string[] = [];

        for (const product of this.products) {
            allProducts.push(product.getDetails());
        }

        const productList = allProducts.join('\n');

        return `${productList}\nTotal products created: ${Product.productCount}`;
    }
}

const inventory = new Inventory();
const product1 = new Product('Laptop', 1200);
const product2 = new Product('Phone', 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());

// ID: 1, Name: Laptop, Price: $1200
// ID: 2, Name: Phone, Price: $800
// Total products created: 2

// Product.productCount = 10; // TS Error: cannot assign to 'productCount'
// const product = new Product("", 800); // Runtime Error: Name must contain at least 1 character
// const product3 = new Product("Phone", 0); // Runtime Error: Price must be positive
// product.id = 5; // TS Error: cannot assign to 'id'
