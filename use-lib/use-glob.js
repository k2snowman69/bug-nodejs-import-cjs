import { hasMagic } from "glob";

const d = hasMagic("a/{b/c,x/y}");
console.log(d);
