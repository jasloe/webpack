module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: "last 2 versions",
      stage: 2,
      features: {
        "nesting-rules": true
      }
    }),
    require('autoprefixer'),
    require('cssnano'),
    require('lost'),
    require('postcss-font-magician')({
      aliases: {
        'seriph': 'Nunito'
      },
      variants: {
        'seriph': {
          '100': ['woff'],
          '900': ['woff']
        },
        'UniversLTStd-Obl': {}
      },
      foundries: 'google hosted',
      formats: 'woff2 woff'
    })
  ]
}
