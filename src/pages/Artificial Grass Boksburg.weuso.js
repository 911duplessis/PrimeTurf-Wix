import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Boksburg',
        slug: 'artificial-grass-boksburg',
        region: 'Gauteng',
        suburbs: [
            'Boksburg', 'Benoni', 'Brakpan', 'Springs',
            'Boksburg North', 'Jet Park', 'Bartlett', 'Sunward Park',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Boksburg?',
                a: 'Installation in Boksburg ranges from R200 to R600+ per square metre fully installed, depending on turf grade and site requirements. Contact PrimeTurf for a free itemised quotation.',
            },
            {
                q: 'Does artificial grass work in Boksburg\'s climate?',
                a: 'Yes. PrimeTurf\'s product range is specifically UV-stabilised for South Africa\'s Highveld climate — intense summer sun, high temperatures, and heavy seasonal storms. Every installation includes full drainage engineering to handle Boksburg\'s summer rainfall intensity.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Boksburg',
        heroSubtitle: 'Boksburg · Benoni · Brakpan · Springs',
        heroDesc: 'Premium synthetic turf for Boksburg and the East Rand — professional residential and estate installations with 6-year warranty.',
        introTitle: 'Premium Artificial Grass in Boksburg',
        introText: 'Boksburg and the broader East Rand residential market represent a growing demand for quality artificial grass — a solution that eliminates water bills, removes maintenance overhead, and delivers a consistently green, immaculate lawn.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Get a Free Quote',
        ctaDesc: 'WhatsApp or call us. We respond within 2 hours.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
