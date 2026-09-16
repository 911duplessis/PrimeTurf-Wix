import wixSeo from 'wix-seo';
import { SITE } from 'public/siteConfig';
import { setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const schemas = [
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': SITE.url + '/#organization',
            name: SITE.name,
            description: 'Premium artificial turf specialists serving Gauteng and the Western Cape. Professional installation with 6-year manufacturer warranty and 24-month workmanship guarantee.',
            url: SITE.url,
            telephone: SITE.phone,
            email: SITE.email,
            address: {
                '@type': 'PostalAddress',
                addressRegion: 'Gauteng',
                addressCountry: 'ZA',
            },
            areaServed: [
                { '@type': 'AdministrativeArea', name: 'Gauteng' },
                { '@type': 'AdministrativeArea', name: 'Western Cape' },
            ],
            priceRange: '$$$$',
            sameAs: [SITE.whatsapp],
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': SITE.url + '/#website',
            url: SITE.url,
            name: SITE.name,
            publisher: { '@id': SITE.url + '/#organization' },
        },
    ];

    wixSeo.setStructuredData(schemas);
    setupCTAs($w);
});
