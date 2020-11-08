module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('autoprefixer'),
    require('postcss-reporter'),
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [require('@fullhuman/postcss-purgecss')({
        content: ['./**/*.html', './**/*.css'],
        variables: true,
        fontFace: true,
        keyframes: true,
        // rejected: true,
        // safelist: [],
      }), require('cssnano')({
        preset: [require('cssnano-preset-advanced'), {
          discardComments: {removeAll: true},
          colormin: true,
          cssDeclarationSorter: true,
          rawCache: true,
          calc: true,
          convertValues: true,
          discardDuplicates: true,
          discardEmpty: true,
          discardOverridden: true,
          discardUnused: true,
          mergeIdents: true,
          mergeLonghand: true,
          minifyFontValues: true,
          minifyGradients: true,
          minifyParams: true,
          minifySelectors: true,
          normalizeCharset: true,
          normalizeDisplayValues: true,
          normalizePositions: true,
          normalizeRepeatStyle: true,
          normalizeString: true,
          normalizeTimingFunctions: true,
          normalizeUnicode: true,
          normalizeUrl: true,
          normalizeWhitespace: true,
          reduceInitial: true,
          reduceTransforms: true,
          svgo: true,
          uniqueSelectors: true,
          reduceIdents: true
        }]
      })]
    : []
  ]
};