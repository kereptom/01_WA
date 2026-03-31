export interface Post {
  slug: string;
  title: string;
  location: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "kyoto-temples",
    title: "Finding Peace in Kyoto's Ancient Temples",
    location: "Kyoto, Japan",
    date: "March 15, 2026",
    excerpt:
      "Walking through the bamboo groves and centuries-old temples of Kyoto, where every path tells a story of tradition and tranquility.",
    image: "/images/kyoto.jpg",
    content: `
## Your story goes here

Replace this with your travel story about Kyoto. Write about the temples you visited,
the food you tried, and the people you met along the way.

### Tips for Visitors

- Add your travel tips here
- Best time to visit
- Where to stay
- What to eat
    `,
  },
  {
    slug: "amalfi-coast",
    title: "Driving the Amalfi Coast at Sunset",
    location: "Amalfi, Italy",
    date: "February 28, 2026",
    excerpt:
      "Winding roads, dramatic cliffs, and the most stunning Mediterranean sunsets you'll ever witness.",
    image: "/images/amalfi.jpg",
    content: `
## Your story goes here

Replace this with your travel story about the Amalfi Coast. Describe the winding roads,
the colorful villages, and the incredible Italian cuisine.

### Tips for Visitors

- Add your travel tips here
- Best time to visit
- Where to stay
- What to eat
    `,
  },
  {
    slug: "patagonia-trails",
    title: "Hiking Through Patagonia's Wild Landscapes",
    location: "Torres del Paine, Chile",
    date: "January 10, 2026",
    excerpt:
      "A week-long trek through some of the most dramatic and untouched landscapes on Earth.",
    image: "/images/patagonia.jpg",
    content: `
## Your story goes here

Replace this with your Patagonia hiking story. Share the trails, the weather challenges,
and the breathtaking views that made it all worthwhile.

### Tips for Visitors

- Add your travel tips here
- Best time to visit
- Where to stay
- What to eat
    `,
  },
  {
    slug: "marrakech-medina",
    title: "Getting Lost in the Marrakech Medina",
    location: "Marrakech, Morocco",
    date: "December 5, 2025",
    excerpt:
      "The sensory overload of the souks, the quiet of hidden riads, and the warmth of Moroccan hospitality.",
    image: "/images/marrakech.jpg",
    content: `
## Your story goes here

Replace this with your Marrakech story. Write about the markets, the architecture,
the mint tea, and the vibrant culture.

### Tips for Visitors

- Add your travel tips here
- Best time to visit
- Where to stay
- What to eat
    `,
  },
];
