
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStoreService {
  constructor() { }
}

const JavaJun = {
  name: 'Основы Java',
  level: 'начинающий',
  students: 10,
  image: 'https://i.ibb.co/4MXYPG1/java-img-start.png',
  well_students: 17,
  price: '25$',
  id: 'JavaJun',
  alt: 'java-start-image'
};

const JavaMiddle = {
  name: 'Средний Java',
  level: 'средний',
  students: 8,
  image: 'https://i.ibb.co/4MXYPG1/java-img-start.png',
  well_students: 25,
  price: '50$',
  id: 'JavaMiddle',
  alt: 'java-middle-image'
};

const JavaSenior = {
  name: 'Продвинутый Java',
  level: 'продвинутый',
  students: 5,
  image: 'https://i.ibb.co/4MXYPG1/java-img-start.png',
  well_students: 10,
  price: '100$',
  id: 'JavaSenior',
  alt: 'java-senior-image'
};

const CSharpJun = {
  name: 'Основы C#',
  level: 'начальный',
  students: 20,
  image: 'https://i.ibb.co/4MXYPG1/java-img-start.png',
  well_students: 46,
  price: '43$',
  id: 'CSharpJun',
  alt: 'chsarp-start-image'
};

const CSharpMiddle = {
  name: 'Средний C#',
  level: 'средний',
  students: 14,
  image: 'https://i.ibb.co/D4p9WLx/csharp-img-start.png',
  well_students: 187,
  price: '86$',
  id: 'CSharpMiddle',
  alt: 'chsarp-middle-image'
};

const CSharpSenior = {
  name: 'Продвинутый C#',
  level: 'продвинутый',
  students: 5,
  image: 'https://i.ibb.co/D4p9WLx/csharp-img-start.png',
  well_students: 10,
  price: '150$',
  id: 'CSharpSenior',
  alt: 'chsarp-senior-image'
};

const JavaScriptJun = {
  name: 'Основы JavaScript',
  level: 'начальный',
  students: 15,
  image: 'https://i.ibb.co/TvtKBx0/javascript1-img-start.png',
  well_students: 57,
  price: '74$',
  id: 'JavaScriptJun',
  alt: 'js-start-image'
};

const JavaScriptMiddle = {
  name: 'Средний JavaScript',
  level: 'средний',
  students: 14,
  image: 'https://i.ibb.co/TvtKBx0/javascript1-img-start.png',
  well_students: 187,
  price: '158$',
  id: 'JavaScriptMiddle',
  alt: 'js-middle-image'
};

const JavaScriptSenior = {
  name: 'Продвинутый JavaScript',
  level: 'продвинутый',
  students: 25,
  image: 'https://i.ibb.co/TvtKBx0/javascript1-img-start.png',
  well_students: 46,
  price: '200$',
  id: 'JavaScriptSenior',
  alt: 'js-senior-image'
};

const CPlusJun = {
  name: 'Основы C++',
  level: 'начальный',
  students: 25,
  image: 'https://i.ibb.co/j3B4GW4/javascript2-img-start.png',
  well_students: 112,
  price: '54$',
  id: 'CPlusJun',
  alt: 'cplus-start-image'
};

const CPlusMiddle = {
  name: 'Средний C++',
  level: 'средний',
  students: 30,
  image: 'https://i.ibb.co/j3B4GW4/javascript2-img-start.png',
  well_students: 78,
  price: '90$',
  id: 'CPlusMiddle',
  alt: 'cplus-middle-image'
};

const CPlusSenior = {
  name: 'Продвинутый C++',
  level: 'продвинутый',
  students: 15,
  image: 'https://i.ibb.co/j3B4GW4/javascript2-img-start.png',
  well_students: 321,
  price: '165$',
  id: 'CPlusSenior',
  alt: 'cplus-senior-image'
};

const SQLJun = {
  name: 'Основы SQL',
  level: 'начальный',
  students: 10,
  image: 'https://i.ibb.co/LhjVk7J/javascript3-img-start.png',
  well_students: 245,
  price: '76$',
  id: 'SQLJun',
  alt: 'sql-start-image'
};

const SQLMiddle = {
  name: 'Средний SQL',
  level: 'средний',
  students: 20,
  image: 'https://i.ibb.co/LhjVk7J/javascript3-img-start.png',
  well_students: 54,
  price: '90$',
  id: 'SQLMiddle',
  alt: 'sql-middle-image'
};

const SQLSenior = {
  name: 'Продвинутый SQL',
  level: 'продвинутый',
  students: 15,
  image: 'https://i.ibb.co/LhjVk7J/javascript3-img-start.png',
  well_students: 321,
  price: '165$',
  id: 'SQLSenior',
  alt: 'sql-senior-image'
};

const HTMLCSSJun = {
  name: 'Основы HTML и CSS',
  level: 'начальный',
  students: 30,
  image: 'https://i.ibb.co/4MXYPG1/java-img-start.png',
  well_students: 300,
  price: '50$',
  id: 'HTMLCSSJun',
  alt: 'html-start-image'
};

const HTMLCSSMiddle = {
  name: 'Средний HTML и CSS',
  level: 'средний',
  students: 20,
  image: 'https://i.ibb.co/4MXYPG1/java-img-start.png',
  well_students: 243,
  price: '100$',
  id: 'HTMLCSSMiddle',
  alt: 'html-middle-image'
};

const HTMLCSSSenior = {
  name: 'Продвинутый HTML и CSS',
  level: 'продвинутый',
  students: 15,
  image: 'https://i.ibb.co/4MXYPG1/java-img-start.png',
  well_students: 114,
  price: '165$',
  id: 'HTMLCSSSenior',
  alt: 'html-senior-image'
};

