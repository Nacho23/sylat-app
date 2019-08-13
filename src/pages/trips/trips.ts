import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
//import {ListQuestionPage} from "../listQuestions/list-question";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;

  constructor(public nav: NavController) {
    // set sample data
    //this.trips = tripService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push('ListQuestionPage', {id: id});
  }
}
