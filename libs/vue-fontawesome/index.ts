import { App } from 'vue';
// Icon library imports
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconPack, library } from '@fortawesome/fontawesome-svg-core';

import * as SolidPro from './src/solid-pro';
import * as SolidFree from './src/solid-free';
import * as RegularPro from './src/regular-pro';
import * as DuotonePro from './src/duotone-pro';
import * as LightPro from './src/light-pro';

export const vueFontawesome = (app: App<Element>): App<Element> => {
  // Icon registration
  library.add(
    SolidPro as IconPack,
    SolidFree as IconPack,
    RegularPro as IconPack,
    DuotonePro as IconPack,
    LightPro as IconPack
  );
  return app.component('FaIcon', FontAwesomeIcon);
};
