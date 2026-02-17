import { Hono } from "hono";
import { renderer } from "./renderer";
import { getPrimeNumbers } from "./utils";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<h1>Hello!</h1>);
});

app.get("/echo/:text", (c) => {
  const text = c.req.param("text");

  return c.render(<h1>{text}!!</h1>);
});

app.get("/num", (c) => {
  const numbers = getPrimeNumbers(10);

  return c.render(
    <div>
      <h1>10この素数</h1>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>,
  );
});

app.get("/api/health", (c) => {
  const numbers = getPrimeNumbers(10);

  return c.json({
    health: "ok",
  });
});

export default app;
