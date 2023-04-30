import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async()=>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // console.log(products)
    const storedCart = getShoppingCart();
    const savedCart = [];
    console.log(storedCart);


    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
    // if two things needed to return can make Array
    // return[products, savedCart]

}

export {cartProductsLoader};