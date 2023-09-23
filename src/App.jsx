import { products } from "./products";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function App() {
  const myName = "Michael Peter";

  return (
    <main>
      <header>
        <h1>JSX and React Components Checkpoint</h1>
      </header>

      <div className="products">
        {products.map((product, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={product.imageUrl}
              width="100%"
              height={200}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle>{product.price}</Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <article>
        <h3>{myName}</h3>
        <h4>September 23, 2023</h4>
      </article>
    </main>
  );
}
