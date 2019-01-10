import { Component, OnInit } from '@angular/core';
import { GetNavLessonsService } from '../../services/get-nav-lessons';
import { PathFieldsService } from '../../services/path-fields.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-side-item',
  templateUrl: './lesson-side-item.component.html',
  styleUrls: ['./lesson-side-item.component.css']
})
export class LessonSideItemComponent implements OnInit {

  constructor(private array: GetNavLessonsService, private paths: PathFieldsService, private activeRouts: ActivatedRoute) {
    this.sub = activeRouts.params.subscribe(params => this.id = params['id']);
  }
  private items: string[] = this.array.lessonNavigation;
  private path: string = window.location.pathname;
  private valueFalse = false;
  private sub: Subscription;
  private id: string;
  private toggle = false;

  loadLessonNavigation(path) {
    switch (path) {
      case this.paths.javaJun:
        this.array.getJavaNav();
        console.log(this.items);
        break;
      case this.paths.сSharpJun:
        this.array.getCSharpNav();
        console.log(this.items);
        break;
      case this.paths.javaScriptJun:
        this.array.getJavaScriptNav();
        console.log(this.items);
        break;
      case this.paths.cPlusJun:
        this.array.getCPlusNav();
        console.log(this.items);
        break;
      case this.paths.sQLJun:
        this.array.getSQLNav();
        console.log(this.items);
        break;
      case this.paths.hTMLCSSJun:
        this.array.getHTMLCSSNav();
        console.log(this.items);
        break;
      case this.paths.pythonJun:
        this.array.getPythonNav();
        console.log(this.items);
        break;
      case this.paths.androidJun:
        this.array.getAndroidNav();
        console.log(this.items);
        break;
      case this.paths.iOSJun:
        this.array.getIOSNav();
        console.log(this.items);
        break;
      case this.paths.javaMiddle:
        this.array.getJavaNav();
        console.log(this.items);
        break;
      case this.paths.сSharpMiddle:
        this.array.getCSharpNav();
        console.log(this.items);
        break;
      case this.paths.javaScriptMiddle:
        this.array.getJavaScriptNav();
        console.log(this.items);
        break;
      case this.paths.cPlusMiddle:
        this.array.getCPlusNav();
        console.log(this.items);
        break;
      case this.paths.sQLMiddle:
        this.array.getSQLNav();
        console.log(this.items);
        break;
      case this.paths.hTMLCSSMiddle:
        this.array.getHTMLCSSNav();
        console.log(this.items);
        break;
      case this.paths.pythonMiddle:
        this.array.getPythonNav();
        console.log(this.items);
        break;
      case this.paths.androidMiddle:
        this.array.getAndroidNav();
        console.log(this.items);
        break;
      case this.paths.iOSMiddle:
        this.array.getIOSNav();
        console.log(this.items);
        break;
      case this.paths.javaSenior:
        this.array.getJavaNav();
        console.log(this.items);
        break;
      case this.paths.сSharpSenior:
        this.array.getCSharpNav();
        console.log(this.items);
        break;
      case this.paths.javaScriptSenior:
        this.array.getJavaScriptNav();
        console.log(this.items);
        break;
      case this.paths.cPlusSenior:
        this.array.getCPlusNav();
        console.log(this.items);
        break;
      case this.paths.sQLSenior:
        this.array.getSQLNav();
        console.log(this.items);
        break;
      case this.paths.hTMLCSSSenior:
        this.array.getHTMLCSSNav();
        console.log(this.items);
        break;
      case this.paths.pythonSenior:
        this.array.getPythonNav();
        console.log(this.items);
        break;
      case this.paths.androidSenior:
        this.array.getAndroidNav();
        console.log(this.items);
        break;
      case this.paths.iOSSenior:
        this.array.getIOSNav();
        console.log(this.items);
        break;
    }
  }

  color(id) {
    console.log(id);
    this.toggle = !this.toggle;
  }

  ngOnInit() {
    this.loadLessonNavigation(this.path);
  }
}
