export const PRODUCT_RESOURCE = 'product';
export const ORDER_RESOURCE = 'order';

export const PRODUCTS_ROUTE = '/products';
export const PRODUCT_ROUTE = '/product/:id';
export const ORDER_ROUTE = '/shopping/order/:id';
export const SHOPPING_CART = '/shopping/cart';
export const SHOPPING_BASKET_ROUTE = '/basket/order';

export const getProductRoute = (id) => `${PRODUCT_RESOURCE}/${id}`;
export const getOrderRoute = (id) => `${ORDER_RESOURCE}/${id}`;
