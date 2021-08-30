import { context, logging, storage, PersistentDeque } from "near-sdk-as";
/**
 * showYouKnow is a
 * - "view" function (ie. does not alter state)
 * - that takes no parameters
 * - and returns nothing
 *
 * - it has the side effect of appending to the log
 */
export function showYouKnow(): void {
  logging.log("showYouKnow() was called");
}



