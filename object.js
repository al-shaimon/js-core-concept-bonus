const nayok = {
  name: 'Sakib Khan',
  id: 121,
  address: 'movie cinema',
  isSingle: true,
  friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
  movies: [{name: 'no 1', year: 2015}, {name: 'king khan', year: 2018}],
  act: function(){
    console.log('acting like Sakib Khan');
  },
  car: {
    brand: 'tesla',
    price: 50000000,
    made: 2025,
    manufacturer: {
      name: 'tesla',
      ceo: 'Elon Musk',
      country: 'USA'
    }
  }
}

// console.log(nayok.car);
// console.log(nayok.act);
// nayok.act()