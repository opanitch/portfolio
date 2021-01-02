/*
  When Purge searches for classnames in file it uses this regex. Since Tailwind has
  some unusual characters in the class names like `:` and `/` so we need to tell
  Purge to search for those.
  https://www.purgecss.com/extractors
*/
class TailwindExtractor {
  static extract(content) {
    //Using the suggested Tailwind regex as found here:
    //https://tailwindcss.com/docs/controlling-file-size/#writing-purgeable-html
    return content.match(/[\w-/:]+(?<!:)/g) || [];
  }
}

module.exports = () => {
  return [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
      stage: 0,
    }),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './source/**/!(*.d,*.spec,*.demo).{js,ts,tsx,jsx}',
        './public/index.html',
      ],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'js', '.jsx', 'ts', '.tsx'],
        },
      ],
    }),
  ];
};