const PythonJun = {
  name: 'Основы Python',
  level: 'начальный',
  students: 10,
  image: 'https://i.ibb.co/D4p9WLx/csharp-img-start.png',
  well_students: 60,
  price: '70$',
  id: 'PythonJun',
  alt: 'python-start-image'
};

const PythonMiddle = {
  name: 'Средний Python',
  level: 'средний',
  students: 7,
  image: 'https://i.ibb.co/D4p9WLx/csharp-img-start.png',
  well_students: 80,
  price: '100$',
  id: 'PythonMiddle',
  alt: 'python-middle-image'
};

const PythonSenior = {
  name: 'Продвинутый Python',
  level: 'продвинутый',
  students: 5,
  image: 'https://i.ibb.co/D4p9WLx/csharp-img-start.png',
  well_students: 40,
  price: '200$',
  id: 'PythonSenior',
  alt: 'python-senior-image'
};

const AndroidJun = {
  name: 'Основы AndroidDev',
  level: 'начальный',
  students: 40,
  image: 'https://i.ibb.co/TvtKBx0/javascript1-img-start.png',
  well_students: 253,
  price: '50$',
  id: 'AndroidJun',
  alt: 'android-senior-image'
};

const AndroidMiddle = {
  name: 'Средний AndroidDev',
  level: 'средний',
  students: 35,
  image: 'https://i.ibb.co/TvtKBx0/javascript1-img-start.png',
  well_students: 157,
  price: '100$',
  id: 'AndroidMiddle',
  alt: 'android-middle-image'
};

const AndroidSenior = {
  name: 'Продвинутый AndroidDev',
  level: 'продвинутый',
  students: 30,
  image: 'https://i.ibb.co/TvtKBx0/javascript1-img-start.png',
  well_students: 47,
  price: '150$',
  id: 'AndroidSenior',
  alt: 'android-senior-image'
};

const iOSJun = {
  name: 'Основы iOSDev',
  level: 'начальный',
  students: 50,
  image: 'https://i.ibb.co/j3B4GW4/javascript2-img-start.png',
  well_students: 263,
  price: '70$',
  id: 'iOSJun',
  alt: 'ios-start-image'
};

const iOSMiddle = {
  name: 'Средний iOSDev',
  level: 'средний',
  students: 25,
  image: 'https://i.ibb.co/j3B4GW4/javascript2-img-start.png',
  well_students: 117,
  price: '120$',
  id: 'iOSMiddle',
  alt: 'ios-middle-image'
};

const iOSSenior = {
  name: 'Продвинутый iOSDev',
  level: 'продвинутый',
  students: 10,
  image: 'https://i.ibb.co/j3B4GW4/javascript2-img-start.png',
  well_students: 76,
  price: '170$',
  id: 'iOSSenior',
  alt: 'ios-senior-image'
};

const setJavaJun = localStorage.setItem('JavaJun', JSON.stringify(JavaJun));
const setJavaMiddle = localStorage.setItem('JavaMiddle', JSON.stringify(JavaMiddle));
const setJavaSenior = localStorage.setItem('JavaSenior', JSON.stringify(JavaSenior));
const setCSharpJun = localStorage.setItem('CSharpJun', JSON.stringify(CSharpJun));
const setCSharpMiddle = localStorage.setItem('CSharpMiddle', JSON.stringify(CSharpMiddle));
const setCSharpSenior = localStorage.setItem('CSharpSenior', JSON.stringify(CSharpSenior));
const setJavaScriptJun = localStorage.setItem('JavaScriptJun', JSON.stringify(JavaScriptJun));
const setJavaScriptMiddle = localStorage.setItem('JavaScriptMiddle', JSON.stringify(JavaScriptMiddle));
const setJavaScriptSenior = localStorage.setItem('JavaScriptSenior', JSON.stringify(JavaScriptSenior));
const setCPlusJun = localStorage.setItem('CPlusJun', JSON.stringify(CPlusJun));
const setCPlusMiddle = localStorage.setItem('CPlusMiddle', JSON.stringify(CPlusMiddle));
const setCPlusSenior = localStorage.setItem('CPlusSenior', JSON.stringify(CPlusSenior));
const setSQLJun = localStorage.setItem('SQLJun', JSON.stringify(SQLJun));
const setSQLMiddle = localStorage.setItem('SQLMiddle', JSON.stringify(SQLMiddle));
const setSQLSenior = localStorage.setItem('SQLSenior', JSON.stringify(SQLSenior));
const setHTMLCSSJun = localStorage.setItem('HTMLCSSJun', JSON.stringify(HTMLCSSJun));
const setHTMLCSSMiddle = localStorage.setItem('HTMLCSSMiddle', JSON.stringify(HTMLCSSMiddle));
const setHTMLCSSSenior = localStorage.setItem('HTMLCSSSenior', JSON.stringify(HTMLCSSSenior));
const setPythonJun = localStorage.setItem('PythonJun', JSON.stringify(PythonJun));
const setPythonMiddle = localStorage.setItem('PythonMiddle', JSON.stringify(PythonMiddle));
const setPythonSenior = localStorage.setItem('PythonSenior', JSON.stringify(PythonSenior));
const setAndroidJun = localStorage.setItem('AndroidJun', JSON.stringify(AndroidJun));
const setAndroidMiddle = localStorage.setItem('AndroidMiddle', JSON.stringify(AndroidMiddle));
const setAndroidSenior = localStorage.setItem('AndroidSenior', JSON.stringify(AndroidSenior));
const setIOSJun = localStorage.setItem('iOSJun', JSON.stringify(iOSJun));
const setIOSMiddle = localStorage.setItem('iOSMiddle', JSON.stringify(iOSMiddle));
const setIOSSenior = localStorage.setItem('iOSSenior', JSON.stringify(iOSSenior));
