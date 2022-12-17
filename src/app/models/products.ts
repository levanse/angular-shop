export interface IProducts {
  id: number;
  title: string;
  price: number;
  image?: string;
  configure: IProductsConfig;
}

export interface IProductsConfig {
  chip: string;
  ssd: string;
  memory: string;
  display: string;
}
