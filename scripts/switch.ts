import { switch2, switch3 } from "./utils";

const version = process.argv[2];
version == "2" ? switch2() : switch3();
