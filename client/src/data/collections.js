// ============================================================
// collections.js — Sample data for all product categories
// ============================================================

export const collections = [
  {
    id: 'sarees',
    slug: 'sarees',
    title: 'Sarees',
    subtitle: 'Traditional Elegance',
    description:
      'Explore our exquisite range of handloom, cotton, and designer sarees crafted for every occasion. From daily wear to festive celebrations, each saree tells a story of grace and tradition.',
    longDescription:
      'Our saree collection brings together the finest weaves from across India — Kanchivaram, Banarasi, Chanderi, Pochampally, and more. Each piece is hand-picked for quality, colour fastness, and craftsmanship. Whether you are shopping for a puja, a wedding function, or simply to add to your ethnic wardrobe, we have something for every taste and budget.',
    image: './images/sarees/saree-1.jpeg',
    images: [
      './images/sarees/saree-1.jpeg',
      './images/sarees/saree-2.jpeg',
      './images/sarees/saree-3.jpeg',
    ],
    priceRange: '₹800 – ₹15,000',
    featured: true,
    tags: ['traditional', 'handloom', 'festive', 'daily wear'],
  },
  {
    id: 'silk-sarees',
    slug: 'silk-sarees',
    title: 'Silk Sarees',
    subtitle: 'Luxurious Pure Silk',
    description:
      'Premium Kanchivaram and Mysore silk sarees that radiate luxury. Perfect for weddings, receptions, and grand celebrations.',
    longDescription:
      'Our silk saree collection is a tribute to the rich silk-weaving heritage of South India. We stock authentic Kanchivaram silk with zari borders, Mysore crepe silk, Dharmavaram silk, and more. Each saree comes with an authenticity tag. Ideal for brides, mothers of the bride, and anyone who appreciates the timeless elegance of pure silk.',
    image: './images/silk-sarees/silk-1.jpeg',
    images: [
      './images/silk-sarees/silk-1.jpeg',
      './images/silk-sarees/silk-2.jpeg',
      './images/silk-sarees/silk-3.jpeg',
    ],
    priceRange: '₹5,000 – ₹50,000',
    featured: true,
    tags: ['silk', 'kanchivaram', 'luxury', 'wedding'],
  },
  {
    id: 'designer-fabrics',
    slug: 'designer-fabrics',
    title: 'Designer Fabrics',
    subtitle: 'Premium Fabric by the Metre',
    description:
      'High-quality designer fabrics including georgette, chiffon, velvet, brocade, and more — sold by the metre for custom stitching.',
    longDescription:
      'Choose from our wide selection of imported and domestic designer fabrics. We carry georgette, chiffon, organza, velvet, brocade, net, and linen in hundreds of colours and prints. Perfect for tailoring into suits, blouses, lehengas, or curtains. Our fabric experts can guide you on the right fabric for your vision.',
    image: './images/designer-fabrics/designer-fabric.jpeg',
    images: [
      './images/designer-fabrics/designer-fabric.jpeg',
      './images/designer-fabrics/fabric-2.jpeg',
      './images/designer-fabrics/fabric-3.jpeg',
    ],
    priceRange: '₹200 – ₹3,000 per metre',
    featured: true,
    tags: ['fabric', 'georgette', 'chiffon', 'velvet', 'custom'],
  },
  {
    id: 'lehengas',
    slug: 'lehengas',
    title: 'Lehengas',
    subtitle: 'Bridal & Party Lehengas',
    description:
      'Stunning lehenga cholis for brides, bridesmaids, and festive occasions. Available in ready-to-wear and customized styles.',
    longDescription:
      'Our lehenga collection ranges from heavily embroidered bridal sets to lightweight party lehengas. We offer sizes from XS to 3XL, and all our lehengas can be customised in colour, blouse style, and embroidery. Paired with matching dupattas, each lehenga is a statement piece.',
    image: './images/lehengas/lehenga.jpeg',
    images: [
      './images/lehengas/lehenga.jpeg',
      './images/lehengas/lehenga-2.jpeg',
      './images/lehengas/lehenga-3.jpeg',
    ],
    priceRange: '₹3,000 – ₹40,000',
    featured: true,
    tags: ['lehenga', 'bridal', 'party wear', 'embroidery'],
  },
  {
    id: 'customized-blouses',
    slug: 'customized-blouses',
    title: 'Customized Blouses',
    subtitle: 'Stitched to Your Measurements',
    description:
      'Designer blouses tailored to your exact measurements. Choose from 50+ neck designs, sleeve styles, and embroidery patterns.',
    longDescription:
      'A perfect blouse makes the entire saree look. Our expert tailors craft blouses to your exact measurements with a wide variety of neck designs — boat neck, sweetheart, high neck, halter, back-open, and more. Embroidery, mirror work, lace borders, and fabric printing are also available. Delivery in 7–10 working days.',
    image: 'https://pin.it/5FTSfYUWS',
    images: [
      'https://pin.it/5FTSfYUWS',
      'https://pin.it/6Ek3EvL9o',
      'https://pin.it/OqpDldr3E',
    ],
    priceRange: '₹400 – ₹3,500',
    featured: false,
    tags: ['blouse', 'tailoring', 'custom', 'stitching'],
  },
  {
    id: 'wedding-dresses',
    slug: 'wedding-dresses',
    title: 'Wedding Dresses',
    subtitle: 'For Your Perfect Day',
    description:
      'Bridal and groom collections, bridesmaids outfits, and family matching sets for a picture-perfect wedding.',
    longDescription:
      'We specialise in complete wedding outfit solutions. Our bridal section features lehengas, silk sarees, gowns, and custom bridal sets. The groom section has sherwani, dhoti sets, and Indo-western suits. We also offer colour-coordinated family matching sets and bridesmaid outfits to make your entire wedding party look stunning.',
    image: './images/wedding-dresses/wedding-dress.jpeg',
    images: [
      './images/wedding-dresses/wedding-dress.jpeg',
      './images/wedding-dresses/wedding-2.jpeg',
      './images/wedding-dresses/wedding-3.jpeg',
    ],
    priceRange: '₹8,000 – ₹1,00,000',
    featured: true,
    tags: ['wedding', 'bridal', 'groom', 'sherwani'],
  },
  {
    id: 'couple-dresses',
    slug: 'couple-dresses',
    title: 'Couple Dresses',
    subtitle: 'Matching Outfits for Two',
    description:
      'Coordinated couple outfits for weddings, anniversaries, photoshoots, and special occasions.',
    longDescription:
      'Dress alike and stand out together. Our couple dress collection includes matching saree-and-dhoti sets, coordinated salwar-kurta pairs, and bride-and-groom themed outfits. Custom colours and fabric choices available. A favourite for engagement ceremonies, anniversary parties, and family events.',
    image: './images/couple-dresses/couple-dress.jpeg',
    images: [
      './images/couple-dresses/couple-dress.jpeg',
      './images/couple-dresses/couple-2.jpeg',
      './images/couple-dresses/couple-3.jpeg',
    ],
    priceRange: '₹2,000 – ₹20,000 per set',
    featured: false,
    tags: ['couple', 'matching', 'wedding', 'anniversary'],
  },
  {
    id: 'rental-dresses',
    slug: 'rental-dresses',
    title: 'Rental Dresses',
    subtitle: 'Premium Outfits on Rent',
    description:
      'Rent designer lehengas, gowns, and wedding outfits at a fraction of the purchase price.',
    longDescription:
      'Why buy when you can rent? Our rental collection features over 200 premium outfits including bridal lehengas, silk sarees, gowns, sherwanis, and kids party dresses. All rental items are dry-cleaned and quality-checked before each booking. Book 7 days in advance. Rental period: 2–3 days.',
    image: './images/rental-dresses/dress.jpeg',
    images: [
      './images/rental-dresses/dress.jpeg',
      './images/rental-dresses/rental-2.jpeg',
      './images/rental-dresses/rental-3.jpeg',
    ],
    priceRange: '₹500 – ₹5,000 per rental',
    featured: true,
    tags: ['rental', 'lehenga', 'gown', 'sherwani', 'affordable'],
  },
  {
    id: 'designer-laces',
    slug: 'designer-laces',
    title: 'Designer Laces',
    subtitle: 'The Perfect Finishing Touch',
    description:
      'Imported and handcrafted laces in gold, silver, and multi-colour — ideal for blouses, sarees, and dress borders.',
    longDescription:
      'Our lace collection features over 500 varieties of intricate patterns — cotton lace, sequin lace, crochet lace, mirror lace, metallic zari lace, and pearl lace. Sold by the metre. Perfect for decorating blouse hems, saree falls, lehenga borders, and home décor projects. Minimum order: half metre.',
    image: './images/designer-laces/designer-laces.jpeg',
    images: [
      './images/designer-laces/designer-laces.jpeg',
      './images/designer-laces/lace-2.jpeg',
      './images/designer-laces/lace-3.jpeg',
    ],
    priceRange: '₹30 – ₹500 per metre',
    featured: false,
    tags: ['lace', 'border', 'embellishment', 'blouse', 'decor'],
  },
];

/** Returns only featured collections for the home page */
export const getFeaturedCollections = () =>
  collections.filter((c) => c.featured);

/** Find a collection by its URL slug */
export const getCollectionBySlug = (slug) =>
  collections.find((c) => c.slug === slug) || null;
