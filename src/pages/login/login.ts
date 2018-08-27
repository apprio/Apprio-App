import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { TemplatePage } from '../../pages/template/template';
import { ApiProvider } from '../../provider/api';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:string;
  password:string;

  constructor
  (public nav:NavController,
   public alertCtrl:AlertController,
   public loadingCtrl:LoadingController,
   public api:ApiProvider
  ) {
  }

  login(username, password) {
    if (username == '' || password == '')
    {
      this.alertLoginError();
      return;
    }

    let loading = this.loadingCtrl.create({
      content: 'Loading ...'
    });

    loading.present();

    // Server authentication.
    this.api.login(username, password).subscribe(token => {
      loading.dismiss();

      // If the user credentials are valid, the current user is redirected to the template page.
      if (token && token != 'undefined' && token != 'No user found') {
        localStorage.setItem('id_token', token.token);
        localStorage.setItem('username', username);
        this.goToTemplatePage();

      } else {
        this.alertLoginError();
      }
    });
  }

  goToTemplatePage() {
    this.nav.push(TemplatePage);
  }

  alertLoginError() {
    let alert = this.alertCtrl.create({
      title: 'LogIn Failed!',
      subTitle: 'Check your login/password.',
      buttons: ['OK']
    });
    alert.present();
  }
}
