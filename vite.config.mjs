import browserslist from 'browserslist';
import { browserslistToTargets, Features } from 'lightningcss';

export default {
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
      include: Features.LightDark | Features.Colors,   // Including `light-dark()` and `colors()` functions
    }
  },
  build: {
    cssMinify: 'lightningcss',
  }
};
