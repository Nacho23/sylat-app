import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AppStorageService } from '../../services/app-storage-service';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public currentUser: any;
  public first_name: string;
  public last_name: string;
  public email: string;
  public phone_mobile: string;
  public rut: string;
  public rut_dv: string;
  public godfatherUuid: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: AppStorageService, private userProvider: UserProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.store.get('user_uuid').then(result => {
      this.userProvider.getUserResource(result).subscribe(
        event => {
          if(event.body){
            this.currentUser = event.body.data.user;
            this.first_name = event.body.data.user.first_name;
            this.last_name = event.body.data.user.last_name;
            this.email = event.body.data.user.email;
            this.phone_mobile = event.body.data.user.phone_mobile;
            this.rut = event.body.data.user.rut;
            this.rut_dv = event.body.data.user.rut_dv;
          }
        }
      )
    })
  }

  save(first_name, last_name, phone_mobile, address_town) {
    let user = {
      first_name: first_name,
      last_name: last_name,
      phone_mobile: phone_mobile,
      address_town: address_town,
      rut: this.currentUser.rut,
      rut_dv: this.currentUser.rut_dv,
      email: this.currentUser.email,
    }
    this.userProvider.putUserCollection(this.currentUser.uuid, user).subscribe(
      event => {
        if(event.body) {
          let toast = this.toastCtrl.create({
            message: 'Información actualizada correctamente',
            duration: 3000,
            position: 'bottom',
            cssClass: 'toast-success',
          });
          toast.present();
        }
      }
    )
  }
}
