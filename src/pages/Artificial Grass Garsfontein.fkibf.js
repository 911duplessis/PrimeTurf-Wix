import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Garsfontein',
        slug: 'artificial-grass-garsfontein',
        region: 'Gauteng',
        suburbs: [
            'Garsfontein', 'Waterkloof Ridge', 'Moreleta Park',
            'Faerie Glen', 'Woodhill', 'Menlyn',
            'Pretorius Park', 'Constantia Park',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Garsfontein?',
                a: 'Installation in Garsfontein typically ranges from R200 to R600+ per square metre fully installed, depending on turf grade and site preparation. Contact PrimeTurf for a free, itemised quotation specific to your property.',
            },
            {
                q: 'How long does installation take in Garsfontein?',
                a: 'Most residential jobs in Garsfontein take 1 to 3 days. Larger complex or estate projects may take 4 to 7 days. PrimeTurf schedules installations to minimise disruption.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Garsfontein',
        heroSubtitle: 'Garsfontein · Waterkloof Ridge · Moreleta Park · Faerie Glen',
        heroDesc: 'Professional artificial grass installation for Garsfontein\'s residential gardens and estate properties. 6-year warranty, free site consultation.',
        introTitle: 'Premium Artificial Grass in Garsfontein',
        introText: 'Garsfontein sits at the heart of Pretoria East — a well-established residential suburb with proximity to Moreleta Park, Faerie Glen, and Waterkloof Ridge. PrimeTurf delivers the same precision installation trusted across Pretoria East\'s finest estates.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote for Garsfontein',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
