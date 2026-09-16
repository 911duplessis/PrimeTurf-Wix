import { SITE } from 'public/siteConfig';

export function buildLocationSchemas({ location, slug, suburbs, faqs, region }) {
    const pageUrl = SITE.url + '/' + slug;
    const areaRegion = region || 'Gauteng';

    const localBusiness = {
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
            addressRegion: areaRegion,
            addressCountry: 'ZA',
        },
        areaServed: SITE.regions.map(r => ({ '@type': 'AdministrativeArea', name: r })),
        priceRange: '$$$$',
        sameAs: [SITE.whatsapp],
    };

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
            { '@type': 'ListItem', position: 2, name: 'Artificial Grass ' + location, item: pageUrl },
        ],
    };

    const service = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Artificial Turf Installation',
        name: 'Artificial Grass Installation in ' + location,
        provider: { '@type': 'LocalBusiness', '@id': SITE.url + '/#organization' },
        areaServed: { '@type': 'Place', name: location + ', ' + areaRegion },
        description: 'Premium artificial turf installation in ' + location + '. Professional site assessment, engineered sub-base, drainage system and ' + SITE.warranty + ' warranty.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'ZAR' },
    };

    const schemas = [localBusiness, breadcrumb, service];

    if (faqs && faqs.length > 0) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
        });
    }

    return schemas;
}

export function buildServiceAreaSchemas() {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': SITE.url + '/#organization',
            name: SITE.name,
            url: SITE.url,
            telephone: SITE.phone,
            areaServed: SITE.regions.map(r => ({ '@type': 'AdministrativeArea', name: r })),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
                { '@type': 'ListItem', position: 2, name: 'Service Areas', item: SITE.url + '/service-areas' },
            ],
        },
    ];
}
