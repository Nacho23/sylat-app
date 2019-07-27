import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AppStorageService } from '../../services/app-storage-service';
import { QuestionProvider } from '../../providers/question/question';
import { QuestionDetailsPage } from '../question-details/question-details';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  public questionList: any = [];
  public answerList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: AppStorageService, private questionProvider: QuestionProvider,
    public toastCtrl: ToastController) {
    this.fillQuestion();
    this.fillAnswer();
  }

  fillQuestion() {
    this.store.get('unit_id').then((unit_id) => {
      this.questionProvider.getQuestionCollection(unit_id).subscribe(
        event => {
            if (event.body) {
                this.questionList = event.body.data.questions;
            }
        }
    );}
  );}

  fillAnswer() {
    this.store.get('user_id').then((user_id) => {
      this.questionProvider.getAnswerCollection({user_id: user_id}).subscribe(
        event => {
            if (event.body) {
                this.answerList = event.body.data.answer;
            }
        }
    );}
  );}

  setType(type) {
    if (type == 'brief') {
      return 'Pregunta corta';
    } else if (type == 'paragraph') {
      return 'Párrafo';
    } else if (type == 'multiple_choice') {
      return 'Selección múltiple';
    } else if (type == 'checkbox') {
      return 'Casilla de verificación';
    } else if (type == 'scale') {
      return 'Escala';
    } else {
      return 'Otra';
    }
  }

  answerQuestion(question_id) {
    for (let i = 0; i < this.answerList.length; i++) {
      if (question_id == this.answerList[i].id) {
        let toast = this.toastCtrl.create({
          message: 'Ya existe respuesta para esta pregunta',
          duration: 3000,
          position: 'bottom',
          cssClass: 'toast-danger',
        });
        toast.present();
        return false;
      }
    }
    this.questionProvider.getAnswerResource(question_id).subscribe(
      event => {
        if (event.body) {
          this.navCtrl.push(QuestionDetailsPage, {question: event.body.data.question});
        }
      }
    )
  }

  questionAnswered(question_id) {
    for (let i = 0; i < this.answerList.length; i++) {
      if (question_id == this.answerList[i].id) {
        return true;
      }
    }
    return false;
  }

}
