// app/api/replicate/route.js
'use server';
import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const listingData = [{
  listingDesc: `Explore VEDA, an exclusive student housing community featuring single-occupancy, furnished studio suites just a 10-minute walk from UBCO. Our all-inclusive pricing covers utilities, internet, and the furniture.

Enjoy a range of amenities including:
-Fitness centers
-Laundry facilities
-Game rooms with pool tables
-Private study rooms
-Movie room
-Rooftop patio
-And more!

Our dedicated team of ambassadors also organizes monthly events to build a vibrant community.

*Limited Time Offer: Special promotions are available for new leases on select units. Depending on the unit you may receive: 1 free month of rent, $200 off your monthly rent, free parking for a year, or free laundry for a year. Inquire for details.

For more information and to apply, please visit our website vedaliving.ca
For more information:
http://vedaliving.ca/

Included Utilities`,
  link: "https://www.places4students.com/Places/Details?HousingID=NxON3ykQy70%3d&SchoolID=ifygGfamMY8%3d",
  image: "https://vedapg.ca/wp-content/uploads/sites/2/2022/01/Veda_II-163LapTop_Art.jpg"
},
{
  listingDesc: `
Furnished Room for Rent in 2Bedroom-1Bath Suite Within Walking Distance to UBCO.

    Bedroom 2 Closet with dresser
    Suite Living Room with sofa love seat side tables and coffee table
    Full Kitchen with fridge stove OTR hood fan microwave and dishwasher
    Bathroom with tile shower toilet vanity with drawers and storage shelves
    Bedroom 2 queensized bed desk and chair
    Bedroom 2 queensized bed desk chair and window
    Bedroom 2 desk chair window
    Bedroom 2 Closet with dresser

Listing Description:
Furnished room for rent in bright, 2-bedroom, 1 bathroom, basement suite with separate entrance in quiet community of University Heights. Shared living room, bathroom, full kitchen with eating bar and in-suite laundry. Outdoor patio space for quiet relaxation. 5 minute walk to public transit. 15 minute walk to commercial centre, 20 minute walk to UBCO campus. Looking for clean, quiet students to rent suite in our family home. Rent includes cleaning of shared common areas. No pets. No smoking. No parking on property. Please note, Bedroom 1 has been rented to a female student. She has requested that her roommate be female as well (preferred due to shared common areas).
Included Utilities

    	 Gas
    	 Free Air Conditioning
    	 Garbage Pickup

    	 Water
    	 Heat

Amenities

    	 Washing Machine in Unit
    	 Furnished
    	 Stove
    	 Air Conditioning
    	 Microwave

    	 Dryer in Unit
    	 Refrigerator
    	 Bus Route
    	 Dishwasher
    	 Outdoor Area

Address: Acadia Street
City: Kelowna
State/Province: British Columbia
Country: Canada
Zip/Postal Code: V1V 0A8
Property Location:
View Google Map
Type of Accommodation: 2 Bedrooms (Bedroom(s) in a House / Townhouse / Duplex)
Rental Rate: From: $1,200.00 to: $1,200.00 (CDN$) per room / month
Occupancy Date: Immediately
Lease Type(s) Offered: 9 months
Lease Condition(s): Maintain exterior walkway and stairs to basement suite.
Tenant Information Required:
Reference
Guarantor(s)
# of Washrooms 1`,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0ghpPq53goQzM7wJ0gMOu2Tq6RVgadLHPA&s",
  link: "https://www.places4students.com/Places/Details?HousingID=zBzkxs42IOA%3d&SchoolID=ifygGfamMY8%3d"
},
{
listingDesc: `
Stunning lake view king bed walkout suite in Lake Country, close to UBCO
Main Property Photo
Previous
Next

    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo

Listing Description:
Furnished walkout suite with incredible lake views!

Available Aug 15/negotiable move in date; lease until Apr/May/Jun (8-10 month lease)
$1,700.00 per month; utilities included; wifi extra.

~ 800 sq ft spacious king bed suite with full bathroom, washer & dryer, and large patio.

Furniture is being replaced with all new pieces, so will be slightly different than the pictures. Well stocked kitchen with new dishes. Suite includes dishwasher, stove, oven, TV, washer, dryer.

Separate private entrance with large patio space to take in the stunning views of Okanagan Lake. Watch the sunset from the comfort of your own home.

Location! Location! Location! This home is located:
- in the quiet neighborhood of Carrs Landing
- 4 min to Peak Cellars winery, 7 min to Gray Monk winery
- 4 min to Pixton beach, 5 min to Pixie beach, 6 min to Pebble beach, 6 min to Spion Kop hiking trails
- 16 min to UBCO
- 15 min to YLW

No smoking. Small dog negotiable.

This is the lifestyle you want to enjoy!

Don't miss the chance to live in this remarkable suite with unparalleled lake views. Contact Jackie by text or email today at jackiechang1000@gmail.com.
Included Utilities

    	 Electricity
    	 Water
    	 Garbage Pickup

    	 Gas
    	 Heat
    	 Includes Parking

Amenities

    	 Washing Machine in Unit
    	 Furnished
    	 Stove
    	 Dogs Allowed
    	 Hardwood Floors
    	 Outdoor Area

    	 Dryer in Unit
    	 Refrigerator
    	 Carpeted Floors
    	 Dishwasher
    	 High Speed Internet Included

Address: Carrs Landing Road
City: Winfield
State/Province: British Columbia
Country: Canada
Zip/Postal Code: V4V 1A2
Property Location:
View Google Map
Type of Accommodation: One-room Apartment
Rental Rate: $1,700.00 (CDN$) per month
Occupancy Date: Immediately
Lease Type(s) Offered: 8 months
Lease Condition(s): Quiet tenant, no smoking, small dog negotiable. 8-10 month lease.
Tenant Information Required:
Reference
Credit Check
Guarantor(s)
# of Washrooms 1
Landlord Occupied: No
Landlord Name: Jackie Chang
Landlord Telephone: (403)478-4035
Landlord E-mail:
Email This Landlord
Distance to Campus
				
University of British Columbia Okanagan - Kelowna, BC 	18.6 km 	4 hours
11 mins 	1 hour
13 mins 	19 mins
Static map view, please press enter to view dynamic map
Click To View Dynamic Map`,
image: "https://www.places4students.com/p4sfiles/landlord/0000/161/029/273693_5202_l1.png",
link: "https://www.places4students.com/Places/Details?HousingID=HAXvtYEMu14%3d&SchoolID=ifygGfamMY8%3d"
},
{
  listingDesc: `
Brand New Student Apartments - Experience the Ideal UBC Okanagan Living!
Main Property Photo
Previous
Next

    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo

Listing Description:
Looking for the perfect student apartment? Look no further! Our brand-new building, located in close proximity to UBC Okanagan, offers an outstanding living experience for students. Equipped with all the amenities you need, it’s designed to make your academic and personal life comfortable and convenient.

- Modern Living Spaces: The apartment boasts a contemporary interior with a spacious kitchen and living area. It’s fitted with efficient appliances, including a refrigerator, microwave, and stove, elevating your cooking experience.

- Convenient Laundry Facilities: Forget the laundry woes! Our apartment is equipped with advanced washing machines and dryers, ready to meet your laundry needs anytime.

- Secure Garage Parking: No worries if you have a car. We provide secure garage parking to keep your vehicle safe and sound.

- Restaurants Right Downstairs: With several eateries located just below the apartments, whether it's a quick bite or a gourmet meal, there’s something to satisfy your appetite.

- Extremely Convenient Transportation: Just a 20-minute bus ride to the UBC Okanagan campus, with direct bus services, making your commute to campus easy and hassle-free.

This is more than just an apartment; it's your starting point for life at UBC Okanagan. Whether for studying or living, you’ll find comfort and convenience here. For more information or to schedule a viewing, please contact us!
Included Utilities

    	 Electricity
    	 Free Air Conditioning
    	 Garbage Pickup

    	 Water
    	 Heat

Amenities

    	 Furnished
    	 Stove
    	 Air Conditioning
    	 Common Laundry
    	 Hardwood Floors
    	 Microwave

    	 Refrigerator
    	 Bus Route
    	 Bike Storage in Unit
    	 Dishwasher
    	 High Speed Internet Included

Address: 225 Rutland Rd S,
City: Kelowna
State/Province: British Columbia
Country: Canada
Zip/Postal Code: V1X 2Z3
Property Location:
View Google Map
Lease Type(s) Offered: Any
Tenant Information Required:
Reference
Credit Check
Guarantor(s)
Landlord Name: Peng Jin
Landlord Telephone: Contact this landlord by e-mail.
Landlord E-mail:
Email This Landlord
Rental Information:
4 or more Bedrooms Bedroom(s) in an Apartment / Condo
Min Rent $900.00
Max Rent $900.00
Bath 2
Occupancy Date Contact for more details
Distance to Campus
				
University of British Columbia Okanagan - Kelowna, BC 	6.5 km 	1 hour
28 mins 	21 mins 	10 mins
Static map view, please press enter to view dynamic map
Click To View Dynamic Map
`,
  link: "https://www.places4students.com/Places/Details?HousingID=a9P1D7RpUjc%3d&SchoolID=ifygGfamMY8%3d",
  image: "https://www.places4students.com/p4sfiles/landlord/0000/155/371/262359_9218_l1.jpg"
},
{
  listingDesc: `
Artium Student Residence - Kelowna's Premier Off Campus Student Housing
Main Property Photo
Previous
Next

    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo

Listing Description:
Love where you Live!

The Artium is a fully furnished, all inclusive residence designed exclusively for students. Located directly in front of BC Transit Bus stops that go directly to UBCO and Okanagan College, and one block from shopping, restaurants, and recreation facilities.

Modern Living Spaces - The apartments have spacious kitchens, living rooms, Flat Screen TV's, Telus Optik TV channels, and Killer WiFi that works throughout the Artium..

Kitchens - Are fully commissioned with stainless steel appliances, dishwashers, microwave, pots, pans, dishes, cutlery and all other cooking utensils you would need, as well as toasters, coffee makers and kettles.

Amenity Spaces - The Artium has the largest off campus study hall in Kelowna, plus a fitness room, yoga studio, social lounge with pool table and foosball table, and a roof top patio.

HouseKeeping Services - We provide in-suite cleaning services of your kitchen, living spaces, and bathrooms twice a month....all included in your rent.

Residence Advisors - Our Residence Advisors are trained in emergency response, first aid, conflict resolution, and are on duty 7/365, to ensure a safe, comfortable and enjoyable living environment.

Community Events - Our Residence Advisors host social events every month, that are free for residents to attend. From cooking classes, craft nights, movie and gaming competitions, to hikes, skating, and other outdoor activities, you'll meet new friends and enjoy the community aspect of residence living at the Artium!

Modo Car Share On Site - No Car? No problem! Sign up for a Modo CarShare account, and get a free driving credit for being an Artium Resident.

For more information and availability, or to schedule a viewing, please contact us.

For more information:
http://artium.ca
Included Utilities

    	 Electricity
    	 Water
    	 Heat

    	 Gas
    	 Free Air Conditioning
    	 Garbage Pickup

Amenities

    	 Parking - Garage
    	 Refrigerator
    	 Bus Route
    	 Bike Storage in Unit
    	 Common Laundry
    	 Hardwood Floors
    	 Microwave
    	 TV Cable Included

    	 Furnished
    	 Stove
    	 Air Conditioning
    	 All Inclusive
    	 Dishwasher
    	 High Speed Internet Included
    	 Storage Space(s)
    	 Outdoor Area`,
  link: "https://www.places4students.com/Places/Details?HousingID=oFgKKW9dyXA%3d&SchoolID=ifygGfamMY8%3d",
  image: "https://www.places4students.com/p4sfiles/landlord/0000/161/432/274365_9219_l1.jpeg"
},
{
  listingDesc: `
Furnished 2 bedroom 2 bathroom with parking / Downtown Kelowna
Main Property Photo
Previous
Next

    Open concept living room with kitchen island for four and 85 TV
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo

Listing Description:
Renting out my two bedroom two bathroom apartment with large private patio located at Cawston and Richter street downtown Kelowna. In-house laundry and two desks for working from home, a large storage locker, and parking for one vehicle.

Comes with one parking spot and all linens, towels, and modern conveniences in this one-year old condo. I had to relocate for work to Vancouver so am renting out my personal condo. Looking for respectful tenants and one pet is allowed. Located right on the bike path so easy to get around Kelowna. Private secured bike parking is available in the building as well as amenity rooms for rent!

No smoking and no parties.
Included Utilities

    	 Electricity
    	 Water
    	 Heat
    	 Includes Parking

    	 Gas
    	 Free Air Conditioning
    	 Garbage Pickup

Amenities

    	 Parking - Garage
    	 Dryer in Unit
    	 Wheel Chair Accessible
    	 Stove
    	 Air Conditioning
    	 Bike Storage in Unit
    	 Carpeted Floors
    	 Dishwasher
    	 High Speed Internet Included
    	 Storage Space(s)

    	 Washing Machine in Unit
    	 Furnished
    	 Refrigerator
    	 Bus Route
    	 Cats Allowed
    	 All Inclusive
    	 Dogs Allowed
    	 Hardwood Floors
    	 Microwave
    	 Outdoor Area

Address: 660 Cawston Avenue
City: Kelowna
State/Province: British Columbia
Country: Canada
Zip/Postal Code: V1Y 6Z4
Property Location:
View Google Map
Type of Accommodation: 2 Bedrooms (Apartment / Condo)
Rental Rate: From: $2,900.00 to: $3,200.00 (CDN$) per month
Occupancy Date: Immediately
Lease Type(s) Offered: Any
Lease Condition(s): Take care of apartment like it was your own
Tenant Information Required:
Reference
Credit Check
# of Washrooms 2
Landlord Occupied: No
Landlord Name: Michelle Bajurny
Landlord Telephone: Contact this landlord by e-mail.
Landlord E-mail:
Email This Landlord
Distance to Campus
				
University of British Columbia Okanagan - Kelowna, BC 	12.3 km 	2 hours
43 mins 	43 mins 	17 mins
Static map view, please press enter to view dynamic map
Click To View Dynamic Map
Unit Floor Plan
660 Cawston Floorplan
`,
  link: "https://www.places4students.com/Places/Details?HousingID=r%2bNodg9l90A%3d&SchoolID=ifygGfamMY8%3d",
  image: "https://www.places4students.com/p4sfiles/landlord/0000/154/199/277834_9061_l1.jpg"
},
{
  listingDesc: `
Sept 2024 - 1 Bedroom in 2 bedroom suite For Rent
Main Property Photo
Previous
Next

    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo
    Property Listing Photo

Listing Description:
2 Bedrooms for rent in Large entire Lower level of home in PREMIUM neighborhood close to UBCO and Okanagan College.
Available now or 10/1
1 roommate in UBCO Engineering. 2nd room is vacant.
Rent is per single bedroom.
In addition to rent, a $100 / per room / per month fee will be charged for utilities and housekeeping
Private entrance with with own kitchen, laundry, bathroom.
BRIGHT and spacious!!
CLOSE to EVERYTHING!
Street parking available and bus nearby.
Tenant supplies their own linen.
Tenants to vacate at end of school year - May 31 latest.
Landlord lives upstairs - quiet professional couple.
This is not a party house.
Background check/references required
NO Pets of any kind.
NO SMOKING of any kind in/on the property.
NO illegal drugs
Included Utilities

    	 Electricity
    	 Water
    	 Heat

    	 Gas
    	 Free Air Conditioning
    	 Garbage Pickup

Amenities

    	 Washing Machine in Unit
    	 Furnished
    	 Stove
    	 Air Conditioning
    	 Carpeted Floors
    	 High Speed Internet Included
    	 Storage Space(s)

    	 Dryer in Unit
    	 Refrigerator
    	 Bus Route
    	 Bike Storage in Unit
    	 Dishwasher
    	 Microwave
    	 Outdoor Area

Address: 1033 Skeena Drive
City: Kelowna
State/Province: British Columbia
Country: Canada
Zip/Postal Code: V1V 2K7
Property Location:
View Google Map
Type of Accommodation: 2 Bedrooms (Basement Apartment)
Rental Rate: $1,000.00 (CDN$) per room / month
Occupancy Date: Immediately
Lease Type(s) Offered: 9 months
Lease Condition(s): Prefer full school year occupants September - Spring - flexible.
Tenant Information Required:
Reference
Credit Check
Guarantor(s)
# of Washrooms 1
Landlord Occupied: Yes
Landlord Name: Carrie Stacey
Landlord Telephone: (778)214-9988
Secondary Landlord Telephone:
2502123995
Landlord E-mail:
Email This Landlord
Distance to Campus
				
University of British Columbia Okanagan - Kelowna, BC 	8.4 km 	1 hour
46 mins 	26 mins 	12 mins
Static map view, please press enter to view dynamic map
Click To View Dynamic Map
`,
  link: "https://www.places4students.com/Places/Details?HousingID=WKs%2bgzKD0V0%3d&SchoolID=ifygGfamMY8%3d",
  image: "https://www.places4students.com/p4sfiles/landlord/0000/156/401/271250_9473_l1.jpg"
}
];

