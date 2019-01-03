import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  cards = [''];
  constructor() { }

  ngOnInit() {
  }

  setItem() {
    this.cards.push(JSON.parse(localStorage.getItem('JavaJun')));
    this.cards.push(JSON.parse(localStorage.getItem('JavaMiddle')));
    this.cards.push(JSON.parse(localStorage.getItem('JavaSenior')));
    this.cards.push(JSON.parse(localStorage.getItem('CSharpJun')));
    this.cards.push(JSON.parse(localStorage.getItem('CSharpMiddle')));
    this.cards.push(JSON.parse(localStorage.getItem('CSharpSenior')));
    this.cards.push(JSON.parse(localStorage.getItem('JavaScriptJun')));
    this.cards.push(JSON.parse(localStorage.getItem('JavaScriptMiddle')));
    this.cards.push(JSON.parse(localStorage.getItem('JavaScriptSenior')));
    this.cards.push(JSON.parse(localStorage.getItem('CPlusJun')));
    this.cards.push(JSON.parse(localStorage.getItem('CPlusMiddle')));
    this.cards.push(JSON.parse(localStorage.getItem('CPlusSenior')));
    console.log(this.cards);
  }
}
