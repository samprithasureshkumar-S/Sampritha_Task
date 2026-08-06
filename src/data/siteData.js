// Placeholder image helper — placehold.co, using brand palette hex codes (no leading #)
export const ph = (w, h, bg, fg, label) =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(label)}&font=playfair-display`;

export const categories = [
  {
    id: 'skincare',
    name: 'Skincare Rituals',
    description: 'Serums, creams & cleansers for radiant skin',
    image: ph(600, 750, 'EFE7DE', '3B4638', 'Skincare'),
  },
  {
    id: 'body',
    name: 'Body & Bath',
    description: 'Nourishing oils, balms and botanical scrubs',
    image: ph(600, 750, 'D4B26A', '3B4638', 'Body+%26+Bath'),
  },
  {
    id: 'wellness-tea',
    name: 'Wellness Teas',
    description: 'Small-batch botanical blends for everyday calm',
    image: ph(600, 750, '8DAA91', 'FAF8F5', 'Wellness+Tea'),
  },
  {
    id: 'gifting',
    name: 'Gift Edits',
    description: 'Curated sets for the rituals that matter',
    image: ph(600, 750, '3B4638', 'FAF8F5', 'Gift+Edits'),
  },
];

export const bestSellers = [
  {
    id: 1,
    name: 'Velvet Bloom Face Serum',
    category: 'Skincare',
    price: 48,
    rating: 4.8,
    reviews: 214,
    image: ph(600, 720, 'EFE7DE', '3B4638', 'Face+Serum'),
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Golden Hour Facial Oil',
    category: 'Skincare',
    price: 52,
    rating: 4.9,
    reviews: 189,
    image: ph(600, 720, 'D4B26A', '3B4638', 'Facial+Oil'),
    badge: 'New',
  },
  {
    id: 3,
    name: 'Chamomile Dream Night Cream',
    category: 'Skincare',
    price: 44,
    rating: 4.7,
    reviews: 156,
    image: ph(600, 720, 'FAF8F5', '3B4638', 'Night+Cream'),
  },
  {
    id: 4,
    name: 'Sage Root Body Butter',
    category: 'Body Care',
    price: 32,
    rating: 4.9,
    reviews: 302,
    image: ph(600, 720, '8DAA91', 'FAF8F5', 'Body+Butter'),
    badge: 'Bestseller',
  },
  {
    id: 5,
    name: 'Jasmine Calm Herbal Tea',
    category: 'Wellness',
    price: 22,
    rating: 4.6,
    reviews: 98,
    image: ph(600, 720, '3B4638', 'FAF8F5', 'Herbal+Tea'),
  },
  {
    id: 6,
    name: 'Rose Clay Purifying Mask',
    category: 'Skincare',
    price: 36,
    rating: 4.8,
    reviews: 174,
    image: ph(600, 720, 'EFE7DE', 'D4B26A', 'Clay+Mask'),
    badge: 'New',
  },
  {
    id: 7,
    name: 'Citrus Grove Body Scrub',
    category: 'Body Care',
    price: 28,
    rating: 4.7,
    reviews: 121,
    image: ph(600, 720, 'D4B26A', 'FAF8F5', 'Body+Scrub'),
  },
  {
    id: 8,
    name: 'Turmeric Glow Eye Cream',
    category: 'Skincare',
    price: 38,
    rating: 4.8,
    reviews: 143,
    image: ph(600, 720, 'FAF8F5', '8DAA91', 'Eye+Cream'),
  },
];

export const whyChooseUs = [
  {
    id: 1,
    icon: 'leaf',
    title: 'Clean, Conscious Ingredients',
    description: 'Every formula is crafted without parabens, sulfates or synthetic fragrance.',
  },
  {
    id: 2,
    icon: 'heart',
    title: 'Cruelty-Free, Always',
    description: 'Never tested on animals — kindness is part of every recipe we make.',
  },
  {
    id: 3,
    icon: 'globe',
    title: 'Sustainably Sourced',
    description: 'Botanicals harvested from ethical farms committed to regenerative practices.',
  },
  {
    id: 4,
    icon: 'sparkles',
    title: 'Small-Batch Crafted',
    description: 'Made in limited batches to preserve potency and reduce excess waste.',
  },
];

export const collections = [
  {
    id: 1,
    name: 'The Botanical Skincare Edit',
    tagline: 'Radiance, rooted in nature',
    description:
      'A considered edit of serums, creams and oils blended with plant actives to restore softness and glow — for every skin story.',
    image: ph(900, 1000, 'EFE7DE', '3B4638', 'Botanical+Edit'),
    reverse: false,
  },
  {
    id: 2,
    name: 'The Stillness Tea Ritual',
    tagline: 'Slow mornings, mindful moments',
    description:
      'Hand-blended botanical teas designed to accompany quiet rituals — from sunrise calm to evening wind-down.',
    image: ph(900, 1000, '8DAA91', 'FAF8F5', 'Tea+Ritual'),
    reverse: true,
  },
  {
    id: 3,
    name: 'The Golden Body Collection',
    tagline: 'Warmth for the skin, calm for the mind',
    description:
      'Rich butters and oils infused with warming botanicals, designed to turn everyday care into a grounding ritual.',
    image: ph(900, 1000, 'D4B26A', '3B4638', 'Body+Collection'),
    reverse: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Amara J.',
    role: 'Verified Customer',
    rating: 5,
    quote:
      'My skin has never felt this calm. The Velvet Bloom Serum is now a permanent part of my morning ritual.',
    avatar: ph(120, 120, 'EFE7DE', '3B4638', 'AJ'),
  },
  {
    id: 2,
    name: 'Priya K.',
    role: 'Verified Customer',
    rating: 5,
    quote:
      'The teas are beautifully blended and the packaging feels so premium. It genuinely feels like self-care in a cup.',
    avatar: ph(120, 120, 'D4B26A', '3B4638', 'PK'),
  },
  {
    id: 3,
    name: 'Sofia M.',
    role: 'Verified Customer',
    rating: 4,
    quote:
      'Clean ingredients I can actually pronounce, and it shows in how my skin feels. Slow beauty done right.',
    avatar: ph(120, 120, '8DAA91', 'FAF8F5', 'SM'),
  },
  {
    id: 4,
    name: 'Noor H.',
    role: 'Verified Customer',
    rating: 5,
    quote:
      'From the unboxing to the first use, everything about this brand feels intentional and elegant.',
    avatar: ph(120, 120, '3B4638', 'FAF8F5', 'NH'),
  },
];

export const sustainabilityStats = [
  { id: 1, value: '92%', label: 'Recyclable or refillable packaging' },
  { id: 2, value: '40+', label: 'Ethical farming partners worldwide' },
  { id: 3, value: '0', label: 'Animal testing, ever' },
  { id: 4, value: '120K', label: 'Trees planted through our giveback program' },
];
