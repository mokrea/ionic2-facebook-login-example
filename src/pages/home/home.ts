import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isLogged: boolean;
  AppID: number = 123456789;
  authResponse: any;
  picture: string;

  constructor(public navCtrl: NavController, private fb: Facebook) {
    this.isLogged=false;
  }

  login() {
    console.log("--Login--");
     this.fb.browserInit(this.AppID, "v2.9");
     //more permissions? check https://developers.facebook.com/docs/facebook-login/permissions
     let permissions = ["public_profile"];

  	 this.fb.login(permissions).then((response) => {
  	   //let userId = response.authResponse.userID;
       //let params = new Array<string>();
      //  this.fb.api("/me?fields=name,gender", params)
      //     .then(function(profile) {
      //       // your code here
      //     })
          alert('Logged in Successfully!');

          alert(JSON.stringify(response.authResponse));
  	      this.authResponse = response.authResponse;
  	      this.isLogged = true;
       }, (error) => {
         alert(error);
  	     console.log(error);
       });
  }

  logout() {
   this.fb.logout().then((response) =>{
     alert(JSON.stringify(response));
     this.isLogged = false;
   }, (error) => {
     alert(error);
   })
 }

}
