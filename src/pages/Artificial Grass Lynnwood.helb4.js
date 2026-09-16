import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Lynnwood',
        slug: 'artificial-grass-lynnwood',
        region: 'Gauteng',
        suburbs: [
            'Lynnwood', 'Lynnwood Glen', 'Lynnwood Manor',
            'Lynnwood Ridge', 'Menlo Park', 'Ashlea Gardens',
            'Die Wilgers', 'Hazelwood',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Lynnwood?',
                a: 'Installation in Lynnwood typically ranges from R200 to R600+ per square metre fully installed, including site preparation and drainage layer. Contact PrimeTurf for a free, itemised quotation specific to your property.',
            },
            {
                q: 'Do you install artificial grass in Lynnwood and surrounds?',
                a: 'Yes. PrimeTurf services all of Lynnwood including Lynnwood Glen, Lynnwood Manor, Lynnwood Ridge, Menlo Park, and surrounding Pretoria East suburbs. Free on-site consultations available.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Lynnwood',
        heroSubtitle: 'Lynnwood · Lynnwood Glen · Lynnwood Ridge · Menlo Park',
        heroDesc: 'Professional artificial grass for Lynnwood\'s residential properties, complexes, and commercial spaces. 6-year warranty, free consultation.',
        introTitle: 'Premium Artificial Grass in Lynnwood',
        introText: 'Lynnwood is a vibrant Pretoria East suburb blending residential living with commercial activity — from family homes in Lynnwood Glen to modern complexes along Lynnwood Road. PrimeTurf delivers precision installation engineered for Lynnwood\'s mix of property types.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote for Lynnwood',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
