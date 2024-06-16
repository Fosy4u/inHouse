This is a code challenge for inHouse. 

## The challenge
The challenge is to integrate with the [REST Countries API] (https://restcountries.com) to pull country data and display it like in the designs. 

NB: Sometimes the REST Countries API can go down. We've added a `data.json` file with all the country data if you prefer to use that instead. However, please be aware that the data in the JSON file might not be up-to-date.
You are expected to use the [React / Next.js] JavaScript framework/library. You also have complete control over which packages you use to do things like make HTTP requests or style your project.


Users should be able to:
- See all countries from the API on the homepage
- Search for a country using an “input” field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test
npm run test

## Live Version
https://in-house-challenge-r3q6.vercel.app/