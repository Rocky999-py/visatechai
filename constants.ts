
import { Country, PricingPlan, PlanType } from './types';

export const COUNTRIES: Country[] = [
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'Bangladesh', code: 'BD', flag: '🇧🇩' },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪' },
  { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦' },
  { name: 'Schengen Area', code: 'EU', flag: '🇪🇺' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  { name: 'China', code: 'CN', flag: '🇨🇳' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    type: PlanType.BASIC,
    minPrice: 1450,
    maxPrice: 2100,
    description: 'Essential automation for single embassy systems.',
    features: [
      'Single Country Targeting',
      'Anti-Bot Bypass (Standard)',
      'Basic Email Alerts',
      '1 Month Technical Support',
      'AI-Powered Proxy Rotation'
    ]
  },
  {
    type: PlanType.STANDARD,
    minPrice: 2200,
    maxPrice: 5000,
    description: 'Robust solutions for scaling appointment agencies.',
    features: [
      'Multi-Embassy Support',
      'Advanced OCR Solvers',
      'SMS & WhatsApp Notifications',
      'Priority Speed Optimization',
      '3 Months Premium Support',
      'Custom Dashboard Integration'
    ]
  },
  {
    type: PlanType.EXPRESS,
    minPrice: 5100,
    maxPrice: 17000,
    description: 'The ultimate automation engine for global operators.',
    features: [
      'Enterprise Global Routing',
      'Custom ML Behavioral Training',
      'High-Speed Edge Execution',
      'Ethical Hacker Consultation',
      'Dedicated 24/7 Account Manager',
      'Unlimited Support License',
      'Full API Access'
    ]
  }
];

export const WHATSAPP_NUMBER = '+8801300172795';
