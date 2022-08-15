const { PaymentMethod } = require("../models");

class PaymentMethodController {
  static async getAll(req, res) {
    try {
      const paymentmethods = await PaymentMethod.findAll({ raw: true });

      if (paymentmethods.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Payment Method Not Found",
        });
      }

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: paymentmethods,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = PaymentMethodController;
