const { ShippingMethod } = require("../models");

class ShippingMethodController {
  static async getAll(req, res) {
    try {
      const shippingmethods = await ShippingMethod.findAll({ raw: true });

      if (shippingmethods.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Shipping Method Not Found",
        });
      }

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: shippingmethods,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = ShippingMethodController;
