import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/navSelector";
import {ListQuestionPage} from "../listQuestions/list-question";
import { UserProvider } from "../../providers/user/user";
import { AppStorageService } from "../../services/app-storage-service";
import { QuestionPage } from "../question/question";
import { ProfilePage } from "../profile/profile";
import { ContactPage } from "../contact/contact";
import { GodsonListPage } from "../godson-list/godson-list";

@Component({
  selector: 'page-trips',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  // list of trips
  public items: any;

  constructor(public nav: NavController, public tripService: TripService,
    private userProvider: UserProvider, private store: AppStorageService) {

  }

  ngOnInit(): void {
    this.store.get('rol').then((result) => {
      if(result == 'godson') {
        this.items = this.tripService.getNavGodson();
      } else if (result == 'godfather') {
        this.items = this.tripService.getNavGodfather();
      }
    });
  }

  // view trip detail
  viewDetail(id) {
    if (id == 1) {
      this.nav.push(QuestionPage);
    } else if (id == 2) {
      this.nav.push(ListQuestionPage, {id: id});
    } else if (id == 3) {
      this.nav.push(ProfilePage);
    } else if (id == 4) {
      this.nav.push(ContactPage);
    } else if (id == 5) {
      this.nav.push(GodsonListPage);
    } else if (id == 6) {
      this.nav.push(ListQuestionPage, {id: id});
    }
  }
}
