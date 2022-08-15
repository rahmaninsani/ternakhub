const organizeUserAddresses = (addresses) => {
  return addresses.map((address) => {
    return {
      id: address.id,
      label: address.label,
      ownerName: address.owner_name,
      phone: address.phone,
      address: address.address,
      createdAt: address.createdAt,
      updatedAt: address.updatedAt,
    };
  });
};

module.exports = {
  organizeUserAddresses,
};
