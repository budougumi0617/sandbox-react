import { configure } from "@storybook/react";

const req = require.context("../stories", true, /.stories.js$/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
