import { Booking, Inquiry, PortfolioItem, Testimonial, BlogPost, InstagramPost } from '../types';

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'ST-2026-081',
    clientName: 'Priyanka Awasthi',
    phone: '+91 98390 12450',
    email: 'priyanka.awasthi@gmail.com',
    serviceType: 'Royal Bridal',
    packageTier: 'Signature Royal Luxury',
    eventDate: '2026-11-18',
    eventTimeSlot: 'Evening (3:00 PM - 8:00 PM)',
    venueType: 'On-Location (Kanpur)',
    venueAddress: 'The Landmark Towers, Civil Lines, Kanpur',
    guestCount: 3,
    estimatedTotal: 38500,
    advancePaid: 15000,
    notes: 'Wearing heavy crimson Sabyasachi lehenga with antique gold jewelry. Want warm smokey eyes with clean matte base.',
    internalNotes: 'Advance ₹15,000 received via UPI on 28 Sep. Dupatta draping booked for bride + mother.',
    status: 'confirmed',
    createdAt: '2026-09-28T14:20:00Z',
  },
  {
    id: 'ST-2026-082',
    clientName: 'Shreya Kapoor',
    phone: '+91 94150 88219',
    email: 'shreya.k@outlook.com',
    serviceType: 'HD Reception',
    packageTier: 'Celebrity Airbrush & Styling',
    eventDate: '2026-11-20',
    eventTimeSlot: 'Evening (4:00 PM - 9:00 PM)',
    venueType: 'On-Location (Kanpur)',
    venueAddress: 'Status Club, Kanpur Cantt',
    guestCount: 2,
    estimatedTotal: 31000,
    advancePaid: 10000,
    notes: 'Emerald green cocktail gown. Looking for Hollywood waves, glass skin, and subtle winged shimmer.',
    internalNotes: 'Trial completed at studio on Oct 4. Bride loved Charlotte Tilbury Flawless Filter base.',
    status: 'confirmed',
    createdAt: '2026-10-02T11:15:00Z',
  },
  {
    id: 'ST-2026-083',
    clientName: 'Ananya Saxena',
    phone: '+91 87654 32109',
    email: 'ananya.saxena@gmail.com',
    serviceType: 'Engagement & Roka',
    packageTier: 'Signature Royal Luxury',
    eventDate: '2026-11-25',
    eventTimeSlot: 'Afternoon (11:00 AM - 3:00 PM)',
    venueType: 'Harshita Studio (Kanpur)',
    venueAddress: 'Shringaar Tales Studio, Swaroop Nagar, Kanpur',
    guestCount: 1,
    estimatedTotal: 20500,
    advancePaid: 0,
    notes: 'Pastel peach organza saree. Needs fresh dewy makeup with soft rose lips and braided floral bun.',
    internalNotes: 'Discussed over call. Awaiting ₹5,000 token advance by end of week.',
    status: 'pending',
    createdAt: '2026-10-08T09:40:00Z',
  },
  {
    id: 'ST-2026-084',
    clientName: 'Divya Trivedi',
    phone: '+91 98891 44520',
    email: 'divya.trivedi@yahoo.com',
    serviceType: 'Haldi & Mehendi',
    packageTier: 'Essential HD',
    eventDate: '2026-12-04',
    eventTimeSlot: 'Morning (8:00 AM - 1:00 PM)',
    venueType: 'On-Location (Kanpur)',
    venueAddress: 'Ganges Club, Kanpur',
    guestCount: 4,
    estimatedTotal: 29000,
    advancePaid: 10000,
    notes: 'Haldi ceremony in garden lawn. Makeup must be sweatproof and waterproof against turmeric splashing.',
    internalNotes: 'Waterproof sealant primers confirmed.',
    status: 'confirmed',
    createdAt: '2026-10-09T16:05:00Z',
  },
  {
    id: 'ST-2026-085',
    clientName: 'Meghna Mishra',
    phone: '+91 91200 77334',
    email: 'meghna.m@gmail.com',
    serviceType: 'Royal Bridal',
    packageTier: 'Celebrity Airbrush & Styling',
    eventDate: '2026-12-12',
    eventTimeSlot: 'Evening (2:00 PM - 7:00 PM)',
    venueType: 'Destination (Outside Kanpur)',
    venueAddress: 'Clarks Avadh / Lucknow Heritage Lawn',
    guestCount: 5,
    estimatedTotal: 52000,
    advancePaid: 20000,
    notes: 'Destination wedding in Lucknow. Outstation travel + stay arranged by client.',
    internalNotes: 'Travel booking confirmed. Harshita + 1 assistant.',
    status: 'confirmed',
    createdAt: '2026-10-05T18:30:00Z',
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'INQ-101',
    clientName: 'Sanskriti Shukla',
    phone: '+91 97932 40011',
    email: 'sanskriti.s@gmail.com',
    eventDate: '2026-12-22',
    serviceInterested: 'Royal Bridal & Cocktail Combo',
    message: 'Hi Harshita di, loved your Instagram reel from the Landmark wedding! Looking for bridal + sangeet combo in December. Are you available?',
    status: 'new',
    createdAt: '2026-10-10T08:12:00Z',
  },
  {
    id: 'INQ-102',
    clientName: 'Tanvi Agarwal',
    phone: '+91 94521 90812',
    email: 'tanvi.agarwal@outlook.com',
    eventDate: '2026-11-28',
    serviceInterested: 'HD Reception',
    message: 'Inquiring about reception makeup for Tilak Nagar venue. Need 2 additional party makeups for my bhabhi and sister.',
    status: 'contacted',
    createdAt: '2026-10-09T14:45:00Z',
  },
  {
    id: 'INQ-103',
    clientName: 'Komal Gupta',
    phone: '+91 80092 11440',
    email: 'komal.gupta.kp@gmail.com',
    eventDate: '2027-01-15',
    serviceInterested: 'Bridal Masterclass & Personal Vanity Session',
    message: 'Do you offer 1-on-1 personal makeup vanity styling or bridal masterclasses at your Swaroop Nagar studio?',
    status: 'new',
    createdAt: '2026-10-10T09:30:00Z',
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Heritage Nawabi Crimson Bride',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80',
    brideName: 'Aaradhya Dixit',
    venue: 'The Landmark Hotel, Kanpur',
    description: 'Timeless North Indian royal bridal aesthetic tailored for deep red velvet lehenga. Sculpted matte velvet complexion, traditional kohl rimmed almond eyes, and precision-defined ruby lips.',
    lookHighlights: ['Airbrush 24-hr waterproof base', 'Hand-cut 3D silk lashes', 'Traditional gold foil lids', 'Double dupatta Banarasi drape'],
    skinFinish: 'Velvet Soft Matte',
    eyeLook: 'Kohl Rimmed Antique Gold Wash',
    hairStyle: 'Royal Floral Bun with Fresh Mogra'
  },
  {
    id: 'p2',
    title: 'Candlelight Glass-Skin Reception',
    category: 'Reception',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
    brideName: 'Rhea Srivastava',
    venue: 'Status Club, Kanpur Cantt',
    description: 'Modern champagne glow created to complement a sequinned ivory and metallic rose gown under warm reception chandeliers.',
    lookHighlights: ['Charlotte Tilbury Hollywood filter glow', 'Soft brown smokey diffuse eyes', 'Nude satin gloss lips', 'Mermaid textured waves'],
    skinFinish: 'Ultra Dewy Glass Finish',
    eyeLook: 'Champagne Shimmer & Soft Smoke',
    hairStyle: 'Textured Hollywood Glam Waves'
  },
  {
    id: 'p3',
    title: 'Sangeet Night Metallic Drama',
    category: 'Sangeet',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    brideName: 'Kritika Pandey',
    venue: 'Regenta Central, Kanpur',
    description: 'High-energy dance floor ready look designed to withstand spotlights and hours of celebration with zero touch-ups.',
    lookHighlights: ['Sweatproof transfer-resistant lock', 'Rose gold duochrome pigment', 'Flutter wing liner', 'Voluminous half-up curls'],
    skinFinish: 'Radiant Luminous Demi-Matte',
    eyeLook: 'Rose Gold Metallic Halo Eye',
    hairStyle: 'Half-Up Textured Crown Curls'
  },
  {
    id: 'p4',
    title: 'Pastel Rose Romance Engagement',
    category: 'Engagement',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
    brideName: 'Shivangi Verma',
    venue: 'Royal Cliff, Kanpur',
    description: 'Ethereal day-time engagement glam designed for pastel blush organza drape with soft romantic peach-pink hues.',
    lookHighlights: ['Feathered soap brows', 'Peach monochrome flush', 'Bespoke baby pink lip ombre', 'Messy floral French braid'],
    skinFinish: 'Skin-like Satin Fresh',
    eyeLook: 'Soft Peach Petal Shimmer',
    hairStyle: 'Textured Braid with Baby\'s Breath'
  },
  {
    id: 'p5',
    title: 'Sun-Kissed Marigold Haldi Glow',
    category: 'Haldi',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
    brideName: 'Neha Jaiswal',
    venue: 'Ganges Club, Kanpur',
    description: 'Fresh, breathable waterproof bridal prep tailored for outdoors and turmeric rituals with zero caking.',
    lookHighlights: ['100% Water & sweat barrier sealant', 'No-foundation breathable glow', 'Hydrating lip stain', 'Traditional flower jewellery setting'],
    skinFinish: 'Dewy Honey Radiance',
    eyeLook: 'Minimalist Gold Sheen & Mascara',
    hairStyle: 'Loose Bubble Ponytail with Yellow Roses'
  },
  {
    id: 'p6',
    title: 'Royal Banarasi Heritage Editorial',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    brideName: 'Shalini Tripathi',
    venue: 'Heritage Haveli, Kanpur',
    description: 'High-fashion editorial bridal showcase blending Awadhi heritage royal motifs with clean contemporary contouring.',
    lookHighlights: ['Precision micro-sculpt contour', 'Deep vintage burgundy lips', 'Royal Kundan mathapatti alignment', 'Architectural low chignon'],
    skinFinish: 'Porcelain HD High Definition',
    eyeLook: 'Royal Smudged Kohl & Antique Bronze',
    hairStyle: 'Sleek Low Architectural Chignon'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    brideName: 'Pooja Mehrotra',
    event: 'Bridal Wedding Day',
    venue: 'The Landmark Hotel, Kanpur',
    date: 'February 2026',
    rating: 5,
    quote: 'Harshita did magic on my wedding day! I was terrified about makeup looking cakey, but she gave me the most regal, luminous skin that stayed intact from 5 PM pheras until 4 AM vidaai without a single crease. Everyone in Kanpur is still asking who did my makeup!',
    lookType: 'Royal Crimson Bridal'
  },
  {
    id: 't2',
    brideName: 'Dr. Tanya Nigam',
    event: 'Cocktail & Reception',
    venue: 'Status Club, Kanpur Cantt',
    date: 'January 2026',
    rating: 5,
    quote: 'From our trial at her studio in Swaroop Nagar to the final wedding day, Harshita Tiwari was calm, punctual, and so professional. Her eye for selecting the exact lip tone to match my emerald lehenga was perfection. Plus, she helped my mom with her saree draping so graciously!',
    lookType: 'HD Reception Glam'
  },
  {
    id: 't3',
    brideName: 'Aishwarya Bajpai',
    event: 'Engagement & Sangeet',
    venue: 'Ganges Club Lawn, Kanpur',
    date: 'March 2026',
    rating: 5,
    quote: 'Harshita understands that every bride has unique skin. She prepped my dry sensitive skin with luxury serums before applying any product. The makeup felt weightless like my own skin, yet the photographs looked straight out of Vogue India!',
    lookType: 'Dewy Pastel Engagement'
  },
  {
    id: 't4',
    brideName: 'Ritika Kothari',
    event: 'Destination Bridal (Kanpur to Agra)',
    venue: 'ITC Mughal, Agra',
    date: 'December 2025',
    rating: 5,
    quote: 'Booked Harshita for my destination wedding. She arrived right on time with her full luxury vanity kit (MAC, Huda, Dior). My tears during vidaai didn’t smudge anything — it truly is 100% waterproof. Best decision of my wedding planning!',
    lookType: 'Signature Royal Airbrush'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'bridal-skincare-prep-30-days',
    title: 'The 30-Day Bridal Skincare Countdown: How to Prep Before Your Big Day',
    excerpt: 'Great bridal makeup starts with deeply hydrated, calm skin. Here is Harshita’s proven 4-week calendar for Kanpur brides to achieve that lit-from-within glow.',
    category: 'Bridal Skin Prep',
    readTime: '4 min read',
    date: 'October 2026',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    content: `When brides sit in my makeup chair at Shringaar Tales, the first thing I assess is skin hydration. Kanpur’s weather swings between intense dry winters and humid summers, which can leave your barrier stressed. 

Here is my recommended bridal skincare timeline:

1. 4 Weeks Prior: Stop testing aggressive active serums or new facials. Stick strictly to barrier-repair ingredients like Ceramides, Centella, and Hyaluronic Acid.
2. 3 Weeks Prior: Schedule your final professional hydra-dermabrasion or gentle oxygen facial. Never do deep chemical peels within 20 days of your wedding.
3. 2 Weeks Prior: Drink 3 liters of water daily, incorporate fresh tender coconut water, and protect your skin with broad-spectrum SPF 50 even when indoor shopping in Swaroop Nagar or Naveen Market.
4. 3 Days Prior: Exfoliate lips gently with honey and sugar, sleep on silk pillowcases, and moisturize neck and décolletage daily.
5. Wedding Morning: Wash with a gentle milk cleanser, avoid hot water, and let me take over with customized lymphatic drainage massage and pre-makeup sheet masking.`,
    tips: [
      'Never try a brand-new facial or chemical peel less than 3 weeks before wedding',
      'Hydrate skin in layers (toner -> snail mucin / hyaluronic acid -> ceramide barrier cream)',
      'Keep lips moisturized with pure lanolin or peptide balms every night',
      'Avoid salty late-night wedding planning snacks 48 hours prior to prevent water retention puffiness'
    ]
  },
  {
    id: 'b2',
    slug: 'hd-vs-airbrush-makeup-guide',
    title: 'HD vs Airbrush Makeup: Which is Right for Uttar Pradesh Weather?',
    excerpt: 'Confused between traditional High-Definition cream formulas and modern Airbrush silicone mists? Here is an honest breakdown based on weather and skin types.',
    category: 'Makeup Guide',
    readTime: '5 min read',
    date: 'September 2026',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
    content: `One of the most common questions Kanpur brides ask me during consultations is: "Harshita, should I choose HD or Airbrush?" 

Both are phenomenal techniques when done by a certified artist, but here is how they differ:

HD (High Definition) Makeup:
- Applied with professional beauty blenders, stippling brushes, and micro-sponge techniques.
- Uses light-scattering pigments that blur fine pores without reflecting camera flash.
- Best for: Normal to dry skin, indoor air-conditioned venues (like Landmark or Regenta ballrooms), and brides who love a soft, velvety skin texture.

Airbrush Makeup:
- Sprayed using a pressurized micro-gun with silicone-based pigments that mist evenly over the skin.
- Forms an impervious, water-resistant film that bonds with your skin barrier.
- Best for: Oily or combination skin, outdoor humid lawn weddings (like Ganges Club or Status Club lawns), and tears-proof longevity.

My Verdict: At Shringaar Tales, I often create a hybrid look — using airbrush for the waterproof base foundation and HD cream techniques for dimensional blush and eye artistry.`,
    tips: [
      'For summer/monsoon weddings in UP, choose Airbrush for superior sweat resistance',
      'For winter weddings, HD cream base provides that luxurious nourished velvet finish',
      'Always request a personalized skin consultation to test your skin’s tolerance'
    ]
  },
  {
    id: 'b3',
    slug: 'how-to-keep-bridal-lipstick-intact-6-hours',
    title: 'How to Keep Your Bridal Lipstick Flawless Through 6 Hours of Pheras',
    excerpt: 'From sipping water to touching up during the varmala, here is the 4-step layering technique I use on all my brides for transfer-proof longevity.',
    category: 'Bridal Hacks',
    readTime: '3 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=80',
    content: `Between the warm fire of the havan kund, eating sweets, and greeting hundreds of guests on stage, your bridal lipstick takes the hardest hit. 

Here is the secret 4-layer technique we use at Shringaar Tales:

1. Lip Base Prime: We start by gently scrubbing dead cells and applying a lightweight matte lip primer that fills micro-lines without creating slick grease.
2. Full Pigment Liner: Rather than just outlining, we line and completely fill the lip bed with a waterproof, transfer-resistant wooden pencil matching your lehenga undertone.
3. First Liquid Matte Layer: A thin veil of transfer-proof liquid lipstick is applied with a fine brush and blotted with single-ply rice paper.
4. Translucent Powder Lock & Touch: A micro-dusting of silica powder through a tissue locks the pigments. A final touch of comfortable cream lipstick or lacquer is patted in the center for dimensional juiciness.`,
    tips: [
      'Drink water and juices using a paper straw rather than direct glass rims',
      'Pat your lips gently with tissue — never rub or wipe aggressively',
      'Keep your custom Shringaar Tales touch-up mini pot in your bridal clutch'
    ]
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    caption: 'Pure royal nostalgia in crimson velvet ❤️✨ Bride Aaradhya for her pheras at Landmark Kanpur. Soft gold eyelids with deep vintage lips.',
    mediaType: 'reel',
    likes: '4,820',
    comments: '142',
    thumbnail: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    instaUrl: 'https://www.instagram.com/make_overharshita/',
    tags: ['#KanpurMakeupArtist', '#ShringaarTales', '#RoyalBridal', '#UPWeddings']
  },
  {
    id: 'ig2',
    caption: 'Glass skin glow under candlelights for Rhea’s reception at Status Club Cantt ✨ Charlotte Tilbury Hollywood filter magic!',
    mediaType: 'post',
    likes: '3,210',
    comments: '88',
    thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    instaUrl: 'https://www.instagram.com/make_overharshita/',
    tags: ['#GlassSkin', '#HarshitaTiwari', '#ReceptionLook', '#KanpurBrides']
  },
  {
    id: 'ig3',
    caption: 'BTS in the vanity kit 💄 Dior, MAC, Charlotte Tilbury, Huda Beauty — only the finest skin-loving formulas for our brides.',
    mediaType: 'reel',
    likes: '5,140',
    comments: '194',
    thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    instaUrl: 'https://www.instagram.com/make_overharshita/',
    tags: ['#VanityKit', '#LuxuryBeauty', '#BridalMakeupKit', '#Kanpur']
  },
  {
    id: 'ig4',
    caption: 'Soft pastel romantic vibes for Shivangi’s engagement ceremony at Royal Cliff Kanpur 🌸 Fresh mogra flowers in messy braids.',
    mediaType: 'post',
    likes: '2,930',
    comments: '76',
    thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    instaUrl: 'https://www.instagram.com/make_overharshita/',
    tags: ['#EngagementGlow', '#PastelBride', '#ShringaarTales', '#Kanpur']
  },
  {
    id: 'ig5',
    caption: 'Sangeet night smokey eye drama with rose gold duochrome pigments! Unstoppable on the dance floor 💃✨',
    mediaType: 'reel',
    likes: '3,890',
    comments: '115',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    instaUrl: 'https://www.instagram.com/make_overharshita/',
    tags: ['#SangeetGlam', '#SmokeyEyes', '#MakeOverHarshita', '#BridalLook']
  },
  {
    id: 'ig6',
    caption: 'Waterproof test! Watch our real-time mist test on bridal makeup before Vidaai. Zero transfer, 100% tears-proof confidence! 💧👑',
    mediaType: 'reel',
    likes: '7,450',
    comments: '312',
    thumbnail: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    instaUrl: 'https://www.instagram.com/make_overharshita/',
    tags: ['#WaterproofMakeup', '#VidaaiProof', '#HarshitaTiwari', '#KanpurArtist']
  }
];

