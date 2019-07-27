import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/navSelector";
import {ListQuestionPage} from "../listQuestions/list-question";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;

  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    //this.trips = tripService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(ListQuestionPage, {id: id});
  }
}
