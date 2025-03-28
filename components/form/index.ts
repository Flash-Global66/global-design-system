import {
  withInstall,
  withNoopInstall,
  SFCWithInstall,
} from "element-plus/es/utils/index.mjs";
import From from "./src/Form.vue";
import FormItem from "./src/form-item.vue";

export const GForm: SFCWithInstall<typeof From> & {
  FormItem: typeof FormItem;
} = withInstall(From, {
  FormItem,
});
export default GForm;
export const GFormItem: SFCWithInstall<typeof FormItem> =
  withNoopInstall(FormItem);

export * from "./src/form";
export * from "./src/form-item";
export * from "./src/types";
export * from "./src/constants";
export * from "./src/hooks";

export type FormInstance = InstanceType<typeof From>;
export type FormItemInstance = InstanceType<typeof FormItem>;
