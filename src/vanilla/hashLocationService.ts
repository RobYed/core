/**
 * @internalapi
 * @module vanilla
 */
/** */
import { trimHashVal } from "./utils";
import { UIRouter } from "../router";
import { BaseLocationServices } from "./baseLocationService";

/** A `LocationServices` that uses the browser hash "#" to get/set the current location */
export class HashLocationService extends BaseLocationServices {
  constructor(router: UIRouter) {
    super(router, false);
    window.addEventListener('hashchange', this._listener, false);
  }

  _get() {
    return trimHashVal(this._location.hash);
  }
  _set(state: any, title: string, url: string, replace: boolean) {
    this._location.hash = url;
  }

  dispose (router: UIRouter) {
    super.dispose(router);
    window.removeEventListener('hashchange', this._listener);
  }
}

