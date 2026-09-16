import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Silver Lakes',
        slug: 'artificial-grass-silver-lakes',
        region: 'Gauteng',
        suburbs: [
            'Silver Lakes Golf Estate', 'Silver Lakes Village', 'The Wilds',
            'Waterkloof Ridge', 'Woodhill', 'Faerie Glen',
            'Garsfontein', 'Moreleta Park',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Silver Lakes?',
                a: 'Most residential installations in Silver Lakes range from R200 to R600+ per square metre fully installed. A typical 100m² estate garden costs R25,000–R55,000. Contact PrimeTurf for a free, itemised quote for your specific property.',
            },
            {
                q: 'Does Silver Lakes Golf Estate HOA allow artificial grass?',
                a: 'Silver Lakes Golf Estate generally approves artificial grass installations that meet their aesthetic and drainage standards. PrimeTurf manages your ARC submission and provides all required documentation. We have installed successfully within Silver Lakes and surrounding estates.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Silver Lakes',
        heroSubtitle: 'Silverlakes Golf Estate · Silver Lakes Village · The Wilds',
        heroDesc: 'Precision-installed synthetic turf for Silver Lakes Golf Estate and surrounding Pretoria East\'s most sought-after residential addresses.',
        introTitle: 'Premium Artificial Grass in Silverlakes Golf Estate',
        introText: 'Silver Lakes is one of Pretoria East\'s premier residential addresses — a golf estate community where outdoor spaces must meet the same exacting standard as the architecture they surround. PrimeTurf\'s luxury artificial grass installations are engineered to pass Silver Lakes Golf Estate HOA requirements.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
