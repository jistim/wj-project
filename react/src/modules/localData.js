const title = 'THE CHAMPAGNE BAR';

const categoryList = [
  //
  {
    id: '0',
    name: 'DRINKS',
    groupList: ['Champagne', 'Sparkling Wine', 'By the glass']
  },
  {
    id: '1',
    name: 'SIDE DISHES',
    groupList: [] // Not null
  },
  {
    id: '2',
    name: 'SWEETS',
    groupList: [] // Not null
  }
];

const menuList = [
  //
  {
    id: '0',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Armand de Brignac - Brut Gold',
    price: '890',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '1',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Dom Perignon-2006',
    price: '350',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '2',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Krug-Grand Cuvee',
    price: '330',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '3',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Pol Roger-Reserve Brut',
    price: '170',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '4',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Bollinger-R.D 2002',
    price: '170',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '5',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Perriet-Jouet-Grand Brut',
    price: '150',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '6',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Taittinger-Reserve Brut',
    price: '150',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '7',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Taittinger-Reserve Brut',
    price: '85',
    img: null,
    national: null,
    volume: '375ml'
  },
  {
    id: '8',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Laurent Perrier-Brut Gold',
    price: '150',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '9',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Laurent Perrier-Brut Gold',
    price: '85',
    img: null,
    national: null,
    volume: '375ml'
  },
  {
    id: '10',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Veuve Clicquot-Yellow Label',
    price: '110',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '11',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Veuve Clicquot-Yellow Label',
    price: '65',
    img: null,
    national: null,
    volume: '375ml'
  },
  {
    id: '12',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Veuve Clicquot-Rose',
    price: '130',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '13',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Moet & Chandon-Imperial',
    price: '90',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '14',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Moet & Chandon-Imperial',
    price: '55',
    img: null,
    national: null,
    volume: '375ml'
  },
  {
    id: '15',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Moet & Chandon-Imperial',
    price: '35',
    img: null,
    national: null,
    volume: '200ml'
  },
  {
    id: '16',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Moet & Chandon-Ice',
    price: '150',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '17',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Moet & Chandon-Rose',
    price: '110',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '18',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Moet & Chandon-Rose',
    price: '65',
    img: null,
    national: null,
    volume: '375ml'
  },
  {
    id: '19',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Moet & Chandon-Rose',
    price: '45',
    img: null,
    national: null,
    volume: '200ml'
  },
  {
    id: '20',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Moet & Chandon-Rose Ice',
    price: '210',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '21',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'G.H.Mumm-Cordon Rouge',
    price: '130',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '22',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'G.H.Mumm-Cordon Rouge',
    price: '75',
    img: null,
    national: null,
    volume: '375ml'
  },
  {
    id: '23',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Drappier-Carte d\'Or Brut',
    price: '130',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '24',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Drappier-Carte d\'Or Brut',
    price: '75',
    img: null,
    national: null,
    volume: '375ml'
  },
  {
    id: '25',
    category: 'DRINKS',
    group: 'Champagne',
    name: 'Piper Heidsieck-Cuvee Brut',
    price: '110',
    img: null,
    national: null,
    volume: null
  },

  {
    id: '26',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Francis Ford Coppola-Sophia',
    price: '75',
    img: null,
    national: 'US',
    volume: null
  },
  {
    id: '27',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Freixenet-Ice',
    price: '45',
    img: null,
    national: 'ES',
    volume: null
  },
  {
    id: '28',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Freixenet-Carta Nevada',
    price: '20',
    img: null,
    national: 'ES',
    volume: '200ml'
  },
  {
    id: '29',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Freixenet-Semi Seco',
    price: '20',
    img: null,
    national: 'ES',
    volume: '200ml'
  },
  {
    id: '30',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Miguel Torres-Estelado',
    price: '45',
    img: null,
    national: 'CL',
    volume: null
  },
  {
    id: '31',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Simonnet-Febvre Crémant',
    price: '45',
    img: null,
    national: 'FR',
    volume: null
  },
  {
    id: '32',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Robert Mondavi-Woodbridge Brut',
    price: '35',
    img: null,
    national: 'US',
    volume: null
  },
  {
    id: '33',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Santero-Pinot Chardonnay',
    price: '35',
    img: null,
    national: 'IT',
    volume: null
  },
  {
    id: '34',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Zardetto-Private Cuvee Brut',
    price: '35',
    img: null,
    national: 'IT',
    volume: null
  },
  {
    id: '35',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Zardetto-Extra Dry',
    price: '35',
    img: null,
    national: 'IT',
    volume: null
  },
  {
    id: '36',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Zardetto-Extra Dry',
    price: '20',
    img: null,
    national: 'IT',
    volume: '200ml'
  },
  {
    id: '37',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Beso-Reserva',
    price: '35',
    img: null,
    national: 'ES',
    volume: null
  },
  {
    id: '38',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Blue Nun-Gold Edition',
    price: '35',
    img: null,
    national: 'DE',
    volume: null
  },
  {
    id: '39',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Trapiche-Extravaganza',
    price: '35',
    img: null,
    national: 'AR',
    volume: null
  },
  {
    id: '40',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Penesca',
    price: '25',
    img: null,
    national: 'ES',
    volume: null
  },
  {
    id: '41',
    category: 'DRINKS',
    group: 'Sparkling Wine',
    name: 'Jacob\'s Creek-Chardonnay Pinot Noir',
    price: '20',
    img: null,
    national: 'AU',
    volume: '200ml'
  },

  {
    id: '42',
    category: 'DRINKS',
    group: 'By the glass',
    name: 'Veuve Clicquot-Yellow Label',
    price: '25',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '43',
    category: 'DRINKS',
    group: 'By the glass',
    name: 'Moet & Chandon-Imperial',
    price: '23',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '44',
    category: 'DRINKS',
    group: 'By the glass',
    name: 'Freixenet-Ice',
    price: '15',
    img: null,
    national: 'ES',
    volume: null
  },
  {
    id: '45',
    category: 'DRINKS',
    group: 'By the glass',
    name: 'Zardetto-Private Cuvee Brut',
    price: '9',
    img: null,
    national: 'IT',
    volume: null
  },

  {
    id: '46',
    category: 'SIDE DISHES',
    group: null,
    name: 'TCB Plate',
    price: '50',
    img: null,
    national: null,
    volume: null
  },
  {
    id: '47',
    category: 'SIDE DISHES',
    group: null,
    name: 'Salmon Tartare',
    price: '25',
    img: '/assets/img/47.jpg',
    national: null,
    volume: null
  },
  {
    id: '48',
    category: 'SIDE DISHES',
    group: null,
    name: 'Baked Brie',
    price: '20',
    img: '/assets/img/48.jpg',
    national: null,
    volume: null
  },
  {
    id: '49',
    category: 'SIDE DISHES',
    group: null,
    name: 'Seasonal Fruits',
    price: '10',
    img: '/assets/img/49.jpg',
    national: null,
    volume: null
  },


  {
    id: '50',
    category: 'SWEETS',
    group: null,
    name: 'Gateau d\'Ange by Park, Joon-Woo',
    price: '8.5',
    img: '/assets/img/50.jpg',
    national: null,
    volume: null
  },
  {
    id: '51',
    category: 'SWEETS',
    group: null,
    name: 'Champagne Sorbet',
    price: '7.0',
    img: '/assets/img/51.jpg',
    national: null,
    volume: null
  },
  {
    id: '52',
    category: 'SWEETS',
    group: null,
    name: 'Champagne Jelly',
    price: '7.0',
    img: '/assets/img/52.jpg',
    national: null,
    volume: null
  },

];


export default {
  title: title,
  categoryList: categoryList,
  menuList: menuList
}
