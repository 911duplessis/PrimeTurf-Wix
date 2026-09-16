import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Western Cape',
        slug: 'artificial-grass-western-cape',
        region: 'Western Cape',
        suburbs: [
            'Cape Town', 'Stellenbosch', 'Franschhoek', 'Paarl',
            'Somerset West', 'Strand', 'Gordon\'s Bay',
            'Hermanus', 'Langebaan', 'Saldanha',
        ],
        faqs: [
            {
                q: 'Does PrimeTurf install across the full Western Cape?',
                a: 'Yes — PrimeTurf services the full Western Cape including Cape Town metro, Stellenbosch, Franschhoek, Paarl, Somerset West, Gordon\'s Bay, Hermanus, and the West Coast. Contact us for a free consultation at your property.',
            },
            {
                q: 'How much does artificial grass cost in the Western Cape?',
                a: 'Fully installed artificial grass in the Western Cape ranges from approximately R350 to R850+ per m², depending on turf grade, site preparation, and location. PrimeTurf provides a free, fixed-price quote after a site consultation.',
            },
            {
                q: 'Is artificial grass suitable for the Western Cape climate?',
                a: 'The Western Cape\'s Mediterranean climate — hot dry summers and wet winters — makes artificial grass an ideal solution. Our turf is UV-stabilised for intense sun, salt-air resistant for coastal properties, and fully drainage-engineered for winter rainfall.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation — Western Cape',
        heroSubtitle: 'Cape Town · Stellenbosch · Winelands · West Coast',
        heroDesc: 'Premium artificial grass across the Western Cape — from the Atlantic Seaboard to the Winelands. Water-wise, UV-stabilised, and salt-air resistant.',
        introTitle: 'Premium Artificial Grass Across the Western Cape',
        introText: 'PrimeTurf serves the full Western Cape with the same precision and quality trusted by Gauteng\'s finest estates. From Cape Town\'s Southern Suburbs to Stellenbosch wine estates, our artificial grass is engineered for the Western Cape\'s unique climate demands.',
        areasTitle: 'Areas Covered in the Western Cape',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote in the Western Cape',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
