export interface Product {
  barcode_number: string;
  barcode_formats: string;
  mpn: string;
  model: string;
  asin: string;
  title: string;
  category: string;
  manufacturer: string;
  brand: string;
  contributors: Contributor[];
  age_group: string;
  ingredients: string;
  nutrition_facts: string;
  energy_efficiency_class: string;
  color: string;
  gender: string;
  material: string;
  pattern: string;
  format: string;
  multipack: string;
  size: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  release_date: string;
  description: string;
  features: string[];
  images: string[];
  last_update: string;
  stores: Store[];
  reviews: Review[];
}

export interface Contributor {
  role: string;
  name: string;
}

export interface Review {
  name: string
  rating: string
  title: string
  review: string
  date: Date
}

export interface Store {
  name: string;
  country: string;
  currency: string;
  currency_symbol: string;
  price: string;
  sale_price: string;
  tax: Tax[];
  link: string;
  item_group_id: string;
  availability: string;
  condition: string;
  shipping: Shipping[];
  last_update: string;
}

export interface Tax {
  country: string
  region: string
  rate: string
  tax_ship: string
}

export interface Shipping {
  country: string;
  region: string;
  service: string;
  price: string;
}

export interface ProductsFilteringParams {
  barcode?: string;
  mpn?: string;
  asin?: string;
  title?: string;
  manufacturer?: string;
  brand?: string;
  category?: string;
  page?: string;
}
