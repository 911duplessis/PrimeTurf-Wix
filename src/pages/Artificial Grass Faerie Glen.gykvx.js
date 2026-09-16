import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Faerie Glen',
        slug: 'artificial-grass-faerie-glen',
        region: 'Gauteng',
        suburbs: [
            'Faerie Glen', 'Garsfontein', 'Moreleta Park',
            'Equestria', 'Menlyn', 'Olympus',
            'Woodhill', 'Lynnwood',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Faerie Glen?',
                a: 'Installation in Faerie Glen typically ranges from R200 to R600+ per square metre fully installed. Most residential garden projects cost between R18,000 and R55,000. Contact PrimeTurf for a free, itemised quotation.',
            },
            {
                q: 'Is artificial grass suitable for Faerie Glen properties?',
                a: 'Yes. PrimeTurf\'s products are UV-stabilised for Gauteng\'s intense sun and include full drainage engineering for the clay-heavy soils common in Faerie Glen and the broader Pretoria East area.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Faerie Glen',
        heroSubtitle: 'Faerie Glen · Equestria · Garsfontein · Menlyn',
        heroDesc: 'Professional artificial grass installation for Faerie Glen\'s residential properties and secure estates. 6-year warranty, free site consultation.',
        introTitle: 'Premium Artificial Grass in Faerie Glen',
        introText: 'Faerie Glen is one of Pretoria East\'s most sought-after family suburbs, with tree-lined streets and well-maintained properties. PrimeTurf delivers the same precision installation process used across Pretoria East\'s premier estates to every Faerie Glen home.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote for Faerie Glen',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
