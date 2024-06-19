import productsData from "../assets/data/products";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Products({ user }) {
  //We should probably use the data we have for this products value
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!user) return <Navigate to="/signup" />;

  return (
    <div>
      <section id="products">
        <h2>Products</h2>
        <input
          type="text"
          placeholder="Search product"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                {/* We should show the other properties of the products below */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Products;
