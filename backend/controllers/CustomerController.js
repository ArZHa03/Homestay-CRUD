import Customer from "../models/CustomerModel.js";

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveCustomer = async (req, res) => {
  const customer = new Customer(req.body);
  try {
    const insertedcustomer = await customer.save();
    res.status(201).json(insertedcustomer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const updatecustomer = await Customer.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatecustomer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const deletecustomer = await Customer.deleteOne({ _id: req.params.id });
    res.status(200).json(deletecustomer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
