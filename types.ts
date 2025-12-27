
export interface Country {
  name: string;
  code: string;
  flag: string;
}

export enum PlanType {
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  EXPRESS = 'EXPRESS',
  CUSTOM = 'CUSTOM'
}

export interface PricingPlan {
  type: PlanType;
  minPrice: number;
  maxPrice: number;
  features: string[];
  description: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  fromCountry: string;
  toCountry: string;
  message: string;
}
