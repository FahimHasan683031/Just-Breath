import {
  calculateMonthlyPaymentRevenue,
  calculateMonthlyQuotes,
  calculateMonthlyContacts
} from './dashboard.utils';
import { Payment } from '../payment/payment.model';
import { Quote } from '../quote/quote.model';
import { Contact } from '../public/public.model';

export const getDashboardOverview = async (year?: string) => {
  try {
    const targetYear = year ? Number(year) : new Date().getFullYear();
    const [
      monthlyRevenueData,
      monthlyQuotesData,
      monthlyContactsData,
    ] = await Promise.all([
      calculateMonthlyPaymentRevenue(targetYear),
      calculateMonthlyQuotes(targetYear),
      calculateMonthlyContacts(targetYear),
    ]);

    
    //  TOTAL Quote Request
    const totalQuotes = await Quote.countDocuments();
    
    //  TOTAL Approved Quotes
    const totalApprovedQuotes = await Quote.countDocuments({
      status: { $in: ['paymentMailSended', 'paymentCompleted', 'cleanerAssigned'] }
    });
    
    // TOTAL Complete Service
    const totalCompletedServices = await Quote.countDocuments({
      status: 'cleanerAssigned'
    });
    
    // TOTAL Payment amount
    const totalPaymentResult = await Payment.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
          count: { $sum: 1 }
        }
      }
    ]);
    const totalPayment = totalPaymentResult[0]?.totalAmount || 0;
    const totalTransactions = totalPaymentResult[0]?.count || 0;
    
    // TOTAL Contacts
    const totalContacts = await Contact.countDocuments();
    
    return {
     monthlyRevenueData,
      monthlyQuotesData,
      monthlyContactsData,
      totalQuotes,
      totalApprovedQuotes,
      totalCompletedServices,
      totalPayment,
      totalTransactions,
      totalContacts
    };
  } catch (error) {
    console.error('Error in dashboard service:', error);
    throw new Error('Failed to fetch dashboard data');
  }
};

export const DshboardServices = {
  getDashboardOverview
}