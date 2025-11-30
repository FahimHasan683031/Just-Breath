import QueryBuilder from "../../builder/QueryBuilder";
import { Service } from "./service.model";
import { IService } from "./service.interface";

// create service
const createService = async (payload: Partial<IService>) => {
  const service = await Service.create(payload);
  return service;
};

// get services
const getServices = async (query: Record<string, unknown>) => {
  const serviceQueryBuilder = new QueryBuilder(Service.find(), query)
    .filter()
    .sort()
    .paginate();
  
  const services = await serviceQueryBuilder.modelQuery;
  const paginationInfo = await serviceQueryBuilder.getPaginationInfo();

  return {
    data: services,
    meta: paginationInfo,
  };
};

// get service by id
const getServiceById = async (id: string) => {
  const service = await Service.findById(id);
  return service;
};

// delete service
const deleteService = async (id: string) => {
  const service = await Service.findByIdAndDelete(id);
  return service;
};

// update service
const updateService = async (id: string, payload: Partial<IService>) => {
  const service = await Service.findByIdAndUpdate(id, payload, { new: true });
  return service;
};

// get active services
const getActiveServices = async () => {
  const services = await Service.find({ status: true });
  return services;
};

export const ServiceService = {
  createService,
  getServices,
  getServiceById,
  deleteService,
  updateService,
  getActiveServices,
};