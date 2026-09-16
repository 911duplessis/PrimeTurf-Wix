import { SITE } from 'public/siteConfig';

export function bindContent($w, content) {
    const bindings = {
        '#heroTitle': content.heroTitle,
        '#heroSubtitle': content.heroSubtitle,
        '#heroDesc': content.heroDesc,
        '#introTitle': content.introTitle,
        '#introText': content.introText,
        '#servicesTitle': content.servicesTitle,
        '#whyTitle': content.whyTitle,
        '#areasTitle': content.areasTitle,
        '#areasText': content.areasText,
        '#faqTitle': content.faqTitle,
        '#ctaTitle': content.ctaTitle,
        '#ctaDesc': content.ctaDesc,
    };

    for (const [id, value] of Object.entries(bindings)) {
        if (!value) continue;
        try {
            const el = $w(id);
            if (el && el.text !== undefined) {
                el.text = value;
            }
        } catch (_) { /* element not yet in Editor */ }
    }
}

export function setupCTAs($w) {
    const ctaMap = {
        '#ctaWhatsapp': SITE.whatsapp,
        '#ctaCall': 'tel:' + SITE.phone,
        '#heroQuoteBtn': SITE.quoteUrl,
        '#ctaQuote': SITE.quoteUrl,
    };

    for (const [id, url] of Object.entries(ctaMap)) {
        try {
            const el = $w(id);
            if (el && el.link !== undefined) {
                el.link = url;
                el.target = url.startsWith('http') ? '_blank' : '_self';
            }
        } catch (_) { /* element not yet in Editor */ }
    }
}