export async function POST(request) {

  const { studentPreferences } = await request.json();

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN // Ensure you have your API token set in environment variables
  });

  const results = [];

  for (const row of listingData) {
    const listingDesc = row.listingDesc;

    const input = {
      top_p: 1,
      prompt: `I will provide you with a student's demographic profile and preferences along with a student housing listing. Your purpose is to provide a compatibility rating for matching the student with the housing. 

Your response should be formatted as follows:

"""
# Compatibility Rating: x/10

## Pros: 1-5 sentences reflecting compatibility rating
## Cons: 1-5 sentences reflecting compatibility rating

## Title: Title of the listing
## Price: Price of the listing
## Location: Location of the listing
## Bedrooms: Number of bedrooms
## Bathrooms: Number of bathrooms
## Pets: Whether pets are allowed
## Descriptions: Description of the listing
"""



Student:
${studentPreferences}

Listing:
${listingDesc}`,
      temperature: 0.5,
      max_new_tokens: 500,
      min_new_tokens: -1
    };
    try {
      const events = [];
      for await (const event of replicate.stream("meta/meta-llama-3-70b-instruct", { input })) {
        events.push(event);
      }
      const resultText = events.join('');
      const ratingMatch = resultText.match(/# Compatibility Rating: (\d+\/10)/);
      const prosMatch = resultText.match(/## Pros:(.*?)(?=## Cons:|$)/s); // Non-greedy match
      const consMatch = resultText.match(/## Cons:(.*?)(?=## Title:|$)/s); // Stop matching at Title
      const titleMatch = resultText.match(/## Title:(.*?)(?=## Price:|$)/s);


      const priceMatch = resultText.match(/## Price:(.*?)(?=## Location:|$)/s);
      const locationMatch = resultText.match(/## Location:(.*?)(?=## Bedrooms:|$)/s);
      const bedroomsMatch = resultText.match(/## Bedrooms:(.*?)(?=## Bathrooms:|$)/s);
      const bathroomsMatch = resultText.match(/## Bathrooms:(.*?)(?=## Pets:|$)/s);
      const petsMatch = resultText.match(/## Pets:(.*?)(?=## Descriptions:|$)/s);
      const descriptionsMatch = resultText.match(/## Descriptions:(.*?)(?=$)/s);
      const imageUrlMatch = resultText.match(/image: (.*?)(?=$)/s);


      const rating = ratingMatch ? ratingMatch[1] : 'N/A';
      const pros = prosMatch ? prosMatch[1].trim() : 'N/A';
      const cons = consMatch ? consMatch[1].trim() : 'N/A';
      results.push({
        rating: rating,
        pros: pros,
        cons: cons,
        title: titleMatch ? titleMatch[1].trim() : 'N/A',
        price: priceMatch ? priceMatch[1].trim() : 'N/A',
        location: locationMatch ? locationMatch[1].trim() : 'N/A',
        bedrooms: bedroomsMatch ? bedroomsMatch[1].trim() : 'N/A',
        bathrooms: bathroomsMatch ? bathroomsMatch[1].trim() : 'N/A',
        pets: petsMatch ? petsMatch[1].trim() : 'N/A',
        descriptions: descriptionsMatch ? descriptionsMatch[1].trim() : 'N/A',
        listing: row,
        imageUrl: row.image
      });
    } catch (error) {
      return NextResponse.json({ error: 'Error fetching data from Replicate' }, { status: 500 });
    }
  }

  results.sort((a, b) => {
    const ratingA = parseFloat(a.rating.split('/')[0]);
    const ratingB = parseFloat(b.rating.split('/')[0]);
    return ratingB - ratingA; // Sort in descending order
  });
  
  console.log(results)
  return NextResponse.json({ result: results });
}