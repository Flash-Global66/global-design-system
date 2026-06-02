import { App } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconPack, library } from '@fortawesome/fontawesome-svg-core';

import * as SolidPro from '@flash-global66/g-icon-font/src/lib/fas-solid-pro';
import * as RegularPro from '@flash-global66/g-icon-font/src/lib/far-regular-pro';
import * as LightPro from '@flash-global66/g-icon-font/src/lib/fal-light-pro';
import * as DuotonePro from '@flash-global66/g-icon-font/src/lib/fad-duotone-pro';
import * as BrandsFree from '@flash-global66/g-icon-font/src/lib/fab-free';
import * as KitIcons from '@flash-global66/g-icon-font/src/lib/fa-kit';

export const vueFontawesome = (app: App<Element>): App<Element> => {
  library.add(
    SolidPro as IconPack,
    RegularPro as IconPack,
    LightPro as IconPack,
    DuotonePro as IconPack,
    BrandsFree as IconPack,
    KitIcons as IconPack,
  );
  return app.component('FaIcon', FontAwesomeIcon);
};
