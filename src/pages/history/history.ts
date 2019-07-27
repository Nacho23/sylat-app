import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { AppStorageService } from '../../services/app-storage-service';
import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  public categoryList: Array<any>;

  public currentUser: any; //usuario logeado en el sistema, quien enviará la historia
  public targetUser: any; //usuario sobre el cual se generará la historia
  public typeHistory: any; //Tipo de historia a generar, 1 si es urgente, 0 si es estandar

  public titleButton: string = 'Enviar mensaje';
  public title: string;
  public body: string;
  //public category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userProvider: UserProvider, private store: AppStorageService,
    private postProvider: PostProvider, public toastCtrl: ToastController) {
      this.targetUser = this.navParams.get('user');
      this.typeHistory = this.navParams.get('type');
      this.store.get('user_uuid').then((result) => {
        this.userProvider.getUserResource(result).subscribe(
          event => {
            if(event.body){
              this.currentUser = event.body.data.user;
              this.fillCategory();
            }
          }
        );
      });
  }

  fillCategory() {
    let unit_id = this.currentUser.unit.id;
    this.postProvider.getCategoryCollection({unit_id: unit_id}).subscribe(
        event => {
            if (event.body) {
                this.categoryList = event.body.data.categories;
            }
        }
    );
  }

  generate(title, category, body) {
    let user_sender_id = (this.currentUser.id).toString();
    let user_receiver_id = (this.targetUser.id).toString();
    let unit_uuid = this.currentUser.unit.uuid;
    let is_important = this.typeHistory;
    this.postProvider.postPostCollection(title, body, category, is_important, unit_uuid, user_sender_id, user_receiver_id).subscribe(
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
          this.navCtrl.pop();
        }
      }
    )
  }

}
