import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  registration(nickName, password, passwordRepeat) {
    if (nickName !== '' && password === passwordRepeat) {
      alert('Успешеная регистрация:' + nickName + ',' + password);
    }
  }

  ngOnInit() {
  }

}
