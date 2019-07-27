import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import { AppStorageService } from "../../services/app-storage-service";
import { QuestionProvider } from "../../providers/question/question";

@Component({
  selector: 'page-list-question',
  templateUrl: 'list-question.html'
})
export class ListQuestionPage {
  public questionList: any = [];

  constructor(public nav: NavController, private store: AppStorageService,
    private questionProvider: QuestionProvider) {
      this.fillQuestion();
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
}
