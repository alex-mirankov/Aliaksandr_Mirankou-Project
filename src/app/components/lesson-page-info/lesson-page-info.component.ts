import { Component, OnInit } from '@angular/core';
import { GetLessonsService } from '../../services/get-lessons.service';
import { PathFieldsService } from '../../services/path-fields.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-page-info',
  templateUrl: './lesson-page-info.component.html',
  styleUrls: ['./lesson-page-info.component.css']
})
export class LessonPageInfoComponent implements OnInit {
  private sub: Subscription;
  private id: string;

  constructor(private array: GetLessonsService, private paths: PathFieldsService, private activeRouts: ActivatedRoute) {
    this.sub = activeRouts.params.subscribe(params => this.id = params['id']);
  }
  private lessons = this.array.lessons;
  private path = window.location.pathname;

  loadContentLesson() {
    switch (this.path) {
      case this.paths.javaJun:
        this.array.getLessonJavaJun();
        break;
      case this.paths.javaMiddle:
        this.array.getLessonJavaMiddle();
        break;
      case this.paths.javaSenior:
        this.array.getLessonJavaSenior();
        break;
      case this.paths.сSharpJun:
        this.array.getLessonCSharpJun();
        break;
      case this.paths.сSharpMiddle:
        this.array.getLessonCSharpMiddle();
        break;
      case this.paths.сSharpSenior:
        this.array.getLessonCSharpSenior();
        break;
      case this.paths.javaScriptJun:
        this.array.getLessonJavaScriptJun();
        break;
      case this.paths.javaScriptMiddle:
        this.array.getLessonJavaScriptMiddle();
        break;
      case this.paths.javaScriptSenior:
        this.array.getLessonJavaScriptSenior();
        break;
      case this.paths.cPlusJun:
        this.array.getLessonCPlusJun();
        break;
      case this.paths.cPlusMiddle:
        this.array.getLessonCPlusMiddle();
        break;
      case this.paths.cPlusSenior:
        this.array.getLessonCPlusSenior();
        break;
      case this.paths.sQLJun:
        this.array.getLessonSQLJun();
        break;
      case this.paths.sQLMiddle:
        this.array.getLessonSQLMiddle();
        break;
      case this.paths.sQLSenior:
        this.array.getLessonSQLSenior();
        break;
      case this.paths.hTMLCSSJun:
        this.array.getLessonHTMLCSSJun();
        break;
      case this.paths.hTMLCSSMiddle:
        this.array.getLessonHTMLCSSMiddle();
        break;
      case this.paths.hTMLCSSSenior:
        this.array.getLessonHTMLCSSSenior();
        break;
      case this.paths.pythonJun:
        this.array.getLessonPythonJun();
        break;
      case this.paths.pythonMiddle:
        this.array.getLessonPythonMiddle();
        break;
      case this.paths.pythonSenior:
        this.array.getLessonPythonSenior();
        break;
      case this.paths.androidJun:
        this.array.getLessonAndroidJun();
        break;
      case this.paths.androidMiddle:
        this.array.getLessonAndroidMiddle();
        break;
      case this.paths.androidSenior:
        this.array.getLessonAndroidSenior();
        break;
      case this.paths.iOSJun:
        this.array.getLessonIOSJun();
        break;
      case this.paths.iOSMiddle:
        this.array.getLessonIOSMiddle();
        break;
      case this.paths.iOSSenior:
        this.array.getLessonIOSSenior();
        break;
    }
  }

  ngOnInit() {
    this.loadContentLesson();
    console.log(this.path);
  }
}
