import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

declare var googleyolo: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Game: GameService) {
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "425516493203-pkhu17llakolpgni1qbrvfkuutugeukn.apps.googleusercontent.com"
        }
      ]
    }).then((credentials: any) => {
      _Game.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
      console.log(credentials);
    });
  }

  ngOnInit() {
  }

  login(name: string, password: string) {
    this._Game.login(name, password);
  }

}
