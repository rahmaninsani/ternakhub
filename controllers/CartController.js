const { Cart, CartItem, Product } = require("../models");
const { organizeCart } = require("../helpers/cart");

class CartController {
  static async getAll(req, res) {
    try {
      const cart = await Cart.findOne({
        raw: true,
        where: { user_id: req.user.id },
      });

      const cartItems = await CartItem.findAll({
        raw: true,
        include: [
          {
            model: Product,
            as: "product",
            attributes: ["name", "price", "weight", "unit"],
          },
        ],
        attributes: { exclude: ["cart_id"] },
        where: { cart_id: cart.id },
      });

      if (cart.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Cart Not Found",
        });
      }

      if (cartItems.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Cart Item Not Found",
        });
      }

      const result = organizeCart(cart, cartItems);

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: result,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async add(req, res) {
    try {
      const cart = await Cart.findOne({
        raw: true,
        where: { user_id: req.user.id },
      });

      if (!cart) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Cart Not Found",
        });
      }

      const { productId } = req.body;
      const product = await Product.findOne({
        raw: true,
        where: { id: productId },
      });

      if (!product) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Product Not Found",
        });
      }

      const cartItem = await CartItem.findOne({
        raw: true,
        where: {
          cart_id: cart.id,
          product_id: productId,
        },
      });

      if (cartItem) {
        await CartItem.update(
          {
            cart_id: cart.id,
            product_id: productId || cartItem.product_id,
            quantity: cartItem.quantity + 1,
          },
          {
            where: {
              cart_id: cart.id,
              product_id: productId,
            },
          }
        );

        const updatedCartItem = await CartItem.findOne({
          raw: true,
          where: {
            cart_id: cart.id,
            product_id: productId,
          },
        });

        return res.status(200).json({
          code: res.statusCode,
          status: "OK",
          data: updatedCartItem,
        });
      }

      const newCartItem = await CartItem.create({
        cart_id: cart.id,
        product_id: productId,
        quantity: 1,
      });

      res.status(201).json({
        code: res.statusCode,
        status: "Created",
        data: newCartItem,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async update(req, res) {
    try {
      const cart = await Cart.findOne({
        raw: true,
        where: { user_id: req.user.id },
      });

      if (!cart) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Cart Not Found",
        });
      }

      const { productId } = req.params;
      const product = await Product.findOne({
        raw: true,
        where: { id: productId },
      });

      if (!product) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Product Not Found",
        });
      }

      const cartItem = await CartItem.findOne({
        raw: true,
        where: {
          cart_id: cart.id,
          product_id: productId,
        },
      });

      if (!cartItem) {
        const newCartItem = await CartItem.create({
          cart_id: cart.id,
          product_id: productId,
          quantity: 1,
        });

        return res.status(200).json({
          code: res.statusCode,
          status: "Created",
          data: newCartItem,
        });
      }

      await CartItem.update(
        {
          cart_id: cart.id,
          product_id: productId || cartItem.product_id,
          quantity: req.body.quantity || cartItem.quantity,
        },
        {
          where: {
            cart_id: cart.id,
            product_id: productId,
          },
        }
      );

      const updatedCartItem = await CartItem.findOne({
        raw: true,
        where: {
          cart_id: cart.id,
          product_id: productId,
        },
      });

      return res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: updatedCartItem,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async delete(req, res) {
    try {
      const cart = await Cart.findOne({
        raw: true,
        where: { user_id: req.user.id },
      });

      if (!cart) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Cart Not Found",
        });
      }

      const { productId } = req.params;
      const cartItem = await CartItem.findOne({
        raw: true,
        where: {
          cart_id: cart.id,
          product_id: productId,
        },
      });

      if (!cartItem) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Cart Item Not Found",
        });
      }

      await CartItem.destroy({
        where: {
          cart_id: cart.id,
          product_id: productId,
        },
      });

      return res.status(200).json({
        code: res.statusCode,
        status: "OK",
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = CartController;
