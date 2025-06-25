import AttachFile from "./src/attach-file.vue";
import {
  withInstall,
  SFCWithInstall,
} from "element-plus/es/utils/index.mjs";

export const GAttachFile: SFCWithInstall<typeof AttachFile> & {
  AttachFile: typeof AttachFile;
} = withInstall(AttachFile, {
  AttachFile,
});

export default GAttachFile;

export * from "./src/attach-file.type";
export * from "./src/attach-file";
export * from "./src/constants";

export { useAttachFile } from "./src/useAttachFile";

export type AttachFileInstance = InstanceType<typeof AttachFile>;
