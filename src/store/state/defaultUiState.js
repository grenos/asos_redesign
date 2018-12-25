import images from '../../assets/img/index';

export const UI_STATE = {
  toggle: false,
  genders: [
    {
      id: 'woman',
      gender: 'woman',
      img: images.woman
    },
    {
      id: 'man',
      gender: 'man',
      img: images.man
    }
  ],
  womanCategories: {
    clothing: [
      { name: 'Activewear', img: images.activewear },
      { name: 'Coats', img: images.coats },
      { name: 'Jackets', img: images.jackets },
      { name: 'Hoodies and Sweatshirts', img: images.hoodies },
      { name: 'Jeans', img: images.jeans },
      { name: 'Jumpers', img: images.jumpers },
      { name: 'Cardigans', img: images.cardigans },
      { name: 'Jumpsuits', img: images.jumpsuits },
      { name: 'Lingerie', img: images.lingerie },
      { name: 'Loungewear', img: images.loungewear },
      { name: 'Shorts', img: images.shorts },
      { name: 'Skirts', img: images.skirts },
      { name: 'Socks', img: images.socks },
      { name: 'Trousers', img: images.trousers },
      { name: 'Leggings', img: images.leggings }
    ],
    shoes: [
      { name: 'Boots', img: null },
      { name: 'Chelsea boots', img: null },
      { name: 'Flat shoes', img: null },
      { name: 'Heels', img: null },
      { name: 'Loafers', img: null },
      { name: 'Sandals', img: null },
      { name: 'Slippers', img: null },
      { name: 'Trainers', img: null }
    ],
    accessories: [
      { name: 'Bags and Purses', img: null },
      { name: 'Belts', img: null },
      { name: 'Gloves', img: null },
      { name: 'Hats', img: null },
      { name: 'Scarves', img: null },
      { name: 'Sunglasses', img: null }
    ]
  }
};
