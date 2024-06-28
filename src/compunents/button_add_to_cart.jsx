// redux
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/slice";

export const ButtonAddToCart = ({}) => {
  const dispacth = useDispatch();
  return (
    <button
      onClick={() => {
        dispacth(addToCart({ id: 0, data: "halo" }));
      }}
    >
      clic for add more in to cart
    </button>
  );
};
