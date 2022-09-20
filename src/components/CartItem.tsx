import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack } from "react-bootstrap";
type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const item = storeItems.find((item) => item.id === id);
  const removeFromCart = useShoppingCart();
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </Stack>
  );
}
