class HousingCard {
    constructor(title, price, location, bedrooms, bathrooms, pets, descriptions, furnished, imgUrl) {
      this.title = title;
      this.price = price;
      this.location = location;
      this.bedrooms = bedrooms;
      this.bathrooms = bathrooms;
      this.pets = pets;
      this.descriptions = descriptions;
      this.furnished = furnished;
      this.imgUrl = imgUrl; 
      this.match = 0.0;
    }
  
    setTitle(newTitle) {
      this.title = newTitle;
    }
  
    getTitle() {
      return this.title;
    }
  
    setPrice(newPrice) {
      this.price = newPrice;
    }
  
    getPrice() {
      return this.price;
    }
  
    setLocation(newLocation) {
      this.location = newLocation;
    }
  
    getLocation() {
      return this.location;
    }
  
    setBedrooms(newBedrooms) {
      this.bedrooms = newBedrooms;
    }
  
    getBedrooms() {
      return this.bedrooms;
    }
  
    setBathrooms(newBathrooms) {
      this.bathrooms = newBathrooms;
    }
  
    getBathrooms() {
      return this.bathrooms;
    }
  
    setPets(newPets) {
      this.pets = newPets;
    }
  
    getPets() {
      return this.pets;
    }
  
    setDescriptions(newDescriptions) {
      this.descriptions = newDescriptions;
    }
  
    getDescriptions() {
      return this.descriptions;
    }
  
    setFurnished(newFurnished) {
      this.furnished = newFurnished;
    }
  
    getFurnished() {
      return this.furnished;
    }
  
    setMatch(newMatch) {
      this.match = newMatch;
    }
  
    getMatch() {
      return this.match;
    }
  
    setImageUrl(newImgUrl) {
      this.imgUrl = newImgUrl;
    }
  
    getImageUrl() {
      return this.imgUrl;
    }

    setLaundry(laundry){
        this.laundry = laundry;
    }

    getLaundry(){
        return this.laundry;
    }
}

export default HousingCard;