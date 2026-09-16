import wixSeo from 'wix-seo';

function buildLocationSchemas(page) {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'PrimeTurf',
            areaServed: {
                '@type': 'City',
                name: page.location,
                containedInPlace: {
                    '@type': 'AdministrativeArea',
                    name: page.region,
                },
            },
            url: `https://www.primeturf.co.za/${page.slug}`,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a,
                },
            })),
        },
    ];
}

$w.onReady(function () {
    const PAGE = {
        location: 'Centurion',
        slug: 'artificial-grass-centurion',
        region: 'Gauteng',
        suburbs: [
            'Centurion CBD', 'Lyttelton', 'Irene', 'Highveld',
            'Eldoraigne', 'Die Hoewes', 'Rooihuiskraal', 'Zwartkop',
            'Thatchfield', 'Centurion Lake',
        ],
        faqs: [
            {
                q: 'How much does artificial grass cost in Centurion?',
                a: 'Installation in Centurion typically ranges from R200 to R600+ per square metre, fully installed including site preparation and drainage layer. Contact PrimeTurf for a free, itemised quotation specific to your property.',
            },
            {
                q: 'How long does installation take in Centurion?',
                a: 'Most residential jobs in Centurion take 1 to 3 days. Larger commercial or estate projects may take 4 to 7 days. We plan and schedule to minimise disruption to your household or business.',
            },
        ],
    };

    wixSeo.setStructuredData(buildLocationSchemas(PAGE));
});
