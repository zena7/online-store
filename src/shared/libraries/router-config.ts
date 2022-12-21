const BASKET = 'basket';
const PRODUCT = 'product:id';

export const CONFIG = {
  HOME: {
    PATH: '/',
    LINK: '/',
  },
  BASKET: {
    PATH: BASKET,
    LINK: createLink(BASKET),
  },
  PRODUCT: {
    PATH: PRODUCT,
    LINK: createLink(PRODUCT),
  },
} as const;

function createLink<T extends string>(path: T): `/${T}` {
  return `/${path}`;
}
