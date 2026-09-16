import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Pretoria East',
        slug: 'artificial-grass-pretoria-east',
        region: 'Gauteng',
        suburbs: [
            'Waterkloof Ridge', 'Silverlakes', 'Mooikloof', 'Faerie Glen',
            'Woodhill', 'The Wilds', 'Steyn City', 'Menlyn',
            'Garsfontein', 'Lynnwood', 'Moreleta Park', 'Olympus',
        ],
        faqs: [
            {
                q: 'How does PrimeTurf handle Pretoria\'s clay soil?',
                a: 'Clay soil is common throughout Pretoria East and requires specific sub-base preparation to ensure proper drainage. PrimeTurf installs a compacted aggregate drainage layer before laying the weed barrier and turf, preventing waterlogging and surface instability that clay soils would otherwise cause.',
            },
            {
                q: 'Do Pretoria East estates allow artificial grass?',
                a: 'Most Pretoria East estates and HOAs approve artificial grass. PrimeTurf can provide specification sheets and sample materials to assist with your HOA approval process. We have installed in Waterkloof Ridge, Silverlakes, Mooikloof and Woodhill estates successfully.',
            },
            {
                q: 'How much does installation cost in Pretoria East?',
                a: 'Pricing depends on area size, turf grade, and site preparation required. Most Pretoria East residential projects range from R18,000 to R60,000+ fully installed. Contact PrimeTurf for a free, itemised quotation for your specific property.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Pretoria East',
        heroSubtitle: 'Waterkloof Ridge · Silverlakes · Mooikloof · Faerie Glen',
        heroDesc: 'PrimeTurf began right here in Pretoria East. We know these estates, their soil, their climate, and their standards. Premium synthetic turf for the addresses that demand perfection.',
        introTitle: 'Pretoria East\'s Original Premium Turf Specialists',
        introText: 'PrimeTurf was founded and built in Pretoria East. Our installations at Mooikloof Country Estate, Waterkloof Ridge, Silverlakes, Woodhill, and Faerie Glen are the standard against which other installers are measured in this area.',
        areasTitle: 'Pretoria East Suburbs We Serve',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Request a Free Consultation in Pretoria East',
        ctaDesc: 'We respond within 2 hours. Same-day site visits available across Pretoria East.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
