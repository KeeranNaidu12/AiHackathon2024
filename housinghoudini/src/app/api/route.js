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
link: "https://www.places4students.com/Places/Details?HousingID=NxON3ykQy70%3d&SchoolID=ifygGfamMY8%3d"
},
{listingDesc:`
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
link: "https://www.places4students.com/Places/Details?HousingID=zBzkxs42IOA%3d&SchoolID=ifygGfamMY8%3d"}];

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
""

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
    const prosMatch = resultText.match(/## Pros:(.*?)(?=## Cons:|$)/s);
    const consMatch = resultText.match(/## Cons:(.*?)(?=$)/s);

    const rating = ratingMatch ? ratingMatch[1] : 'N/A';
    const pros = prosMatch ? prosMatch[1].trim() : 'N/A';
    const cons = consMatch ? consMatch[1].trim() : 'N/A';
    results.push({
      rating: rating,
      pros: pros,
      cons: cons,
      listing: row
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching data from Replicate' }, { status: 500 });
  }
}
console.log(results)
return NextResponse.json({ result: results });
}