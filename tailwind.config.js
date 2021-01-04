/* https://tailwindcss.com */
const colors = require('tailwindcss/colors');

/*
  A function that returns a Tailwind plugin that will add
  CSS based on Tailwind config keys.
*/
const addUtilitiesFromConfig = (name, classPrefix = `${name}-`) => ({
  addUtilities,
  config,
  e,
}) => {
  const settings = config(`theme.${name}`, {});

  Object.keys(settings).forEach((setting) => {
    const className = e(`${classPrefix}${setting}`);

    addUtilities(
      {
        [`.${className}`]: settings[setting],
      },
      config(`variants.${name}`, {})
    );
  });
};

/*
  Translates a px to rem with a default base of 16.
*/
const pxToRem = (px, base = 16) => `${px / base}rem`;

module.exports = {
  purge: {
    // enabled: true,
    content: [
      './public/**/*.html',
      './source/**/*.html',
      './source/**/*.jsx',
      './source/**/*.tsx',
    ],
  },

  theme: {
    branding: {
      white: '#ffffff',
      'cool-grey-1': '#fbfcfc',
      'cool-grey-2': '#f2f4f5',
      'cool-grey-3': '#eef1f3',
      'cool-grey-4': '#ebeef0',
      'cool-grey-5': '#e6eaed',
      'cool-grey-6': '#dde2e6',
      'cool-grey-7': '#c7cdd2',
      'cool-grey-8': '#b1b9bf',
      'cool-grey-9': '#9ba4aa',
      'cool-grey-10': '#868f96',
      'cool-grey-11': '#646a70',
      'cool-grey-12': '#44484c',
      'cool-grey-13': '#2a2c2d',
      'cool-grey-14': '#191919',
      black: '#000000',
    },

    spacing: {
      0: 0,
      1: pxToRem(4),
      2: pxToRem(8),
      3: pxToRem(16),
      4: pxToRem(24),
      5: pxToRem(32),
      6: pxToRem(40),
      7: pxToRem(48),
      8: pxToRem(56),
      9: pxToRem(64),
    },

    // These are spread into width, height, min-width, min-height, min-height, max-height
    // Try to avoid adding numbers here and use an inline style if it's a one off number...
    commonLengths: {
      0: '0',
      50: '50px',
      75: '75px',
      100: '100px',
      480: '480px',
      768: '768px',
      960: '960px',
      1024: '1024px',
      1280: '1280px',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      full: '100%',
    },

    screens: {
      sm: '480px',
      md: '728px',
      lg: '1024px',
    },

    fontSize: {
      '14px': '14px',
      '16px': '16px',
      'scale-n2': pxToRem(12),
      'scale-n1': pxToRem(14),
      'scale-0': pxToRem(16),
      'scale-1': pxToRem(18),
      'scale-2': pxToRem(20),
      'scale-3': pxToRem(22),
      'scale-4': pxToRem(24),
      'scale-5': pxToRem(26),
      'scale-6': pxToRem(28),
      'scale-7': pxToRem(32),
      'scale-8': pxToRem(36),
      'scale-9': pxToRem(48),
      'scale-10': pxToRem(72),
    },

    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },

    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 1.75,
    },

    textColor: (theme) => theme('colors'),

    backgroundColor: (theme) => theme('colors'),

    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },

    borderWidth: {
      default: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
    },

    borderColor: (theme) => ({
      default: theme('colors.grey-7'),
      ...theme('colors'),
    }),

    width: (theme) => ({
      auto: 'auto',
      screen: '100vw',
      ...theme('commonLengths'),
    }),

    height: (theme) => ({
      auto: 'auto',
      screen: '100vh',
      ...theme('commonLengths'),
    }),

    minWidth: (theme) => ({
      auto: 'auto',
      screen: '100vw',
      ...theme('commonLengths'),
    }),

    minHeight: (theme) => ({
      0: '0',
      screen: '100vh',
      ...theme('commonLengths'),
    }),

    maxWidth: (theme) => ({
      none: 'none',
      screen: '100vw',
      ...theme('commonLengths'),
    }),

    maxHeight: (theme) => ({
      auto: 'auto',
      screen: '100vh',
      ...theme('commonLengths'),
    }),

    padding: (theme) => ({
      100: '100px',
      ...theme('spacing'),
    }),

    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),

    zIndex: {
      auto: 'auto',
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
    },

    opacity: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      100: '1',
    },

    fill: {
      current: 'currentColor',
      none: 'none',
    },

    stroke: {
      current: 'currentColor',
    },

    a11y: {
      'visually-hidden': {
        border: '0',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        width: '1px',
        'white-space': 'nowrap',
      },
    },

    /**
     * ---------------
     *
     *  Here is where to put custom stuff that we want to SUPPLEMENT our plugins with
     *    ie. we are _extending_ the base theme.
     *
     *   base === xfinity ds token theme
     *
     * ---------------
     */
    extend: {
      borderRadius: {
        full: '9999px',
      },

      colors: (theme) => ({
        transparent: 'transparent',
        current: 'currentColor',

        black: theme('branding.black'),
        white: theme('branding.white'),

        dark: theme('branding.smolder'),
        medium: theme('branding.cool-grey-2'),
        light: theme('branding.white'),

        positive: theme('branding.sea-foam'),
        neutral: theme('branding.pumpkin'),
        negative: theme('branding.haute'),

        primary: {
          default: theme('branding.blue-sky'),
          hover: theme('branding.blue-genes'),
          select: theme('branding.blue-genes'),
        },

        secondary: {
          default: theme('branding.cool-grey-1'),
          hover: theme('branding.cool-grey-10'),
        },

        grey: {
          0: theme('branding.white'),
          1: theme('branding.cool-grey-1'),
          2: theme('branding.cool-grey-2'),
          3: theme('branding.cool-grey-3'),
          4: theme('branding.cool-grey-4'),
          5: theme('branding.cool-grey-5'),
          6: theme('branding.cool-grey-6'),
          7: theme('branding.cool-grey-7'),
          8: theme('branding.cool-grey-8'),
          9: theme('branding.cool-grey-9'),
          10: theme('branding.cool-grey-10'),
          11: theme('branding.cool-grey-11'),
          12: theme('branding.cool-grey-12'),
          13: theme('branding.cool-grey-13'),
          14: theme('branding.cool-grey-14'),
          15: theme('branding.black'),
        },
      }),

      fontSize: {
        '14px': '14px',
        '16px': '16px',
        'scale-n2': pxToRem(12),
        'scale-n1': pxToRem(14),
        'scale-0': pxToRem(16),
        'scale-1': pxToRem(18),
        'scale-2': pxToRem(20),
        'scale-3': pxToRem(22),
        'scale-4': pxToRem(24),
        'scale-5': pxToRem(26),
        'scale-6': pxToRem(28),
        'scale-7': pxToRem(32),
        'scale-8': pxToRem(36),
        'scale-9': pxToRem(48),
        'scale-10': pxToRem(72),
      },

      lineHeight: {
        none: 1, //TODO put this in the tokens repo
      },
    },

    listStyleType: {
      circle: 'circle',
      disc: 'disc',
      none: 'none',
    },
  },

  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive', 'focus'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['hover', 'focus', 'group-hover'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: [],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    lists: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover'],
    order: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: [],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['group-hover'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],

    // Custom
    a11y: [],
  },

  plugins: [
    addUtilitiesFromConfig('a11y', ''),
    addUtilitiesFromConfig('typography', ''),
  ],

  corePlugins: {
    container: false,
    float: false,
  },
};
