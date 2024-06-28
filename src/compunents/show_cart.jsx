// redux
import { useSelector } from "react-redux";

export const ShowCart = ({}) => {
  const cart = useSelector((state) => state.cart.data);

  return (
    <div>
      {cart.map((value, i) => (
        <p key={i}>{value.data}</p>
      ))}
    </div>
  );
};
