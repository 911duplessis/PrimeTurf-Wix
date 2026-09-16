import wixSeo from 'wix-seo';
import { buildLocationSchemas } from 'public/schemas';
import { bindContent, setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const PAGE = {
        location: 'Hyde Park',
        slug: 'artificial-grass-hyde-park',
        region: 'Gauteng',
        suburbs: [
            'Hyde Park', 'Sandhurst', 'Atholl', 'Melrose Arch',
            'Melrose', 'Dunkeld West', 'Illovo', 'Rosebank',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Hyde Park?',
                a: 'Hyde Park installations typically specify our premium-tier product range. Pricing ranges from R200 to R600+ per square metre fully installed depending on product specification and scope. Contact PrimeTurf for a bespoke consultation and itemised quotation.',
            },
            {
                q: 'Can PrimeTurf work with our existing landscape architect in Hyde Park?',
                a: 'Yes. PrimeTurf regularly collaborates with landscape architects and interior designers in Hyde Park, Sandhurst and Atholl. We provide product specifications, samples, and technical documentation to integrate with your broader landscape design vision.',
            },
        ],
    };

    const content = {
        heroTitle: 'Artificial Grass Installation in Hyde Park',
        heroSubtitle: 'Hyde Park · Sandhurst · Atholl · Melrose',
        heroDesc: 'Ultra-luxury synthetic turf for Johannesburg\'s most exclusive residential estates. Bespoke installations designed around your landscape architecture.',
        introTitle: 'Ultra-Luxury Estate Specialists',
        introText: 'Hyde Park homeowners choose PrimeTurf because we offer the only artificial grass finish appropriate for the ultra-luxury tier. Our product range includes the highest-density, most natural-looking fibres available in South Africa.',
        areasTitle: 'Areas Covered',
        areasText: PAGE.suburbs.join(' · '),
        ctaTitle: 'Request a Bespoke Consultation',
        ctaDesc: 'We respond within 2 hours. Same-day site visits available across Hyde Park and surrounds.',
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
    bindContent($w, content);
    setupCTAs($w);
});
