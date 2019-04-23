import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppStorageService } from '../../services/app-storage-service';
import { UserProvider } from '../../providers/user/user';
import { GodsonDetailsPage } from '../godson-details/godson-details';

@IonicPage()
@Component({
  selector: 'page-godson-list',
  templateUrl: 'godson-list.html',
})
export class GodsonListPage {
  public currentUser: any = [];
  public godsonList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: AppStorageService, private userProvider: UserProvider) {
        /*this.userProvider.getUserCollection({}).subscribe(
          event => {
            if(event.body) {
              let users = event.body.data.users;
              for(let i = 0; i < users.length; i++){
                if(users[i].user_relationship) {
                  console.log(users[i])
                  for(let j = 0; j < users[i].user_relationship[j].length; j++) {
                    if(users[i].user_relationship[j].user_godfather_id == 3) {
                      console.log('asda', users[i].user_relationship[i]);
                      this.godsonList.push(users[i]);
                    }
                  }
                }
              }
              console.log('CAGA', this.godsonList);
            }
          }
        )*/

      this.store.get('user_id').then((user_id) => {
        this.store.get('unit_id').then((unit_id) => {
          this.userProvider.getUserCollection({godfather_id: user_id, unit_id: unit_id}).subscribe(
            event => {
              if(event.body) {
                this.godsonList = event.body.data.users;
              }
            }
          )
        })
      })
  }

  openUserDetals(user_uuid) {
    this.userProvider.getUserResource(user_uuid).subscribe(
      event => {
        if(event.body) {
          this.navCtrl.push(GodsonDetailsPage, {user: event.body.data.user});
        }
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GodsonListPage');
  }

}
