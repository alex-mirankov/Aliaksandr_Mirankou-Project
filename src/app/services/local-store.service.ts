
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStoreService {
  constructor() { }
}

const JavaJun = {
  name: 'Основы Java',
  level: 'начинающий',
  students: 10,
  image: '../../images/javascript1-img-start.png',
  well_students: 17,
  price: '25$',
  id: 'JavaJun'
};

const JavaMiddle = {
  name: 'Средний Java',
  level: 'средний',
  students: 8,
  image: 'https://drive.google.com/open?id=1xT39RlF-BRIJLhOpbbw1lQXu0JUGH39Y',
  well_students: 25,
  price: '50$',
  id: 'JavaMiddle'
};

const JavaSenior = {
  name: 'Продвинутый Java',
  level: 'продвинутый',
  students: 5,
  image: 'https://drive.google.com/open?id=1xT39RlF-BRIJLhOpbbw1lQXu0JUGH39Y',
  well_students: 10,
  price: '100$',
  id: 'JavaSenior'
};

const CSharpJun = {
  name: 'Основы C#',
  level: 'начальный',
  students: 20,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 46,
  price: '43$',
  id: 'CSharpJun'
};

const CSharpMiddle = {
  name: 'Средний C#',
  level: 'средний',
  students: 14,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 187,
  price: '86$',
  id: 'CSharpMiddle'
};

const CSharpSenior = {
  name: 'Продвинутый C#',
  level: 'продвинутый',
  students: 5,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 10,
  price: '150$',
  id: 'CSharpSenior'
};

const JavaScriptJun = {
  name: 'Основы JavaScript',
  level: 'начальный',
  students: 15,
  image: 'https://drive.google.com/open?id=1x3NNi4-2zd2XYkYMQfW925bxPFT4dtxT',
  well_students: 57,
  price: '74$',
  id: 'JavaScriptJun'
};

const JavaScriptMiddle = {
  name: 'Средний JavaScript',
  level: 'средний',
  students: 14,
  image: 'https://drive.google.com/open?id=1x3NNi4-2zd2XYkYMQfW925bxPFT4dtxT',
  well_students: 187,
  price: '158$',
  id: 'JavaScriptMiddle'
};

const JavaScriptSenior = {
  name: 'Продвинутый JavaScript',
  level: 'продвинутый',
  students: 25,
  image: 'https://drive.google.com/open?id=1x3NNi4-2zd2XYkYMQfW925bxPFT4dtxT',
  well_students: 46,
  price: '200$',
  id: 'JavaScriptSenior'
};

const CPlusJun = {
  name: 'Основы C++',
  level: 'начальный',
  students: 25,
  image: 'https://drive.google.com/open?id=1ku0EdQoBMPctCguAJExTPTbBd9kWKtvB',
  well_students: 112,
  price: '54$',
  id: 'CPlusJun'
};

const CPlusMiddle = {
  name: 'Средний C++',
  level: 'средний',
  students: 30,
  image: 'https://drive.google.com/open?id=1ku0EdQoBMPctCguAJExTPTbBd9kWKtvB',
  well_students: 78,
  price: '90$',
  id: 'CPlusMiddle'
};

const CPlusSenior = {
  name: 'Продвинутый C++',
  level: 'продвинутый',
  students: 15,
  image: 'https://drive.google.com/open?id=1ku0EdQoBMPctCguAJExTPTbBd9kWKtvB',
  well_students: 321,
  price: '165$',
  id: 'CPlusSenior'
};

const SQLJun = {
  name: 'Основы SQL',
  level: 'начальный',
  students: 10,
  image: 'https://drive.google.com/open?id=1x3NNi4-2zd2XYkYMQfW925bxPFT4dtxT',
  well_students: 245,
  price: '76$',
  id: 'SQLJun'
};

const SQLMiddle = {
  name: 'Средний SQL',
  level: 'средний',
  students: 20,
  image: 'https://drive.google.com/open?id=1x3NNi4-2zd2XYkYMQfW925bxPFT4dtxT',
  well_students: 54,
  price: '90$',
  id: 'SQLMiddle'
};

const SQLSenior = {
  name: 'Продвинутый SQL',
  level: 'продвинутый',
  students: 15,
  image: 'https://drive.google.com/open?id=1x3NNi4-2zd2XYkYMQfW925bxPFT4dtxT',
  well_students: 321,
  price: '165$',
  id: 'SQLSenior'
};

const HTMLCSSJun = {
  name: 'Основы HTML и CSS',
  level: 'начальный',
  students: 30,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 300,
  price: '50$',
  id: 'HTMLCSSJun'
};

const HTMLCSSMiddle = {
  name: 'Средний HTML и CSS',
  level: 'средний',
  students: 20,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 243,
  price: '100$',
  id: 'HTMLCSSMiddle'
};

const HTMLCSSSenior = {
  name: 'Продвинутый HTML и CSS',
  level: 'продвинутый',
  students: 15,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 114,
  price: '165$',
  id: 'HTMLCSSSenior'
};

const PythonJun = {
  name: 'Основы Python',
  level: 'начальный',
  students: 10,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 60,
  price: '70$',
  id: 'PythonJun'
};

const PythonMiddle = {
  name: 'Средний Python',
  level: 'средний',
  students: 7,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 80,
  price: '100$',
  id: 'PythonMiddle'
};

const PythonSenior = {
  name: 'Продвинутый Python',
  level: 'продвинутый',
  students: 5,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 40,
  price: '200$',
  id: 'PythonSenior'
};

const AndroidJun = {
  name: 'Основы AndroidDev',
  level: 'начальный',
  students: 40,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 253,
  price: '50$',
  id: 'AndroidJun'
};

const AndroidMiddle = {
  name: 'Средний AndroidDev',
  level: 'средний',
  students: 35,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 157,
  price: '100$',
  id: 'AndroidMiddle'
};

const AndroidSenior = {
  name: 'Продвинутый AndroidDev',
  level: 'продвинутый',
  students: 30,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 47,
  price: '150$',
  id: 'AndroidSenior'
};

const iOSJun = {
  name: 'Основы iOSDev',
  level: 'начальный',
  students: 50,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 263,
  price: '70$',
  id: 'iOSJun'
};

const iOSMiddle = {
  name: 'Средний iOSDev',
  level: 'средний',
  students: 25,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 117,
  price: '120$',
  id: 'iOSMiddle'
};

const iOSSenior = {
  name: 'Продвинутый iOSDev',
  level: 'продвинутый',
  students: 10,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 76,
  price: '170$',
  id: 'iOSSenior'
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
