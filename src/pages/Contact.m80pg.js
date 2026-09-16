import wixSeo from 'wix-seo';
import { SITE } from 'public/siteConfig';
import { setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    wixSeo.setStructuredData([
        {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact PrimeTurf',
            description: 'Contact PrimeTurf for a free artificial grass quote in Gauteng. Fast response, on-site consultation, and expert installation.',
            url: SITE.url + '/contact',
            mainEntity: {
                '@type': 'LocalBusiness',
                '@id': SITE.url + '/#organization',
                name: SITE.name,
                telephone: SITE.phone,
                email: SITE.email,
            },
        },
    ]);

    setupCTAs($w);
});
