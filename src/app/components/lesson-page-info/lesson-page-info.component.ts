import { Component, OnInit } from '@angular/core';
import { GetLessonsService } from '../../services/get-lessons.service';

@Component({
  selector: 'app-lesson-page-info',
  templateUrl: './lesson-page-info.component.html',
  styleUrls: ['./lesson-page-info.component.css']
})
export class LessonPageInfoComponent implements OnInit {

  private lessons = this.array.lessons;

  private path = window.location.pathname;
  private javaJun = '/lesson/JavaJun';
  private javaJMiddle = '/lesson/JavaMiddle';
  private javaSenior = '/lesson/JavaSenior';
  private сSharpJun = '/lesson/CSharpJun';
  private сSharpMiddle = '/lesson/CSharpMiddle';
  private сSharpSenior = '/lesson/CSharpSenior';
  private javaScriptJun = '/lesson/JavaScriptJun';
  private javaScriptMiddle = '/lesson/JavaScriptMiddle';
  private javaScriptSenior = '/lesson/JavaScriptSenior';
  private cPlusJun = '/lesson/CPlusJun';
  private cPlusMiddle = '/lesson/CPlusMiddle';
  private cPlusSenior = '/lesson/CPlusSenior';
  private sQLJun = '/lesson/SQLJun';
  private sQLMiddle = '/lesson/SQLMiddle';
  private sQLSenior = '/lesson/SQLSenior';
  private hTMLCSSJun = '/lesson/HTMLCSSJun';
  private hTMLCSSMiddle = '/lesson/HTMLCSSMiddle';
  private hTMLCSSSenior = '/lesson/HTMLCSSSenior';
  private pythonJun = '/lesson/PythonJun';
  private pythonMiddle = '/lesson/PythonMiddle';
  private pythonSenior = '/lesson/PythonSenior';
  private androidJun = '/lesson/AndroidJun';
  private androidMiddle = '/lesson/AndroidMiddle';
  private androidSenior = '/lesson/AndroidSenior';
  private iOSJun = '/lesson/iOSJun';
  private iOSMiddle = '/lesson/iOSJun';
  private iOSSenior = '/lesson/iOSJun';

  constructor(private array: GetLessonsService) { }

  loadContentLesson() {
    switch (this.path) {
      case this.javaJun:
        this.array.getLessonJavaJun();
        break;
      case this.javaJMiddle:
        this.array.getLessonJavaMiddle();
        break;
      case this.javaSenior:
        this.array.getLessonJavaSenior();
        break;
      case this.сSharpJun:
        this.array.getLessonCSharpJun();
        break;
      case this.сSharpMiddle:
        this.array.getLessonCSharpMiddle();
        break;
      case this.сSharpSenior:
        this.array.getLessonCSharpSenior();
        break;
      case this.javaScriptJun:
        this.array.getLessonJavaScriptJun();
        break;
      case this.javaScriptMiddle:
        this.array.getLessonJavaScriptMiddle();
        break;
      case this.javaScriptSenior:
        this.array.getLessonJavaScriptSenior();
        break;
      case this.cPlusJun:
        this.array.getLessonCPlusJun();
        break;
      case this.cPlusMiddle:
        this.array.getLessonCPlusMiddle();
        break;
      case this.cPlusSenior:
        this.array.getLessonCPlusSenior();
        break;
      case this.sQLJun:
        this.array.getLessonSQLJun();
        break;
      case this.sQLMiddle:
        this.array.getLessonSQLMiddle();
        break;
      case this.sQLSenior:
        this.array.getLessonSQLSenior();
        break;
      case this.hTMLCSSJun:
        this.array.getLessonHTMLCSSJun();
        break;
      case this.hTMLCSSMiddle:
        this.array.getLessonHTMLCSSMiddle();
        break;
      case this.hTMLCSSSenior:
        this.array.getLessonHTMLCSSSenior();
        break;
      case this.pythonJun:
        this.array.getLessonPythonJun();
        break;
      case this.pythonMiddle:
        this.array.getLessonPythonMiddle();
        break;
      case this.pythonSenior:
        this.array.getLessonPythonSenior();
        break;
      case this.androidJun:
        this.array.getLessonAndroidJun();
        break;
      case this.androidMiddle:
        this.array.getLessonAndroidMiddle();
        break;
      case this.androidSenior:
        this.array.getLessonAndroidSenior();
        break;
      case this.iOSJun:
        this.array.getLessonIOSJun();
        break;
      case this.iOSMiddle:
        this.array.getLessonIOSMiddle();
        break;
      case this.iOSSenior:
        this.array.getLessonIOSSenior();
        break;
    }
  }

  ngOnInit() {
    this.loadContentLesson();
    console.log(this.path);
  }
}
