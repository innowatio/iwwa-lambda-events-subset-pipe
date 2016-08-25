import dispatchEvent from "services/dispatcher";
import log from "./services/logger";

export default async function pipeline (event) {

    log.info(event.type, "event type");
    log.info(event, "event");
    // dispatch
    await dispatchEvent(event.type, event.data);

    return null;
}
