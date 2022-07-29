const SKU = [
  {
    id: 0,
    name: 'Americano',
    img_src: require('../images/americano.png'),
    price: 12,
  },
  {
    id: 1,
    name: 'Caramel Macchiato',
    img_src: require('../images/caramel_macciato.png'),
    price: 14.5,
  },
  {
    id: 2,
    name: 'Cappucino',
    img_src: require('../images/cappucino.png'),
    price: 14,
  },
  {
    id: 3,
    name: 'Caramel Cappucino',
    img_src: require('../images/caramel_cappucino.png'),
    price: 15,
  },
  {
    id: 4,
    name: 'Latte',
    img_src: require('../images/latte.png'),
    price: 13,
  },
  {
    id: 5,
    name: 'Iced Latte',
    img_src: require('../images/ice_latte.png'),
    price: 14,
  },
  {
    id: 6,
    name: 'Premium Roast Coffee',
    img_src: require('../images/premium_roast.png'),
    price: 21,
  },
  {
    id: 7,
    name: 'Hot Chocolate',
    img_src: require('../images/hot_chocolate.png'),
    price: 11,
  },
];

export function fetchDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(SKU), 250);
  });
}
