import wixSeo from 'wix-seo';
import { buildServiceAreaSchemas } from 'public/schemas';
import { setupCTAs } from 'public/pageSetup';

$w.onReady(function () {
    const GAUTENG = [
        { name: 'Johannesburg', url: '/artificial-grass-johannesburg' },
        { name: 'Sandton', url: '/artificial-grass-sandton' },
        { name: 'Midrand', url: '/artificial-grass-midrand' },
        { name: 'Centurion', url: '/artificial-grass-centurion' },
        { name: 'Pretoria East', url: '/artificial-grass-pretoria-east' },
        { name: 'Boksburg', url: '/artificial-grass-boksburg' },
        { name: 'Edenvale', url: '/artificial-grass-edenvale' },
        { name: 'Hyde Park', url: '/artificial-grass-hyde-park' },
        { name: 'Silver Lakes', url: '/artificial-grass-silver-lakes' },
        { name: 'Mooikloof', url: '/artificial-grass-mooikloof' },
        { name: 'Waterkloof', url: '/artificial-grass-waterkloof' },
        { name: 'Faerie Glen', url: '/artificial-grass-faerie-glen' },
        { name: 'Garsfontein', url: '/artificial-grass-garsfontein' },
        { name: 'Moreleta Park', url: '/artificial-grass-moreleta-park' },
        { name: 'Lynnwood', url: '/artificial-grass-lynnwood' },
    ];

    const WESTERN_CAPE = [
        { name: 'Cape Town', url: '/artificial-grass-cape-town' },
        { name: 'Western Cape', url: '/artificial-grass-western-cape' },
    ];

    wixSeo.setStructuredData(buildServiceAreaSchemas());
    setupCTAs($w);
});
