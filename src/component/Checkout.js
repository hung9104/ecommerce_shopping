import React, { useState, useEffect } from "react";

const Checkout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://656eb5346529ec1c62368337.mockapi.io/userInfo"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {data ? (
          <table className="table userInfo table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Fullname</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.fullname}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Checkout;
