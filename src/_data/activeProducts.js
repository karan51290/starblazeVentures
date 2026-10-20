import { readFileSync } from "node:fs";

// Products with "enabled": false in products.json are hidden everywhere on the site.
export default () =>
  JSON.parse(readFileSync(new URL("./products.json", import.meta.url), "utf-8")).filter(
    (item) => item.enabled !== false
  );
