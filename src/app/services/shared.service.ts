import { EventEmitter, Injectable, Output } from '@angular/core';
import { GetCardsService } from './get-cards.service';
import { ListCardsComponent } from '../components/list-cards/list-cards.component';
import { NameCoursesSearchService } from './name-courses-search.service';

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

    constructor(private getCardsService: GetCardsService, private searchService: NameCoursesSearchService) { }

    array = [];
    public shareItems(level: string, theme: string) {
        if (level === this.levelJun && theme === this.themeDataBase) {
            this.getCardsService.getBaseJun();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelMiddle && theme === this.themeDataBase) {
            this.getCardsService.getBaseMiddle();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelSenior && theme === this.themeDataBase) {
            this.getCardsService.getBaseSenior();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelJun && theme === this.themeWeb) {
            this.getCardsService.getWebJun();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelMiddle && theme === this.themeWeb) {
            this.getCardsService.getWebMiddle();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelSenior && theme === this.themeWeb) {
            this.getCardsService.getWebSenior();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelJun && theme === this.themeProgrammingLang) {
            this.getCardsService.getProgrammerLangJun();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelMiddle && theme === this.themeProgrammingLang) {
            this.getCardsService.getProgrammerLangMiddle();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelSenior && theme === this.themeProgrammingLang) {
            this.getCardsService.getProgrammerLangSenior();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelJun && theme === this.themeMobDev) {
            this.getCardsService.getMobileDevJun();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelMiddle && theme === this.themeMobDev) {
            this.getCardsService.getMobileDevMiddle();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelSenior && theme === this.themeMobDev) {
            this.getCardsService.getMobileDevSenior();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelAll && theme === this.themeAll) {
            this.getCardsService.getAllCards();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelJun) {
            this.getCardsService.getAllJun();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelMiddle) {
            this.getCardsService.getAllMiddle();
            this.array = this.getCardsService.cards;
        } else if (level === this.levelSenior) {
            this.getCardsService.getAllSenior();
            this.array = this.getCardsService.cards;
        } else if (theme === this.themeDataBase) {
            this.getCardsService.getAllBase();
            this.array = this.getCardsService.cards;
        } else if (theme === this.themeWeb) {
            this.getCardsService.getAllWeb();
            this.array = this.getCardsService.cards;
        } else if (theme === this.themeProgrammingLang) {
            this.getCardsService.getAllProgrammingLang();
            this.array = this.getCardsService.cards;
        } else if (theme === this.themeMobDev) {
            this.getCardsService.getAllMobileDev();
            this.array = this.getCardsService.cards;
        }
        return this.array;
    }
    public getSearchCards(search: string) {
        switch (search) {
            case this.searchService.nameCourseJavaJun:
                this.getCardsService.getJunJavaCard();
                break;
            case this.searchService.nameCourseJavaMiddle:
                this.getCardsService.getMiddleJavaCard();
                break;
            case this.searchService.nameCourseJavaSenior:
                this.getCardsService.getSeniorJavaCard();
                break;
            case this.searchService.nameCourseCSharpJun:
                this.getCardsService.getJunCSharpCard();
                break;
            case this.searchService.nameCourseCSharpMiddle:
                this.getCardsService.getMiddleCSharpCard();
                break;
            case this.searchService.nameCourseCSharpSenior:
                this.getCardsService.getSeniorCSharpCard();
                break;
            case this.searchService.nameCourseJavaScriptJun:
                this.getCardsService.getJunJavaScriptCard();
                break;
            case this.searchService.nameCourseJavaScriptMiddle:
                this.getCardsService.getMiddleJavaScriptCard();
                break;
            case this.searchService.nameCourseJavaScriptSenior:
                this.getCardsService.getSeniorJavaScriptCard();
                break;
            case this.searchService.nameCourseCPlusJun:
                this.getCardsService.getJunCPlusCard();
                break;
            case this.searchService.nameCourseCPlusMiddle:
                this.getCardsService.getMiddleCPlusCard();
                break;
            case this.searchService.nameCourseCPlusSenior:
                this.getCardsService.getSeniorCPlusCard();
                break;
            case this.searchService.nameCourseSQLJun:
                this.getCardsService.getJunSQLCard();
                break;
            case this.searchService.nameCourseSQLMiddle:
                this.getCardsService.getMiddleSQLCard();
                break;
            case this.searchService.nameCourseHTMLCSSSenior:
                this.getCardsService.getSeniorHTMLCSSCard();
                break;
            case this.searchService.nameCourseHTMLCSSJun:
                this.getCardsService.getJunHTMLCSSCard();
                break;
            case this.searchService.nameCourseHTMLCSSMiddle:
                this.getCardsService.getMiddleHTMLCSSCard();
                break;
            case this.searchService.nameCourseHTMLCSSSenior:
                this.getCardsService.getSeniorHTMLCSSCard();
                break;
            case this.searchService.nameCoursePythonJun:
                this.getCardsService.getJunPythonCard();
                break;
            case this.searchService.nameCoursePythonMiddle:
                this.getCardsService.getMiddlePythonCard();
                break;
            case this.searchService.nameCoursePythonSenior:
                this.getCardsService.getSeniorPythonCard();
                break;
            case this.searchService.nameCourseAndroidJun:
                this.getCardsService.getJunAndroidCard();
                break;
            case this.searchService.nameCourseAndroidMiddle:
                this.getCardsService.getMiddleAndroidCard();
                break;
            case this.searchService.nameCourseAndroidSenior:
                this.getCardsService.getSeniorAndroidCard();
                break;
            case this.searchService.nameCourseIOSJun:
                this.getCardsService.getJunIOSCard();
                break;
            case this.searchService.nameCourseIOSMiddle:
                this.getCardsService.getMiddleIOSCard();
                break;
            case this.searchService.nameCourseIOSSenior:
                this.getCardsService.getSeniorIOSCard();
                break;
        }
        return this.array;
    }
}
