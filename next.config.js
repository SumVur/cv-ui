const {i18n} = require("./next-i18next.config");
const path = require('path')


/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n,
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    experimental: {
        fontLoaders: [
            {loader: '@next/font/google', subsets: ['latin']},
        ],
    }
}

module.exports = nextConfig
