export type ValueCollapse = null | number | string | Array<string | number>;
export interface ChangeCollapse {
  itemOld: ValueCollapse,
  itemNew: ValueCollapse,
  itemCurrent: string | number,
  visible: boolean,
};