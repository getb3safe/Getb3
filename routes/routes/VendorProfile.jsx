import React from "react";

const VendorProfile = ({ vendor }) => {
  if (!vendor) return null;

  return (
    <div>
      <h2>{vendor.name}</h2>
      <p><strong>Category:</strong> {vendor.category}</p>
      <p><strong>City:</strong> {vendor.city}</p>
      <p><strong>Verified:</strong> ✅</p>
    </div>
  );
};

export default VendorProfile;
