export const PRODUCT_RESOURCE = 'product';
export const ORDER_RESOURCE = 'order'

export const PRODUCTS_ROUTE = '/products';
<<<<<<< HEAD
export const PRODUCT_ROUTE = '/product/:id';
<<<<<<< HEAD
export const ORDER_ROUTE = '/order/:id';
=======
export const PRODUCT_ROUTE = `/${PRODUCT_RESOURCE}/:id`;
export const ORDER_ROUTE = `/shopping/${ORDER_RESOURCE}/:orderId`;
>>>>>>> feature/orderId
export const SHOPPING_CART ='/shopping/cart';
=======
export const SHOPPING_BASKET_ROUTE = '/basket/order';
>>>>>>> feature/productList


export const getProductRoute = (id) => `${PRODUCT_RESOURCE}/${id}`;
export const getOrderRoute = (id) => `${ORDER_RESOURCE}/${id}`;






