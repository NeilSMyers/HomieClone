class House {
  constructor(id, underContract, favorite, price, beds, baths, sqft, address) {
    this.id = id
    this.image = "https://source.unsplash.com/featured/?house"
    this.underContract = underContract
    this.favorite = favorite
    this.price = price
    this.beds = beds
    this.baths = baths
    this.sqft = sqft
    this.address = address
  }
}

export default [
  new House(4, true, true, 25750, 3, 1, 250, "400 East 700 North, Provo, UT"),
  new House(1, false, false, 3453534, 5, 3, 2345, "2545 N 70 E, Provo, UT"),
  new House(3, true, false, 300000, 4, 2, 575, "69 Duck Rd, Orem, UT"),
  new House(2, false, true, 150000, 3, 2, 1200, "530 E Center St, Provo, UT"),
]
