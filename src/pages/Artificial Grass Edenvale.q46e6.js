import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Edenvale',
        slug: 'artificial-grass-edenvale',
        region: 'Gauteng',
        suburbs: [
            'Edenvale', 'Modderfontein', 'Greenstone Hill', 'Eastgate',
            'Bedfordview', 'Germiston', 'Van Ryn', 'Primrose',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Edenvale?',
                a: 'Installation in Edenvale typically ranges from R200 to R600+ per square metre fully installed. Contact PrimeTurf for a free, itemised quotation specific to your property.',
            },
            {
                q: 'How long does installation take in Edenvale?',
                a: 'Most Edenvale residential projects complete within 1–2 days. Larger complex or commercial installations may take 3–5 days. We schedule installations to minimise disruption to residents and business operations.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Edenvale',
        heroSubtitle: 'Edenvale · Modderfontein · Greenstone Hill · Bedfordview',
        heroDesc: 'Premium artificial grass for the East Rand — residential gardens, estate common areas, and commercial properties. 6-year warranty.',
        introTitle: 'East Rand Specialists',
        introText: 'The East Rand\'s rapid estate development means Edenvale homeowners increasingly need a turf installer who can meet HOA and complex management standards. PrimeTurf manages the full ARC submission process on your behalf.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote for Edenvale',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
