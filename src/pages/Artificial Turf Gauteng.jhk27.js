import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Johannesburg',
        slug: 'artificial-grass-johannesburg',
        region: 'Gauteng',
        suburbs: [
            'Sandton', 'Midrand', 'Fourways', 'Bryanston',
            'Morningside', 'Rivonia', 'Sunninghill', 'Waterfall Estate',
            'Johannesburg North', 'Johannesburg South', 'Roodepoort',
            'Randburg', 'Edenvale', 'Bedfordview', 'Centurion',
            'Pretoria East', 'Kyalami', 'Steyn City',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost per m² in Johannesburg?',
                a: 'Fully installed artificial grass in Johannesburg ranges from approximately R350 to R850 per m², depending on turf grade, site preparation requirements, and access. PrimeTurf provides a detailed fixed-price quote after a free site visit — no hidden charges or post-installation surprises.',
            },
            {
                q: 'Does PrimeTurf install in Sandton, Midrand, and Fourways?',
                a: 'Yes — we service all of Johannesburg\'s northern suburbs including Sandton, Midrand, Fourways, Bryanston, Morningside, Rivonia, and Sunninghill, as well as Centurion and Pretoria East. Call 076 804 8868 to book a free site consultation.',
            },
            {
                q: 'What is the best artificial grass for Gauteng\'s climate?',
                a: 'Gauteng\'s high altitude, intense UV, and occasional hail require UV-stabilised, high-density turf with a robust backing system. PrimeTurf specifies turf grades engineered for these conditions — the same products used in Gauteng\'s premium residential estates.',
            },
            {
                q: 'Can artificial grass be installed around a pool?',
                a: 'Yes — pool surround installations are one of PrimeTurf\'s most popular applications. We use non-slip, UV-resistant turf with efficient drainage and a suitable underlay. No mud, no grass cuttings in the pool, and no chemical lawn treatment runoff.',
            },
            {
                q: 'Is artificial grass suitable for dogs?',
                a: 'PrimeTurf\'s turf is non-toxic, lead-free, and fully pet-safe. It drains urine efficiently, can be rinsed and sanitised with ease, and eliminates the mud and allergens associated with natural lawn — ideal for Johannesburg households with large dogs or multiple pets.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Johannesburg',
        heroSubtitle: 'Sandton · Midrand · Fourways · Pretoria East · Centurion',
        heroDesc: 'Premium artificial grass installation across Johannesburg. 6-year warranty, free site consultation, quote within 24 hours.',
        introTitle: 'Johannesburg\'s Trusted Artificial Grass Specialists',
        introText: 'PrimeTurf is Johannesburg\'s premier artificial grass installer — trusted by estate homeowners, body corporates, and commercial developers across the northern suburbs and beyond.',
        areasTitle: 'We Cover All of Johannesburg',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Ready for a Lush Johannesburg Lawn?',
        ctaDesc: 'Book your free site consultation. We\'ll quote within 24 hours — no obligation.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
