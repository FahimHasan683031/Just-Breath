import QueryBuilder from '../../builder/QueryBuilder'
import { Quote } from './quote.model'
import { IQuote } from './quote.interface'
import { Service } from '../service/service.model'
import ApiError from '../../../errors/ApiError'
import { StatusCodes } from 'http-status-codes'
import { emailTemplate } from '../../../shared/emailTemplate'
import { Query } from 'mongoose'
import { emailHelper } from '../../../helpers/emailHelper'
import config from '../../../config'

// create quote
const createQuote = async (payload: Partial<IQuote>) => {
  // check if service type exists
  const service = await Service.findById(payload.serviceType)

  if (!service) {
    console.log(service, 'service not found')
    throw new ApiError(StatusCodes.NOT_FOUND, 'Service type not found')
  }

  const quote = await Quote.create(payload)
  return quote
}

// get quotes
const getQuotes = async (query: Record<string, unknown>) => {
  const quoteQueryBuilder = new QueryBuilder(Quote.find().populate('serviceType'), query)
    .search([ 'fullName', 'email','phone','serviceType.title'])
    .filter()
    .sort()
    .paginate()

  const quotes = await quoteQueryBuilder.modelQuery
  const paginationInfo = await quoteQueryBuilder.getPaginationInfo()

  return {
    data: quotes,
    meta: paginationInfo,
  }
}

// get quote by id
export const getQuoteById = async (id: string) => {
  const quote = await Quote.findById(id).populate('serviceType')
  if (!quote) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Quote not found')
  }
  return quote
}

// delete quote
const deleteQuote = async (id: string) => {
  const quote = await Quote.findByIdAndDelete(id)
  if (!quote) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Quote not found')
  }
  return quote
}

// update quote
const updateQuote = async (id: string, payload: Partial<IQuote>) => {
  const isExistQuote = await Quote.findById(id)
  if (!isExistQuote) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Quote not found')
  }
  if (payload.cleaner && isExistQuote.status !== 'cleanerAssigned') {
    payload.status = 'cleanerAssigned'
  }
  const res = await Quote.findByIdAndUpdate(id, payload, { new: true })
  return res
}

// get quote statistics
const getQuoteStats = async () => {
  const stats = await Quote.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
      },
    },
  ])

  const total = await Quote.countDocuments()

  return {
    total,
    byStatus: stats,
  }
}

// send payment link
const sendPaymentLink = async (id: string) => {
  const quote = await Quote.findById(id).populate('serviceType')
  if (!quote) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Quote not found')
  }

  const paymentLinkEmailTemplate = emailTemplate.sendPaymentLinkEmail({
    data: quote,
    paymentUrl: `${config.payment_page_link}?quoteId=${id}`,
  })
  await emailHelper.sendEmail(paymentLinkEmailTemplate)
  if (quote.status === 'pending') {
    await Quote.findByIdAndUpdate(id, { status: 'paymentMailSended' })
  }
  return {
    message: 'Payment link sent successfully',
  }
}

export const QuoteService = {
  createQuote,
  getQuotes,
  sendPaymentLink,
  getQuoteById,
  deleteQuote,
  updateQuote,
  getQuoteStats,
}
