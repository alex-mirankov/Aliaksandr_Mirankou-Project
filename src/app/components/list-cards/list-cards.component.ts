import { Component, OnInit } from '@angular/core';
import { GetCardsService } from '../../services/get-cards.service';
import { ShareService } from '../../services/shared.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css'],
})
export class ListCardsComponent implements OnInit {

  constructor(private share: ShareService, private array: GetCardsService) {
    this.share.onClick.subscribe(items => this.items = items);
  }

  items = this.array.cards;
  ngOnInit() {

  }
}
