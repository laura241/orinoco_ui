export const PRODUCT_RESOURCE = 'product';
export const ORDER_RESOURCE = 'order'

export const PRODUCTS_ROUTE = '/products';
export const PRODUCT_ROUTE = `/${PRODUCT_RESOURCE}/:id`;
export const ORDER_ROUTE = `/shopping/${ORDER_RESOURCE}/:orderId`;
export const SHOPPING_CART ='/shopping/cart';


export const getProductRoute = (id) => `${PRODUCT_RESOURCE}/${id}`;
export const getOrderRoute = (id) => `${ORDER_RESOURCE}/${id}`;






