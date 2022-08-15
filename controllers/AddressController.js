const { Address } = require("../models");
const { organizeUserAddresses } = require("../helpers/address");

class AddressController {
  static async getAll(req, res) {
    try {
      const addresses = await Address.findAll({
        raw: true,
        where: { user_id: req.user.id },
      });

      if (addresses.length < 1) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Address Not Found",
        });
      }

      const result = organizeUserAddresses(addresses);

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
      const { label, owner_name: ownerName, phone, address } = req.body;

      const newAddress = await Address.create({
        user_id: req.user.id,
        label: label,
        owner_name: ownerName,
        phone: phone,
        address: address,
      });

      res.status(201).json({
        code: res.statusCode,
        status: "Created",
        data: newAddress,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const userAddress = await Address.findByPk(id, { raw: true });

      if (!userAddress) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Address Not Found",
        });
      }

      if (userAddress.user_id !== req.user.id) {
        return res.status(403).json({
          code: res.statusCode,
          status: "Different User ID",
        });
      }

      const { label, owner_name: ownerName, phone, address } = req.body;

      await Address.update(
        {
          user_id: req.user.id || userAddress.user_id,
          label: label || userAddress.label,
          owner_name: ownerName || userAddress.owner_name,
          phone: phone || userAddress.phone,
          address: address || userAddress.address,
        },
        {
          where: {
            id: id,
            user_id: req.user.id,
          },
        }
      );

      const updatedAddress = await Address.findByPk(id, { raw: true });

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: updatedAddress,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const userAddress = await Address.findByPk(id, { raw: true });

      if (!userAddress) {
        return res.status(404).json({
          code: res.statusCode,
          status: "Address Not Found",
        });
      }

      if (userAddress.user_id !== req.user.id) {
        return res.status(403).json({
          code: res.statusCode,
          status: "Different User ID",
        });
      }

      await Address.destroy({
        where: {
          id: id,
          user_id: req.user.id,
        },
      });

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = AddressController;
