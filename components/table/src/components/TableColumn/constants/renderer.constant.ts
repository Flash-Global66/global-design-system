// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const defaultClassNames = {
  selection: 'table-column--selection',
  expand: 'table__expand-column',
};

export const cellStarts = {
  default: {
    order: '',
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
};

export const getDefaultClassName = type => {
  return defaultClassNames[type] || '';
};
