import { Card } from "react-bootstrap";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Card style={{ maxWidth: "22rem" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb4">
          <span className="fs-4">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
