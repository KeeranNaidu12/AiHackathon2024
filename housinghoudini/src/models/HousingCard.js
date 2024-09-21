//This is an Object class for our Housingcard Object
class HousingCard {
    constructor(title, price, location, bedrooms, bathrooms, pets, descriptions, furnished) {
        //These are variable that will help the user determine which rental they want
        this.title = title;
        this.price = price;
        this.location = location;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.pets = pets;
        this.laundry = laundry;
        this.descriptions = descriptions;
        this.furnished = furnished;
        this.img = new Image();
        this.match = 0.0;
    }
//With the help of Copilot, I implemneted setters and getters for each attribute
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

    setImage(src) {
        this.img.src = src;
    }

    getImage() {
        return this.img.src;
    }

    setLaundry(laundry){
        this.laundry = laundry;
    }

    getLaundry(){
        return this.laundry;
    }
}
