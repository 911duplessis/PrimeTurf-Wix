import wixSeo from 'wix-seo';

function buildLocationSchemas(page) {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'PrimeTurf',
            areaServed: {
                '@type': 'City',
                name: page.location,
                containedInPlace: {
                    '@type': 'AdministrativeArea',
                    name: page.region,
                },
            },
            url: `https://www.primeturf.co.za/${page.slug}`,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a,
                },
            })),
        },
    ];
}
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Mooikloof',
        slug: 'artificial-grass-mooikloof',
        region: 'Gauteng',
        suburbs: [
            'Mooikloof Country Estate', 'Mooikloof Equestrian Estate',
            'Mooikloof Ridge', 'Pretoria East', 'Silverlakes',
            'Faerie Glen', 'Woodhill', 'Garsfontein',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Mooikloof?',
                a: 'Mooikloof estate installations are typically larger in scale and can range from R200 to R600+ per square metre. Many Mooikloof projects exceed 300m² — contact PrimeTurf for a free site assessment and itemised quotation.',
            },
            {
                q: 'Does Mooikloof Country Estate HOA approve artificial grass?',
                a: 'Mooikloof Country Estate and Mooikloof Equestrian Estate generally approve artificial grass with the correct product specification and drainage engineering. PrimeTurf manages the full ARC submission on your behalf. We have completed successful installations within Mooikloof.',
            },
        ],
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    const content = {
        heroTitle: 'Artificial Grass Installation in Mooikloof',
        heroSubtitle: 'Mooikloof Country Estate · Mooikloof Equestrian · Mooikloof Ridge',
        heroDesc: 'PrimeTurf is Mooikloof\'s trusted artificial grass specialist. Proven installations at Mooikloof Country Estate and Mooikloof Equestrian Estate.',
        introTitle: 'Premium Artificial Grass in Mooikloof Country Estate',
        introText: 'Mooikloof is one of Pretoria\'s most exclusive country estate addresses — where properties are measured in hectares and landscaping is expected to match the grandeur of the architecture. PrimeTurf has completed signature installations at Mooikloof Country Estate.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
