import { readFileSync } from "node:fs";

// Services with "enabled": false in services.json are hidden everywhere on the site.
export default () =>
  JSON.parse(readFileSync(new URL("./services.json", import.meta.url), "utf-8")).filter(
    (item) => item.enabled !== false
  );
