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
  brand: images.brand,
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
  },
  manCategories: {
    clothing: [
      { name: 'Coats', img: images.coatsM },
      { name: 'Jackets', img: images.jacketsM },
      { name: 'Hoodies', img: images.hoodiesM },
      { name: 'Jeans', img: images.jeansM },
      { name: 'Jumpers', img: images.jumpersM },
      { name: 'Cardigans', img: images.cardigansM },
      { name: 'Polos', img: images.polosM },
      { name: 'Suits', img: images.suitsM },
      { name: 'T-shirts', img: images.teesM },
      { name: 'Tracksuits', img: images.tracksuitsM },
      { name: 'Trousers', img: images.trousersM },
      { name: 'Underwear', img: images.underwearM }
    ],
    shoes: [
      { name: 'Boots', img: images.bootsM },
      { name: 'Chelsea boots', img: images.chelseaM },
      { name: 'Loafers', img: images.loafersM },
      { name: 'Slippers', img: images.slippersM },
      { name: 'Trainers', img: images.trainersM }
    ],
    accessories: [
      { name: 'Bags', img: images.bagsM },
      { name: 'Belts', img: images.beltsM },
      { name: 'Hats', img: images.hatsM },
      { name: 'Watches', img: images.watchesM },
      { name: 'Scarves', img: images.scarvesM },
      { name: 'Socks', img: images.socksM },
      { name: 'Sunglasses', img: images.sunglassesM },
      { name: 'Ties', img: images.tiesM },
      { name: 'Wallets', img: images.walletsM }
    ]
  }
};
