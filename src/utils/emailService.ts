interface PricingInquiry {
  planName: string;
  price: string;
  features: string;
  email: string;
}

export const sendPricingInquiryEmail = async (data: PricingInquiry): Promise<{ success: boolean }> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  return { success: true };
};