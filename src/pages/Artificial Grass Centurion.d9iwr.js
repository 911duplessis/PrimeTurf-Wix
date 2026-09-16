import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Centurion',
        slug: 'artificial-grass-centurion',
        region: 'Gauteng',
        suburbs: [
            'Centurion CBD', 'Lyttelton', 'Irene', 'Highveld',
            'Eldoraigne', 'Die Hoewes', 'Rooihuiskraal', 'Zwartkop',
            'Thatchfield', 'Centurion Lake',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Centurion?',
                a: 'Installation in Centurion typically ranges from R200 to R600+ per square metre, fully installed including site preparation and drainage layer. Contact PrimeTurf for a free, itemised quotation specific to your property.',
            },
            {
                q: 'How long does installation take in Centurion?',
                a: 'Most residential jobs in Centurion take 1 to 3 days. Larger commercial or estate projects may take 4 to 7 days. We plan and schedule to minimise disruption to your household or business.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Centurion',
        heroSubtitle: 'Centurion Golf Estate · Lyttelton · Irene · Highveld',
        heroDesc: 'Golf estate lawns, residential gardens, and complex common areas — Centurion\'s premium synthetic turf specialists.',
        introTitle: 'Premium Artificial Grass in Centurion',
        introText: 'PrimeTurf brings the same precision and standard that has made us trusted across Gauteng\'s finest addresses to Centurion. Whether it is a residential garden, a secure estate common area, or a commercial property, our installation process is engineered for longevity, drainage performance, and visual perfection from day one.',
        areasTitle: 'Areas Covered in Centurion',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote for Centurion',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
