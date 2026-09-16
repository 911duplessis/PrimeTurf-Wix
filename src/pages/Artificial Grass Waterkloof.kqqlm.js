import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Waterkloof',
        slug: 'artificial-grass-waterkloof',
        region: 'Gauteng',
        suburbs: [
            'Waterkloof', 'Waterkloof Ridge', 'Waterkloof Heights',
            'Waterkloof Glen', 'Brooklyn', 'Muckleneuk',
            'Groenkloof', 'Erasmuskloof',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Waterkloof?',
                a: 'Installation in Waterkloof typically ranges from R200 to R600+ per square metre fully installed, depending on turf grade and site preparation. Waterkloof Ridge properties often require additional drainage engineering for the sloped terrain. Contact PrimeTurf for a free, itemised quotation.',
            },
            {
                q: 'Do Waterkloof Ridge estates allow artificial grass?',
                a: 'Most Waterkloof and Waterkloof Ridge properties approve artificial grass installations. PrimeTurf provides specification sheets and product documentation to assist with any HOA or heritage requirements in the area.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Waterkloof',
        heroSubtitle: 'Waterkloof · Waterkloof Ridge · Brooklyn · Groenkloof',
        heroDesc: 'Ultra-premium synthetic turf for Waterkloof\'s most prestigious residential addresses. Precision installation with 6-year warranty.',
        introTitle: 'Premium Artificial Grass in Waterkloof',
        introText: 'Waterkloof and Waterkloof Ridge are among Pretoria\'s most distinguished residential addresses — diplomatic residences, ambassadorial estates, and landmark properties that demand an outdoor finish to match. PrimeTurf delivers precision-engineered artificial grass installations built for Waterkloof\'s unique terrain and standards.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote for Waterkloof',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
