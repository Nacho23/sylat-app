import { Component, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AppStorageService } from '../../services/app-storage-service';
import { QuestionProvider } from '../../providers/question/question';

/**
 * Generated class for the QuestionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question-details',
  templateUrl: 'question-details.html',
})
export class QuestionDetailsPage {
  public currentQuestion: any;
  public optionsQuestion: Array<any> = [];
  public answeredCheckboxQuestion: Array<any> = [];
  public questionType: any = '';

  //public options: Options = {};
  public options = {};
  public scaleValue: number;

  public request: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: AppStorageService, private questionProvider: QuestionProvider,
    public toastCtrl: ToastController) {
      this.currentQuestion = this.navParams.get('question');
      this.questionType = this.navParams.get('questionType');
      this.setOptions();
  }

  setOptions() {
    if (this.currentQuestion && (this.currentQuestion.type == 'multiple_choice' || this.currentQuestion.type == "checkbox")) {
      this.optionsQuestion = this.currentQuestion.options;
    } else if (this.currentQuestion.type == 'scale') {
      let stepsArray = [];
      let objAux = {min: '', max: '', min_text: '', max_text: ''};
      for (let i = 0; i < this.currentQuestion.options.length; i++) {
        if (this.currentQuestion.options[i].property == 'min') {
          objAux.min = this.currentQuestion.options[i].value
        }
        if (this.currentQuestion.options[i].property == 'max') {
          objAux.max = this.currentQuestion.options[i].value
        }
        if (this.currentQuestion.options[i].property == 'min_text') {
          objAux.min_text = this.currentQuestion.options[i].value
        }
        if (this.currentQuestion.options[i].property == 'max_text') {
          objAux.max_text = this.currentQuestion.options[i].value
        }
      }
      stepsArray.push({ value: objAux['min'], legend: objAux['min_text'] });
      for (let i = parseInt(objAux['min']) + 1; i < parseInt(objAux['max']); i++) {
        let objAux2 = {}
        objAux2 = {value: i};
        stepsArray.push(objAux2);
      }
      stepsArray.push({ value: objAux['max'], legend: objAux['max_text'] });
      this.scaleValue = parseInt(objAux['min']);
      //this.options = {showTicksValues:true, stepsArray};
    }
  }

  saveRequest(request) {
    console.log(this.store);
    this.store.get('user_id').then(user_id => {
      console.log('USER', user_id);
      this.questionProvider.postAnswerCollection(user_id, {
        type: this.currentQuestion.type,
        answer: request,
        question_id: this.currentQuestion.id
      }).subscribe(
        event => {
          if (event.body) {
            this.request = '';
            let toast = this.toastCtrl.create({
              message: 'Respuesta guardada correctamente',
              duration: 3000,
              position: 'bottom',
              cssClass: 'toast-success',
            });
            toast.present();
            this.navCtrl.pop();
          }
        }
      )
    })
  }

  saveRequestCheckbox() {
    console.log('ARREGLO', this.answeredCheckboxQuestion);
    console.log('question', this.currentQuestion);
  }

  selectOption(option) {
    console.log('opt', option);
    if (option.isChecked) {
      this.answeredCheckboxQuestion.push(option.value);
    } else if (!option.isChecked) {
      let position = this.answeredCheckboxQuestion.indexOf(option.value);
      if (position !== -1) {
        this.answeredCheckboxQuestion.splice(position, 1);
      }
    }
  }

}
