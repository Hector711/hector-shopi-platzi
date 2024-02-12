import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card/Card";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      // .then(data => console.log(data))
      .catch((error) => console.error("Error fetching data:", error)); // Manejo de errores
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
      <section className="flex justify-center flex-wrap gap-5 p-20">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
        <Card />
      </section>
    </Layout>
  );
}

export default Home;
