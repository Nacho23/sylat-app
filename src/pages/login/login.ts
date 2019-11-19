import {Component, OnInit} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { AppStorageService } from "../../services/app-storage-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,
      private authProvider: AuthProvider, private formbuilder: FormBuilder, private store: AppStorageService) {
    this.menu.swipeEnable(false);
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
        email: [
            '',
            Validators.compose([Validators.required, Validators.email])
        ],
        password: [
            '',
            Validators.compose([Validators.required, Validators.minLength(4)])
        ]
    });
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    console.log(this.loginForm.value);
    //this.nav.setRoot(HomePage);
    this.authProvider.login(this.loginForm.value).subscribe(
      event => {
        if(event.body) {
          this.store.set('token', event.body.access_token);
          this.store.set('rol', event.body.user.rol);
          this.store.set('user_uuid', event.body.user.uuid);
          this.store.set('unit_id', event.body.user.unit_id);
          this.store.set('user_id', event.body.user.user_id);
          if(event.body.user.rol == 'godson' || event.body.user.rol == 'godfather') {
            this.nav.setRoot(HomePage);
          } else {
            let toast = this.toastCtrl.create({
              message: 'No tiene permisos para ingresar a la app',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'Cerrar',
              showCloseButton: true
            });
            toast.present();
          }
        }
      }
    )
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
