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
      hosted: ['./src/fonts', './dist/fonts'],
      variants: {
        'TradeGothic': {},
        'TradeGothic-BoldCondTwenty': {},
        'Dignitas-Regular': {},
        'Dignitas-Bold': {},
        'Dignitas-Italic': {},
        'Dignitas-Bold-Italic': {}
      },
      foundries: 'hosted',
      formats: 'woff'
    })
  ]
}
