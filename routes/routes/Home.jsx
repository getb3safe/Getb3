import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get("/vendors")
      .then(res => setVendors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Verified Vendors</h1>
      <ul>
        {vendors.map(v => (
          <li key={v.id}>{v.name} — {v.category} ({v.city})</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
