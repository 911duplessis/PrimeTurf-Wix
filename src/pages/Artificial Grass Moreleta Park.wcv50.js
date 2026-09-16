import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Moreleta Park',
        slug: 'artificial-grass-moreleta-park',
        region: 'Gauteng',
        suburbs: [
            'Moreleta Park', 'Woodlands', 'Elardus Park',
            'Constantia Park', 'Garsfontein', 'Faerie Glen',
            'Olympus', 'Pretorius Park',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Moreleta Park?',
                a: 'Installation in Moreleta Park typically ranges from R200 to R600+ per square metre fully installed, including site preparation and drainage. Contact PrimeTurf for a free, itemised quotation specific to your property.',
            },
            {
                q: 'Does PrimeTurf install in Moreleta Park estates and complexes?',
                a: 'Yes. PrimeTurf services all Moreleta Park estates, townhouse complexes, and residential properties. We can provide specification sheets and documentation for HOA and body corporate approval processes.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Moreleta Park',
        heroSubtitle: 'Moreleta Park · Woodlands · Elardus Park · Constantia Park',
        heroDesc: 'Premium synthetic turf for Moreleta Park\'s residential gardens, estates, and complexes. Professional installation with 6-year warranty.',
        introTitle: 'Premium Artificial Grass in Moreleta Park',
        introText: 'Moreleta Park is one of Pretoria East\'s most established residential areas, with a mix of family homes, secure complexes, and modern estates. PrimeTurf delivers precision artificial grass installation engineered for the area\'s clay-heavy soils and Gauteng climate demands.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote for Moreleta Park',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
