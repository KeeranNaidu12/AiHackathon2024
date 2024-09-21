// app/api/replicate/route.js
import { NextResponse } from 'next/server';
import Replicate from 'replicate';

export async function POST(request) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN // Ensure you have your API token set in environment variables
  });

  const input = {
    top_p: 1,
    prompt: "Can you write a poem about open source machine learning? Let's make it in the style of E. E. Cummings.",
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