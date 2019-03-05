import { configure } from "@storybook/react";

const req = require.context(
  "../packages",
  true,
  /((?!node_modules).)*\/stories\/[^\/]+\.js$/
);
function loadStories() {
  req.keys().forEach(path => {
    const story = req(path).default;
    story(storybook);
  });
}
configure(loadStories, module);
