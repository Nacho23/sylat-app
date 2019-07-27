import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-details',
  templateUrl: 'question-details.html',
})
export class QuestionDetailsPage {
  public currentQuestion: any;
  public questionType: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.currentQuestion = this.navParams.get('question');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionDetailsPage');
  }

}
