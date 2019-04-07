import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./card";

storiesOf("Card", module).add("with text", () => <Card>Hello Card</Card>);
