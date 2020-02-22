export const PRODUCTS_ROUTE = '/products';
export const PRODUCT_ROUTE = '/product/:id';

export const PRODUCT_RESOURCE = 'product';

export const getProductRoute = (id) => `${PRODUCT_RESOURCE}/${id}`;