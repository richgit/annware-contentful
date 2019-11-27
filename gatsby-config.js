require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
// management token - CFPAT-BEIlhSd1qrn1_i1ZEpRNRXPjqLKm_7B2gd3JagioDjY
const contentfulConfig = {
  spaceId: 'eqfxyu5uhc4y',
  accessToken: '71QUoCgw4BM4UIXQJDTI-vz-WX2zWkMDjnfDigAac4A',
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    }
  ],
}
