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
      { name: 'Hoodies', img: images.hoodies },
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
      { name: 'Boots', img: images.boots },
      { name: 'Chelsea boots', img: images.chelsea },
      { name: 'Flat shoes', img: images.flat },
      { name: 'Heels', img: images.heels },
      { name: 'Loafers', img: images.loafers },
      { name: 'Sandals', img: images.sandals },
      { name: 'Slippers', img: images.slippers },
      { name: 'Trainers', img: images.trainers }
    ],
    accessories: [
      { name: 'Bags and Purses', img: images.purse },
      { name: 'Gloves', img: images.glove },
      { name: 'Hats', img: images.hat },
      { name: 'Scarves', img: images.scarve },
      { name: 'Sunglasses', img: images.sunglasses }
    ]
  }
};
