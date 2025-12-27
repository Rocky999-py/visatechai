
export interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export enum PlanType {
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  EXPRESS = 'EXPRESS'
}

export interface PricingPlan {
  type: PlanType;
  minPrice: number;
  maxPrice: number;
  features: string[];
  description: string;
}
