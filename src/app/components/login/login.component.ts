import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login(login, password) {
    if (login !== '' && password !== '') {
      alert('Вход выполнен:' + login + ',' + password);
    }
  }
  ngOnInit() {
  }

}
