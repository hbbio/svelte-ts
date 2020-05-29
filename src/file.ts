import { initials } from "./initials.ts";
import Tabs from "./Tabs";
import Button from "./Button";

let items = [
  {
    label: "Main Tab",
    component: Button,
    props: { label: "First test" },
  },
  {
    label: "Second Tab",
    component: Button,
    props: { label: "Second test" },
  },
];

export let name: string;

const test = () => initials(name);
