import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Midrand',
        slug: 'artificial-grass-midrand',
        region: 'Gauteng',
        suburbs: [
            'Halfway House', 'Kyalami', 'Waterfall', 'Grand Central',
            'Sunninghill', 'Vorna Valley', 'Barbeque Downs', 'Blue Hills',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Midrand?',
                a: 'Installation in Midrand typically ranges from R200 to R600+ per square metre, fully installed including site preparation and drainage layer. Contact PrimeTurf for a free, itemised quotation specific to your property.',
            },
            {
                q: 'How long does installation take in Midrand?',
                a: 'Most residential jobs in Midrand take 1 to 3 days. Larger commercial or estate projects may take 4 to 7 days. We plan and schedule to minimise disruption to your household or business.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Midrand',
        heroSubtitle: 'Halfway House · Kyalami · Waterfall · Grand Central',
        heroDesc: 'Professional synthetic turf for Midrand\'s fastest-growing residential and commercial property market.',
        introTitle: 'Premium Artificial Grass in Midrand',
        introText: 'PrimeTurf brings the same precision and standard that has made us trusted across Gauteng\'s finest addresses to Midrand. Whether it is a residential garden, a secure estate common area, or a commercial property, our installation process is engineered for longevity, drainage performance, and visual perfection from day one.',
        areasTitle: 'Areas Covered in Midrand',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote for Midrand',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
