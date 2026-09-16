import wixSeo from 'wix-seo';
import wixLocationFrontend from 'wix-location-frontend';
import { SITE } from 'public/siteConfig';

$w.onReady(function () {
    const path = Array.isArray(wixLocationFrontend.path)
        ? wixLocationFrontend.path.filter(Boolean)
        : [];
    const slug = path.length > 0 ? path.join('/') : '';
    const currentUrl = wixLocationFrontend.url || SITE.url;

    const formatLocationName = (value) => {
        return value
            .replace(/^artificial-grass-/i, '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());
    };

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
            addressRegion: 'Gauteng',
            addressCountry: 'ZA',
        },
        areaServed: SITE.regions.map(r => ({ '@type': 'AdministrativeArea', name: r })),
        priceRange: '$$$$',
        sameAs: [SITE.whatsapp],
    };

    const webSite = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': SITE.url + '/#website',
        url: SITE.url,
        name: SITE.name,
        publisher: { '@id': SITE.url + '/#organization' },
    };

    const breadcrumbs = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        ],
    };

    if (path.length > 0) {
        breadcrumbs.itemListElement.push({
            '@type': 'ListItem',
            position: 2,
            name: formatLocationName(slug),
            item: currentUrl,
        });
    }

    const schemas = [localBusiness, webSite, breadcrumbs];

    if (path.length > 0 && path[0].startsWith('artificial-grass-')) {
        const locationName = formatLocationName(path[0]);
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Artificial Turf Installation',
            name: 'Artificial Grass Installation in ' + locationName,
            provider: { '@type': 'LocalBusiness', '@id': SITE.url + '/#organization' },
            areaServed: { '@type': 'Place', name: locationName },
            description: 'Premium artificial turf installation in ' + locationName + '. Professional site assessment, engineered sub-base and 6-year warranty.',
            offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'ZAR' },
        });
    }

    wixSeo.setStructuredData(schemas);
});
