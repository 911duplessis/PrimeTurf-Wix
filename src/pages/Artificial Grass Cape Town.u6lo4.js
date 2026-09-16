import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Cape Town',
        slug: 'artificial-grass-cape-town',
        region: 'Western Cape',
        suburbs: [
            'Cape Town CBD', 'Constantia', 'Bishopscourt', 'Camps Bay',
            'Clifton', 'Hout Bay', 'Tokai', 'Newlands', 'Rondebosch',
            'Stellenbosch', 'Franschhoek', 'Paarl', 'Somerset West',
            'Strand', 'Gordon\'s Bay', 'Bloubergstrand', 'Durbanville', 'Bellville',
        ],
        faqs: [
            {
                q: 'Does artificial grass help with Cape Town water restrictions?',
                a: 'Yes — artificial grass eliminates lawn irrigation entirely. During Level 4+ restrictions, homeowners with natural lawns face fines and dead grass. PrimeTurf\'s synthetic turf stays lush and green year-round with zero water, regardless of restriction level or dam percentages.',
            },
            {
                q: 'How much does artificial grass cost in Cape Town?',
                a: 'Fully installed artificial grass in Cape Town ranges from approximately R350 to R850 per m², depending on turf grade, site preparation, and location. Most homeowners find the investment pays back within 2–3 years in eliminated irrigation costs alone. PrimeTurf provides a free, fixed-price quote after a site consultation.',
            },
            {
                q: 'Does PrimeTurf install in Stellenbosch and the Winelands?',
                a: 'Yes — we service Stellenbosch, Franschhoek, Paarl, Somerset West, and surrounding Winelands areas. We work extensively with Winelands estate developers, landscape architects, and premium residential properties in the region.',
            },
            {
                q: 'Is artificial grass suitable for Cape Town\'s climate?',
                a: 'Cape Town\'s hot, dry summers and wet winters make artificial grass an ideal solution. Our turf is UV-stabilised for the Western Cape\'s intense sun, salt-air resistant for coastal properties, and the drainage system handles Cape Town\'s winter rainfall efficiently without waterlogging.',
            },
            {
                q: 'How does artificial grass perform near the ocean?',
                a: 'PrimeTurf\'s turf is specifically salt-air resistant, making it ideal for Camps Bay, Clifton, Hout Bay, Gordon\'s Bay, and other coastal Cape Town locations. Natural grass struggles significantly in salt-laden sea breezes — synthetic turf thrives in those same conditions.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Cape Town',
        heroSubtitle: 'Serving Cape Town · Western Cape · Winelands',
        heroDesc: 'Beat water restrictions permanently. PrimeTurf installs premium synthetic turf across Cape Town, Stellenbosch, and the Winelands — staying lush and green through every drought, restriction level, and dry summer.',
        introTitle: 'The Water-Wise Lawn Solution',
        introText: 'Cape Town\'s water restrictions have made maintaining a natural lawn increasingly costly and uncertain. PrimeTurf\'s artificial grass eliminates that uncertainty — zero irrigation, zero fines risk, and a lawn that looks exceptional every day of the year regardless of dam levels.',
        areasTitle: 'Covering All of Cape Town',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Ready for a Water-Wise Cape Town Lawn?',
        ctaDesc: 'Book your free site consultation. We\'ll quote within 24 hours — no obligation.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
