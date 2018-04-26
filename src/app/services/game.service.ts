import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { User } from '../models/game';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable()
export class GameService {

  Me: User;

  constructor(private htttp: Http, private _Messages: MessagesService, private _Router: Router) { }

  login(name: string, password: string) {
    if(password === '123') {
      // Log the user in
      this.Me = { Name: name, MyQuotes: []};
      this._Router.navigate(['/game']);
    }
  }

}
