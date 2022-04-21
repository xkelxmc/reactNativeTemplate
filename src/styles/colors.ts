export const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  PRIMARY_LIGHT: '#757ce8',
  PRIMARY_MAIN: '#3f50b5',
  PRIMARY_DARK: '#002884',
  SECONDARY_LIGHT: '#ff7961',
  SECONDARY_MAIN: '#f44336',
  SECONDARY_DARK: '#ba000d',
  ERROR_LIGHT: '#ef5350',
  ERROR_MAIN: '#d32f2f',
  ERROR_DARK: '#c62828',
  WARNING_LIGHT: '#ed6c02',
  WARNING_MAIN: '#ff9800',
  WARNING_DARK: '#e65100',
  INFO_LIGHT: '#03a9f4',
  INFO_MAIN: '#0288d1',
  INFO_DARK: '#01579b',
  SUCCESS_LIGHT: '#4caf50',
  SUCCESS_MAIN: '#2e7d32',
  SUCCESS_DARK: '#1b5e20',
  get PRIMARY() {
    return this.PRIMARY_MAIN;
  },
  get SECONDARY() {
    return this.SECONDARY_MAIN;
  },
  get ERROR() {
    return this.ERROR_MAIN;
  },
  get WARNING() {
    return this.WARNING_MAIN;
  },
  get INFO() {
    return this.INFO_MAIN;
  },
  get SUCCESS() {
    return this.SUCCESS_MAIN;
  },
};
