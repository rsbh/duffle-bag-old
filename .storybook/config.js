import { configure } from "@storybook/react";

const stories = require.context("../packages", true, /.stories.js$/);

function loadStories() {
  stories.keys().forEach(stories);
}
configure(loadStories, module);
