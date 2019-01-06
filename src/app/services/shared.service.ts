import { EventEmitter, Injectable, Output } from '@angular/core';
import { GetCardsService } from './get-cards.service';
import { ListCardsComponent } from '../components/list-cards/list-cards.component';

@Injectable()
export class ShareService {
    onClick: EventEmitter<any> = new EventEmitter();

    private levelAll = 'allLevels-0';
    private levelJun = 'junior-1';
    private levelMiddle = 'mid-2';
    private levelSenior = 'senior-3';

    private themeAll = 'allCategories-0';
    private themeDataBase = 'dataBase-1';
    private themeWeb = 'webProgramming-2';
    private themeProgrammingLang = 'programmingLang-3';
    private themeMobDev = 'mobileDev-4';

    constructor(private getCardsService: GetCardsService) { }

    array = [];
    public shareItems(level: string, theme: string) {
        console.log(level, theme);
        if (level === this.levelJun && theme === this.themeDataBase) {
            this.getCardsService.getBaseJun();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelMiddle && theme === this.themeDataBase) {
            this.getCardsService.getBaseMiddle();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelSenior && theme === this.themeDataBase) {
            this.getCardsService.getBaseSenior();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelJun && theme === this.themeWeb) {
            this.getCardsService.getWebJun();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelMiddle && theme === this.themeWeb) {
            this.getCardsService.getWebMiddle();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelSenior && theme === this.themeWeb) {
            this.getCardsService.getWebSenior();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelJun && theme === this.themeProgrammingLang) {
            this.getCardsService.getProgrammerLangJun();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelMiddle && theme === this.themeProgrammingLang) {
            this.getCardsService.getProgrammerLangMiddle();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelSenior && theme === this.themeProgrammingLang) {
            this.getCardsService.getProgrammerLangSenior();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelJun && theme === this.themeMobDev) {
            this.getCardsService.getMobileDevJun();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelMiddle && theme === this.themeMobDev) {
            this.getCardsService.getMobileDevMiddle();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelSenior && theme === this.themeMobDev) {
            this.getCardsService.getMobileDevSenior();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelAll && theme === this.themeAll) {
            this.getCardsService.getAllCards();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelJun) {
            this.getCardsService.getAllJun();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelMiddle) {
            this.getCardsService.getAllMiddle();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (level === this.levelSenior) {
            this.getCardsService.getAllSenior();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (theme === this.themeDataBase) {
            this.getCardsService.getAllBase();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (theme === this.themeWeb) {
            this.getCardsService.getAllWeb();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (theme === this.themeProgrammingLang) {
            this.getCardsService.getAllProgrammingLang();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        } else if (theme === this.themeMobDev) {
            this.getCardsService.getAllMobileDev();
            this.array = this.getCardsService.cards;
            console.log(level, theme);
        }
    }
}
