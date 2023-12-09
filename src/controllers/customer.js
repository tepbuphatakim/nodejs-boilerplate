import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
} from '../services/customer.js';

export async function getAll(req, res, next) {
  try {
    const { page, limit } = req.query;
    const customers = await getAllCustomers({ page, limit });
    res.json(customers);
  } catch (error) {
    next(error);
  }
}

export async function getById(req, res, next) {
  try {
    const customer = await getCustomerById(req.params.id);
    res.json(customer);
  } catch (error) {
    next(error);
  }
}

export async function create(req, res, next) {
  try {
    await createCustomer(req.body);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}

export async function updateById(req, res, next) {
  try {
    await updateCustomerById(req.params.id, req.body);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}

export async function deleteById(req, res, next) {
  try {
    await deleteCustomerById(req.params.id);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}
