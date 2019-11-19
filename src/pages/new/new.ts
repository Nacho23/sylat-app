import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import { AppStorageService } from "../../services/app-storage-service";
import { NewProvider } from "../../providers/new/new";

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  public newList: any = [];

  constructor(public nav: NavController, private store: AppStorageService,
    private newProvider: NewProvider) {
      this.fillNew();
  }

  fillNew() {
    this.store.get('unit_id').then((unit_id) => {
      this.newProvider.getNewCollection(unit_id).subscribe(
        event => {
            if (event.body) {
              console.log('EVE', event.body);
                this.newList = event.body.data.news;
            }
        }
    );}
  );}
}
