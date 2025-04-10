import { withInstall, SFCWithInstall } from "element-plus/es/utils/index.mjs";

import Scrollbar from "./src/scrollbar.vue";

export const GScrollbar: SFCWithInstall<typeof Scrollbar> =
  withInstall(Scrollbar);
export default GScrollbar;

export * from "./src/util";
export * from "./src/scrollbar";
export * from "./src/thumb";
export * from "./src/constants";
