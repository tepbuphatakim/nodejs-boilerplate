import Customer from '../models/Customer.js';
import { paginate } from '../utils/paginate.js';

export function getAllCustomers({ page, limit }) {
  return Customer.findAndCountAll({
    order: [['id_customer', 'DESC']],
    ...paginate({ page, limit }),
  });
}

export function getCustomerById(id_customer) {
  return Customer.findByPk(id_customer);
}

export function createCustomer(customer) {
  return Customer.create(customer);
}

export function updateCustomerById(id_customer, customer) {
  return Customer.update(customer, {
    where: {
      id_customer,
    },
  });
}

export async function deleteCustomerById(id_customer) {
  const customer = await Customer.findByPk(id_customer);
  if (!customer) throw new Error('Cannot find customer with specified id.');

  return customer.destroy();
}
