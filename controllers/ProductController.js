const { Op } = require("sequelize");
const moment = require("moment");

const { Product, Review, User } = require("../models");
const { organizeProducts, organizeProductDetail, organizeProductReviews } = require("../helpers/product");

class ProductController {
  static async getAll(req, res, next) {
    if (Object.keys(req.query).length > 0) {
      return next();
    }

    try {
      const products = await Product.findAll({ raw: true });

      if (products.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Product Not Found",
        });
      }

      const result = organizeProducts(products);

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: result,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async getFlashSale(req, res) {
    try {
      const products = await Product.findAll({
        raw: true,
        where: {
          discount_percent: {
            [Op.gt]: 0,
          },
        },
      });

      if (products.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Product Not Found",
        });
      }

      const result = organizeProducts(products);

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: result,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async getLatest(req, res) {
    try {
      const products = await Product.findAll({
        raw: true,
        where: {
          createdAt: {
            [Op.gte]: moment().subtract(7, "days").format(),
          },
        },
        order: [
          ["createdAt", "DESC"],
          ["id", "DESC"],
        ],
        limit: 5,
      });

      if (products.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Product Not Found",
        });
      }

      const result = organizeProducts(products);

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: result,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async getBestSeller(req, res) {
    try {
      const products = await Product.findAll({
        raw: true,
        order: [["amount_sold", "DESC"]],
        limit: 2,
      });

      if (products.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Product Not Found",
        });
      }

      const result = organizeProducts(products);

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: result,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async searchByName(req, res) {
    try {
      const { keyword } = req.query;

      const products = await Product.findAll({
        raw: true,
        where: {
          name: {
            [Op.substring]: keyword,
          },
        },
      });

      if (products.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Product Not Found",
        });
      }

      const result = organizeProducts(products);

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: result,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async getDetail(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        raw: true,
        where: { id: id },
      });

      if (product === null) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Product Not Found",
        });
      }

      const result = organizeProductDetail(product);

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: result,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async getReviews(req, res) {
    try {
      const { id } = req.params;
      const reviews = await Review.findAll({
        raw: true,
        include: [
          {
            model: User,
            as: "user",
            attributes: ["name"],
          },
        ],
        where: { product_id: id },
      });

      if (reviews.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Product Reviews Not Found",
        });
      }

      const result = organizeProductReviews(reviews);

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: result,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = ProductController;
