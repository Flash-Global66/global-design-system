import Inline from "./src/inline.vue";
import {
  withInstall,
  withNoopInstall,
  SFCWithInstall,
} from "element-plus/es/utils/index.mjs";
export const GInline: SFCWithInstall<typeof Inline> & {
  Inline: typeof Inline;
} = withInstall(Inline, {
  Inline,
});
export default GInline;

export * from "./src/inline.type";

export type InlineInstance = InstanceType<typeof Inline>;
