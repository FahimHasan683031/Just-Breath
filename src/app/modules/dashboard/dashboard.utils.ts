import { Payment } from "../payment/payment.model";
import { Contact } from "../public/public.model";
import { Quote } from "../quote/quote.model";


const allMonths = [
    { month: 1, monthName: 'Jan' },
    { month: 2, monthName: 'Feb' },
    { month: 3, monthName: 'Mar' },
    { month: 4, monthName: 'Apr' },
    { month: 5, monthName: 'May' },
    { month: 6, monthName: 'Jun' },
    { month: 7, monthName: 'Jul' },
    { month: 8, monthName: 'Aug' },
    { month: 9, monthName: 'Sep' },
    { month: 10, monthName: 'Oct' },
    { month: 11, monthName: 'Nov' },
    { month: 12, monthName: 'Dec' }
  ];




// Revenue 
export const calculateMonthlyPaymentRevenue = async (targetYear: number) => {
  const monthlyRevenueAgg = await Payment.aggregate([
    {
      $match: {
        dateTime: {
          $gte: new Date(`${targetYear}-01-01T00:00:00.000Z`),
          $lt: new Date(`${targetYear + 1}-01-01T00:00:00.000Z`),
        }
      }
    },
    {
      $group: {
        _id: { month: { $month: "$dateTime" } },
        revenue: { $sum: "$amount" },
        count: { $sum: 1 }
      }
    },
    { $sort: { "_id.month": 1 } }
  ]);


  const monthlyRevenueMap = new Map();
  monthlyRevenueAgg.forEach(item => {
    monthlyRevenueMap.set(item._id.month, item);
  });

  return allMonths.map(monthInfo => {
    const existingData = monthlyRevenueMap.get(monthInfo.month);
    return {
      month: monthInfo.month,
      monthName: monthInfo.monthName,
      revenue: existingData ? existingData.revenue : 0,
      count: existingData ? existingData.count : 0
    };
  });
};

//  Quote 
export const calculateMonthlyQuotes = async (targetYear: number) => {
  const monthlyQuotesAgg = await Quote.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(`${targetYear}-01-01T00:00:00.000Z`),
          $lt: new Date(`${targetYear + 1}-01-01T00:00:00.000Z`),
        }
      }
    },
    {
      $group: {
        _id: { month: { $month: "$createdAt" } },
        count: { $sum: 1 }
      }
    },
    { $sort: { "_id.month": 1 } }
  ]);


  const monthlyQuotesMap = new Map();
  monthlyQuotesAgg.forEach(item => {
    monthlyQuotesMap.set(item._id.month, item);
  });

  return allMonths.map(monthInfo => {
    const existingData = monthlyQuotesMap.get(monthInfo.month);
    return {
      month: monthInfo.month,
      monthName: monthInfo.monthName,
      count: existingData ? existingData.count : 0
    };
  });
};


//  Contact
export const calculateMonthlyContacts = async (targetYear: number) => {
  const monthlyContactsAgg = await Contact.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(`${targetYear}-01-01T00:00:00.000Z`),
          $lt: new Date(`${targetYear + 1}-01-01T00:00:00.000Z`),
        }
      }
    },
    {
      $group: {
        _id: { month: { $month: "$createdAt" } },
        count: { $sum: 1 }
      }
    },
    { $sort: { "_id.month": 1 } }
  ]);

  const monthlyContactsMap = new Map();
  monthlyContactsAgg.forEach(item => {
    monthlyContactsMap.set(item._id.month, item);
  });

  return allMonths.map(monthInfo => {
    const existingData = monthlyContactsMap.get(monthInfo.month);
    return {
      month: monthInfo.month,
      monthName: monthInfo.monthName,
      count: existingData ? existingData.count : 0
    };
  });
};