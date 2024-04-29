// ProductDetails.js
import { useParams } from "react-router-dom";
import { server } from "../redux/store";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL params

  // Example product data (replace this with actual data retrieval logic)
  const product = {
    id: id,
    name: "Example Product",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo: "example.jpg",
  };

  return (
    <div className="product-details">
      <img src={`${server}/${product.photo}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;

