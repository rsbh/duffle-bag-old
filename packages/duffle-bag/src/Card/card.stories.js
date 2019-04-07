import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./card";

storiesOf("Card", module)
  .add("with text", () => <Card>Hello Card</Card>)
  .add("Multiple card", () => (
    <React.Fragment>
      <Card>Hello Card</Card>
      <Card>Hello Card</Card>
      <Card>Hello Card</Card>
    </React.Fragment>
  ))
  .add("With Custom Height and width", () => (
    <Card height={"20vh"} width={"500px"}>
      Card
    </Card>
  ));
