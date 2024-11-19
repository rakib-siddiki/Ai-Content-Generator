import { Roboto_Serif } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'Smart AI Content Generator';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - AI-Powered Content Creation`;
export const SITE_DESCRIPTION_DEFAULT =
    'Transform your ideas into engaging content effortlessly with our AI-powered content generator.';

export const SITE_VERIFICATION_GOOGLE_DEFAULT = 'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Roboto_Serif({
    subsets: ['latin'],
    weight: ['300', '500', '600', '700', '800', '900'],
    variable: '--font-roboto-sarif',
    display: 'swap',
    preload: true,
    adjustFontFallback: true,
});
