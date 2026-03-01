import type { LucideIcon } from 'lucide-react';
import { Zap, Users, Building } from 'lucide-react';

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Starter',
    price: 'Custom',
    description: 'Perfect for small businesses and startups',
    icon: Zap,
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Standard support',
      '1GB storage',
      'API access'
    ]
  },
  {
    title: 'Professional',
    price: 'Custom',
    description: 'Ideal for growing businesses',
    icon: Users,
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'API access',
      'Custom integrations'
    ]
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    icon: Building,
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Unlimited storage',
      'API access',
      'Custom integrations',
      'SLA guarantee'
    ]
  }
];