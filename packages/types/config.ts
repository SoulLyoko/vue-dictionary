export interface Config {
  label?: string;
  value?: string;
  children?: string;
  res?: string;
  params?: any;
  request?: (params?: any) => Promise<unknown>;
}
