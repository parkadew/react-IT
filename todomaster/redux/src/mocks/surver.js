import { handlers } from "./handlers";
import { setupWorker } from "msw/node"

export const server = setupWorker([...handlers]);
