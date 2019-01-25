import images from '../../assets/img/index';

export const UI_STATE = {
  isVideo: true,
  isShoe: null,
  isSize: ['s', 'm', 'l', 'xl'],
  isShoeSize: ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],

  sizeChosen: null,
  genders: [
    {
      id: 'women',
      gender: 'woman',
      img: images.woman
    },
    {
      id: 'men',
      gender: 'man',
      img: images.man
    }
  ],
  brand: images.brand,
  womanCategories: {
    clothing: [
      { description: 'Activewear', img: images.activewear },
      { description: 'Coats', img: images.coats },
      { description: 'Jackets', img: images.jackets },
      { description: 'Hoodies', img: images.hoodies },
      { description: 'Jeans', img: images.jeans },
      { description: 'Jumpers', img: images.jumpers },
      { description: 'Cardigans', img: images.cardigans },
      { description: 'Jumpsuits', img: images.jumpsuits },
      { description: 'Lingerie', img: images.lingerie },
      { description: 'Loungewear', img: images.loungewear },
      { description: 'Shorts', img: images.shorts },
      { description: 'Skirts', img: images.skirts },
      { description: 'Socks', img: images.socks },
      { description: 'Trousers', img: images.trousers },
      { description: 'Leggings', img: images.leggings }
    ],
    shoes: [
      { description: 'Boots', img: images.boots },
      { description: 'Chelsea boots', img: images.chelsea },
      { description: 'Flat shoes', img: images.flat },
      { description: 'Heels', img: images.heels },
      { description: 'Loafers', img: images.loafers },
      { description: 'Sandals', img: images.sandals },
      { description: 'Slippers', img: images.slippers },
      { description: 'Trainers', img: images.trainers }
    ],
    accessories: [
      { description: 'Purses', img: images.purse },
      { description: 'Gloves', img: images.glove },
      { description: 'Hats', img: images.hat },
      { description: 'Scarves', img: images.scarve },
      { description: 'Sunglasses', img: images.sunglasses }
    ]
  },
  manCategories: {
    clothing: [
      { description: 'Coats', img: images.coatsM },
      { description: 'Jackets', img: images.jacketsM },
      { description: 'Hoodies', img: images.hoodiesM },
      { description: 'Jeans', img: images.jeansM },
      { description: 'Jumpers', img: images.jumpersM },
      { description: 'Cardigans', img: images.cardigansM },
      { description: 'Polos', img: images.polosM },
      { description: 'Suits', img: images.suitsM },
      { description: 'T-shirts', img: images.teesM },
      { description: 'Tracksuits', img: images.tracksuitsM },
      { description: 'Trousers', img: images.trousersM },
      { description: 'Underwear', img: images.underwearM }
    ],
    shoes: [
      { description: 'Boots', img: images.bootsM },
      { description: 'Chelsea boots', img: images.chelseaM },
      { description: 'Loafers', img: images.loafersM },
      { description: 'Slippers', img: images.slippersM },
      { description: 'Trainers', img: images.trainersM }
    ],
    accessories: [
      { description: 'Bags', img: images.bagsM },
      { description: 'Belts', img: images.beltsM },
      { description: 'Hats', img: images.hatsM },
      { description: 'Watches', img: images.watchesM },
      { description: 'Scarves', img: images.scarvesM },
      { description: 'Socks', img: images.socksM },
      { description: 'Sunglasses', img: images.sunglassesM },
      { description: 'Ties', img: images.tiesM },
      { description: 'Wallets', img: images.walletsM }
    ]
  },
  topBrands: [
    'ASOS',
    'ASOS Design',
    'ASOS EDITION',
    'ASOS WHITE',
    'ASOS 4505',
    'COLLUSION',
    'Jack & Jones',
    'Reclaimed Vintage',
    'Selected Homme',
    'Nike',
    'Adidas',
    'Reebok',
    'Under Armour',
    'Puma',
    'ASICS',
    'Vans',
    'Fila',
    'New Balance',
    'Berska',
    'Dr Martens',
    'Ellesse',
    'Fred Perry',
    'Religion',
    'Tommy Hilfiger'
  ],
  totalPrice: null
};
