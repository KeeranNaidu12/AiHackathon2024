// app/api/replicate/route.js
import { NextResponse } from 'next/server';
import Replicate from 'replicate';

export async function POST(request) {
  const { studentPreferences, listingDesc } = await request.json();

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN // Ensure you have your API token set in environment variables
  });

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
    return NextResponse.json({ result: events.join('') });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching data from Replicate' }, { status: 500 });
  }
}