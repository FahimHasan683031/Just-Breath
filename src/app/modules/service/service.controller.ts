import { Request, Response } from "express";
import { ServiceService } from "./service.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";

// create service
export const createServiceController = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const service = await ServiceService.createService(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Service created successfully',
    data: service,
  });
});

// get services
export const getServicesController = catchAsync(async (req: Request, res: Response) => {
  const services = await ServiceService.getServices(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Services retrieved successfully',
    data: services.data,
    meta: services.meta,
  });
});

// get service by id
export const getServiceByIdController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const service = await ServiceService.getServiceById(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Service retrieved successfully',
    data: service,
  });
});

// delete service
export const deleteServiceController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const service = await ServiceService.deleteService(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Service deleted successfully',
  });
});

// update service
export const updateServiceController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const service = await ServiceService.updateService(id, payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Service updated successfully',
    data: service,
  });
});

// get active services
export const getActiveServicesController = catchAsync(async (req: Request, res: Response) => {
  const services = await ServiceService.getActiveServices();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Active services retrieved successfully',
    data: services,
  });
});