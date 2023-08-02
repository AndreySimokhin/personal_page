
// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ru'],
    },
    localePath:'./public/locales',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
}
