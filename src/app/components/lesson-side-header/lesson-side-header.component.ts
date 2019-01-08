import { Component, OnInit } from '@angular/core';
import { GetNavNameLessonsService } from '../../services/get-nav-name.service';
import { PathFieldsService } from '../../services/path-fields.service';

@Component({
  selector: 'app-lesson-side-header',
  templateUrl: './lesson-side-header.component.html',
  styleUrls: ['./lesson-side-header.component.css']
})
export class LessonSideHeaderComponent implements OnInit {

  constructor(private array: GetNavNameLessonsService, private paths: PathFieldsService) { }
  private names = this.array.namesNav;
  private path = window.location.pathname;

  loadLessonNavigation() {
    switch (this.path) {
      case this.paths.javaJun:
        this.array.getJavaName();
        console.log(this.names);
        break;
      case this.paths.сSharpJun:
        this.array.getCSharpName();
        console.log(this.names);
        break;
      case this.paths.javaScriptJun:
        this.array.getJavaScriptName();
        console.log(this.names);
        break;
      case this.paths.cPlusJun:
        this.array.getCPlusName();
        console.log(this.names);
        break;
      case this.paths.sQLJun:
        this.array.getSQLName();
        console.log(this.names);
        break;
      case this.paths.hTMLCSSJun:
        this.array.getHTMLCSSName();
        console.log(this.names);
        break;
      case this.paths.pythonJun:
        this.array.getPythonName();
        console.log(this.names);
        break;
      case this.paths.androidJun:
        this.array.getAndroidName();
        console.log(this.names);
        break;
      case this.paths.iOSJun:
        this.array.getIOSName();
        console.log(this.names);
        break;
      case this.paths.javaMiddle:
        this.array.getJavaName();
        console.log(this.names);
        break;
      case this.paths.сSharpMiddle:
        this.array.getCSharpName();
        console.log(this.names);
        break;
      case this.paths.javaScriptMiddle:
        this.array.getJavaScriptName();
        console.log(this.names);
        break;
      case this.paths.cPlusMiddle:
        this.array.getCPlusName();
        console.log(this.names);
        break;
      case this.paths.sQLMiddle:
        this.array.getSQLName();
        console.log(this.names);
        break;
      case this.paths.hTMLCSSMiddle:
        this.array.getHTMLCSSName();
        console.log(this.names);
        break;
      case this.paths.pythonMiddle:
        this.array.getPythonName();
        console.log(this.names);
        break;
      case this.paths.androidMiddle:
        this.array.getAndroidName();
        console.log(this.names);
        break;
      case this.paths.iOSMiddle:
        this.array.getIOSName();
        console.log(this.names);
        break;
      case this.paths.javaSenior:
        this.array.getJavaName();
        console.log(this.names);
        break;
      case this.paths.сSharpSenior:
        this.array.getCSharpName();
        console.log(this.names);
        break;
      case this.paths.javaScriptSenior:
        this.array.getJavaScriptName();
        console.log(this.names);
        break;
      case this.paths.cPlusSenior:
        this.array.getCPlusName();
        console.log(this.names);
        break;
      case this.paths.sQLSenior:
        this.array.getSQLName();
        console.log(this.names);
        break;
      case this.paths.hTMLCSSSenior:
        this.array.getHTMLCSSName();
        console.log(this.names);
        break;
      case this.paths.pythonSenior:
        this.array.getPythonName();
        console.log(this.names);
        break;
      case this.paths.androidSenior:
        this.array.getAndroidName();
        console.log(this.names);
        break;
      case this.paths.iOSSenior:
        this.array.getIOSName();
        console.log(this.names);
        break;
    }
  }

  ngOnInit() {
    this.loadLessonNavigation();
  }
}
