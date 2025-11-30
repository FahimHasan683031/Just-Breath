import { Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { QuoteService } from "../quote/quote.service";
import catchAsync from "../../../shared/catchAsync";

// create quote
export const createQuoteController = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const quote = await QuoteService.createQuote(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Quote created successfully',
    data: quote,
  });
});

// get quotes
export const getQuotesController = catchAsync(async (req: Request, res: Response) => {
  const quotes = await QuoteService.getQuotes(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Quotes retrieved successfully',
    data: quotes.data,
    meta: quotes.meta,
  });
});

// get quote by id
export const getQuoteByIdController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const quote = await QuoteService.getQuoteById(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Quote retrieved successfully',
    data: quote,
  });
});

// delete quote
export const deleteQuoteController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const quote = await QuoteService.deleteQuote(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Quote deleted successfully',
    data: quote,
  });
});

// update quote
export const updateQuoteController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const quote = await QuoteService.updateQuote(id, payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Quote updated successfully',
    data: quote,
  });
});

// get quote statistics
export const getQuoteStatsController = catchAsync(async (req: Request, res: Response) => {
  const stats = await QuoteService.getQuoteStats();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Quote statistics retrieved successfully',
    data: stats,
  });
});

// send payment link
export const sendPaymentLinkController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const quote = await QuoteService.sendPaymentLink(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Payment link sent successfully',
  });
});



export const QuoteController = {
  createQuoteController,
  getQuotesController,
  getQuoteByIdController,
  deleteQuoteController,
  updateQuoteController,
  getQuoteStatsController,
  sendPaymentLinkController,
}
