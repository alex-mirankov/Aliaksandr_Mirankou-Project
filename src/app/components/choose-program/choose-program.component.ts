import { Component } from '@angular/core';
import { GetCardsService } from '../../services/get-cards.service';
import { ShareService } from '../../services/shared.service';

@Component({
    selector: 'app-choose-program',
    templateUrl: 'choose-program.component.html',
    styleUrls: ['choose-program.component.css'],
})

export class ChooseProgramComponent {

    constructor(private getCardsService: GetCardsService, private share: ShareService) {
        this.share.onClick.subscribe(cards => this.getCards = cards);
    }
    private level = '';
    private theme = '';

    getCards() {
        this.share.shareItems(this.level, this.theme);
    }

    onChangeLevel(e: string) {
        this.level = e;
        console.log(this.level);
    }

    onChangeTheme(e: string) {
        this.theme = e;
        console.log(this.theme);
    }
}
