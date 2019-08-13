import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { UserProvider } from '../../providers/user/user';
import { AppStorageService } from '../../services/app-storage-service';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  public currentUser: any;

  public titleButton: string = 'Enviar mensaje';
  public title: string;
  public body: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private commonProvider: CommonProvider, private userProvider: UserProvider,
    private store: AppStorageService, public toastCtrl: ToastController) {
      this.store.get('user_uuid').then((result) => {
        this.userProvider.getUserResource(result).subscribe(
          event => {
            if(event.body){
              this.currentUser = event.body.data.user;
            }
          }
        );
      })
  }

  send(title, body) {
    let user_sender_id = (this.currentUser.id).toString();
    let unit_uuid = this.currentUser.unit.uuid;
    this.commonProvider.postContactResource(title, body, unit_uuid, user_sender_id).subscribe(
      event => {
        if(event.body) {
          this.title = '';
          this.body = '';
          let toast = this.toastCtrl.create({
            message: 'Mensaje enviado correctamente',
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
