import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Sandton',
        slug: 'artificial-grass-sandton',
        region: 'Gauteng',
        suburbs: [
            'Sandton CBD', 'Sandhurst', 'Bryanston', 'Fourways',
            'Sunninghill', 'Paulshof', 'Morningside', 'Rivonia',
            'Lonehill', 'Dainfern', 'Steyn City', 'Midrand',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Sandton?',
                a: 'Artificial grass installation in Sandton ranges from R200–R600+ per square metre depending on turf grade and site requirements. A standard 80m² residential garden typically costs R20,000–R45,000 fully installed. Contact PrimeTurf for a precise quote for your specific property.',
            },
            {
                q: 'How long does installation take in Sandton?',
                a: 'Most residential installations in Sandton take 1–2 days. Complex projects with extensive ground preparation or large surface areas may take 3–5 days. We work efficiently to minimise disruption to your household.',
            },
            {
                q: 'Is artificial grass allowed in Sandton estates?',
                a: 'Most Sandton estates and body corporates approve artificial grass installations. We recommend checking with your HOA first. PrimeTurf can provide specification documents and product information to assist with estate approvals.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Sandton',
        heroSubtitle: 'Sandhurst · Bryanston · Fourways · Morningside',
        heroDesc: 'Premium artificial turf for Sandton\'s most prestigious addresses. Precision-installed, maintenance-free, and backed by a 6-year warranty.',
        introTitle: 'Sandton\'s Premium Artificial Grass Specialists',
        introText: 'PrimeTurf is the artificial grass installer of choice for Sandton\'s finest residential addresses. From Sandhurst estates to Bryanston family homes, we deliver a finish that matches the standard of the properties we serve.',
        areasTitle: 'Areas We Serve in and Around Sandton',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Request a Free Consultation in Sandton',
        ctaDesc: 'We respond within 2 hours. Same-day site visits available across Sandton.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
