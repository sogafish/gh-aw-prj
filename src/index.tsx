import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<h1>Hello!</h1>);
});

app.get("/echo/:text", (c) => {
  const text = c.req.param("text");

  return c.render(<h1>{text}!!</h1>);
});

export default app;