export const SERVICE_PACKAGES = [
  {
    id: 'pkg-royal-bridal',
    name: 'The Royal Pheras Bridal',
    tagline: 'The signature North Indian regal bride experience',
    price: '₹22,000',
    numericPrice: 22000,
    time: '3.5 - 4 Hours',
    popular: true,
    category: 'Royal Bridal' as const,
    description: 'A bespoke regal bridal transformation tailored to your heirloom lehenga, lighting, and facial symmetry. Includes complete pre-makeup skin conditioning.',
    features: [
      'High-Definition 24hr Waterproof Foundation Base',
      'Custom Eye Artistry with Antique Gold / Duochrome pigment',
      'Premium Mink 3D Lashes & Complementary Lenses',
      'Artisanal Floral Hair Styling & Extension Setting',
      'Royal Jewellery Alignment & Secure Pinning',
      'Dual Dupatta Draping (Banarasi / Velvet / Net)',
      'Luxury Touch-Up Vanity Kit (mini lipstick, blot sheets, pins)'
    ]
  },
  {
    id: 'pkg-airbrush-celebrity',
    name: 'Celebrity Airbrush & Luxe Styling',
    tagline: 'Ultra-lightweight micro-mist porcelain finish',
    price: '₹28,000',
    numericPrice: 28000,
    time: '4 Hours',
    popular: false,
    category: 'Royal Bridal' as const,
    description: 'The pinnacle of luxury bridal beauty using TEMPTU/silicone micro-mist airbrush technology for an undetectable, humidity-proof, camera-flawless finish.',
    features: [
      'Full Face & Décolletage Airbrush Silicone Base',
      'Cryo-roller Facial Lymphatic Drainage Prep',
      'Custom Color-Matched Lip Blend & 8-hr Stain',
      'Imported Silk Lashes & Eye Crystal Highlights',
      'Intricate Bridal Updo or Textured Hollywood Waves',
      'Multi-layer Dupatta Sculpting & Kaan-Phool Styling',
      'Deluxe Bridal Goodie Bag with Full Size Touchup Lipstick'
    ]
  },
  {
    id: 'pkg-reception-glam',
    name: 'The HD Reception Glam',
    tagline: 'Luminous candlelight glass-skin & evening elegance',
    price: '₹18,000',
    numericPrice: 18000,
    time: '2.5 - 3 Hours',
    popular: false,
    category: 'HD Reception' as const,
    description: 'Created specifically for cocktail gowns, chandeliers, and reception stage lights with radiant dewy textures and Hollywood hair.',
    features: [
      'Charlotte Tilbury Hollywood Filter Glow Finish',
      'Soft Smoke or Metallic Champagne Eye Wash',
      'Individual Cluster Lashes for Natural Flutter',
      'Hollywood Waves, Textured Bun, or Sleek Pony',
      'Gown / Saree Precision Pinning & Draping',
      'Body Shimmer on Shoulders, Collarbones & Arms'
    ]
  },
  {
    id: 'pkg-engagement-sangeet',
    name: 'Sangeet, Cocktail & Engagement',
    tagline: 'High-impact glamorous dance-floor ready looks',
    price: '₹14,000',
    numericPrice: 14000,
    time: '2.5 Hours',
    popular: false,
    category: 'Cocktail & Sangeet' as const,
    description: 'Bold, expressive, and fun styling with emphasis on smoldering eyes, long-lasting glow, and dance-proof hair.',
    features: [
      'Transfer-Resistant HD Complexion',
      'Smokey Wing, Cut-Crease, or Pastel Shimmer Eyes',
      'Voluminous Curls, French Braids, or Textured Ponytail',
      'Dupatta or Cape Gown Styling',
      'Lashes & Eye Jewel Accent'
    ]
  },
  {
    id: 'pkg-haldi-mehendi',
    name: 'Haldi & Mehendi Floral Glow',
    tagline: 'Sun-kissed, lightweight, and turmeric-proof fresh look',
    price: '₹10,500',
    numericPrice: 10500,
    time: '2 Hours',
    popular: false,
    category: 'Haldi & Mehendi' as const,
    description: 'Dewy, breathable, water-resistant morning makeup paired with fresh floral hair ornaments and playful pastel tints.',
    features: [
      'Waterproof Water-Resistant Barrier Prep',
      'Hydrating Tint & Naturally Radiant Blush',
      'Fresh Floral Hairdo (Mogra, Baby\'s Breath, Roses)',
      'Floral Jewellery Fitting & Saree/Sharara Draping',
      'Transfer-Proof Lip Stain'
    ]
  },
  {
    id: 'pkg-party-guest',
    name: 'Party Makeup (Bridal Family & Friends)',
    tagline: 'Glow for mother, sisters, bridesmaids & guests',
    price: '₹4,500',
    numericPrice: 4500,
    time: '1.5 Hours per person',
    popular: false,
    category: 'Party Guest Makeup' as const,
    description: 'High-definition radiant party makeover so the bride’s tribe looks coordinated, elegant, and photo-ready.',
    features: [
      'High-Definition Base matched to natural skin',
      'Classic Party Eyes (Soft Shimmer or Kohl)',
      'Blowdry, Iron Curls, or Neat Bun Styling',
      'Saree / Dupatta Ironing & Draping Support'
    ]
  }
];
