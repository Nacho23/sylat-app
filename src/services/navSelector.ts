import {Injectable} from "@angular/core";
import {NAVGODSON, NAVGODFATHER} from "./mock-nav";

@Injectable()
export class TripService {
  private nav_godson: any;
  private nav_godfather: any;

  constructor() {
    this.nav_godson = NAVGODSON;
    this.nav_godfather = NAVGODFATHER;
  }

  getNavGodson() {
    return this.nav_godson;
  }

  getNavGodfather() {
    return this.nav_godfather;
  }

  getItem(id) {
    for (var i = 0; i < this.nav_godson.length; i++) {
      if (this.nav_godson[i].id === parseInt(id)) {
        return this.nav_godson[i];
      }
    }
    return null;
  }
}
