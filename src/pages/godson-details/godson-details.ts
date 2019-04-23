import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentUser = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('asd', this.currentUser);
  }

}
