import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { AppStorageService } from '../../services/app-storage-service';

/**
 * Generated class for the GodsonDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-godson-details',
  templateUrl: 'godson-details.html',
})
export class GodsonDetailsPage {
  public currentUser;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private postProvider: PostProvider, private store: AppStorageService) {
    this.currentUser = this.navParams.get('user');
  }

  ionViewDidLoad() {
    this.getHistories()
  }

  getHistories() {
    this.store.get('unit_id').then((unit_id) => {
      let query = {user_id: this.currentUser.id, rol_id: this.currentUser.rol_id};
      this.postProvider.getPostCollection(unit_id, query).subscribe(
        event => {
          if(event.body) {
            console.log('event', event.body);
          }
        }
      )
    })
  }

}
