import { useState, useEffect } from "react";
import ProductService from "../../services/porduct.service";
import Card from "../../components/Card";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductService.getAllProducts();

        setProducts(response.data);
        setFilteredItems(response.data);
        setCategories([
          "all",
          ...new Set(response.data.map((item) => item.category)),
        ]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItems(filtered);
  };

  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 md:8">
        {/* Filter */}
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={() => filterItem(category)}
            >
              <p className="capitalize">{category}</p>
            </button>
          ))}
        </div>
        {/* Sort Options */}
        <div className="flex justify-end mb-4 rounded-sm">
          <div className="bg-black p-2">
            <select
              name="sortOption"
              id="sortOption"
              className="bg-black text-white px-2 rounded-sm"
              onChange={(e) => {
                const value = e.target.value;
                const sorted = [...filteredItems];

                if (value === "a-z") {
                  sorted.sort((a, b) => a.name.localeCompare(b.name));
                } else if (value === "z-a") {
                  sorted.sort((a, b) => b.name.localeCompare(a.name));
                } else if (value === "low-to-high") {
                  sorted.sort((a, b) => a.price - b.price);
                } else if (value === "high-to-low") {
                  sorted.sort((a, b) => b.price - a.price);
                } else {
                  setFilteredItems(products); // Default sorting
                  return;
                }

                setFilteredItems(sorted);
              }}
            >
              <option value="default">Default</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        {/* Product list */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => <Card item={item} key={index} />)
          ) : (
            <p className="text-center w-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
