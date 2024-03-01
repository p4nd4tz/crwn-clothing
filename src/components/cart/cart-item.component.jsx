import { memo } from "react";

const CartItem = memo(({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="flex gap-3 align-middle mb-3">
      <img className="w-24 h-24" src={imageUrl}></img>
      <div>
        <h2 className="text-lg">{name}</h2>
        <span className="text-lg">{`${quantity} x $${price}`}</span>
      </div>
    </div>
  );
});

export default CartItem;
