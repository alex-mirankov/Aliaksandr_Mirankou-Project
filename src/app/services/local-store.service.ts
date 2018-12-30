
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStoreService {
  constructor() { }
}

const JavaJun = {
  name: 'Основы Java',
  level: 'начинающий',
  students: 10,
  image: 'https://drive.google.com/open?id=1xT39RlF-BRIJLhOpbbw1lQXu0JUGH39Y',
  well_students: 17,
  price: '25$'
};

const JavaMiddle = {
  name: 'Средний Java',
  level: 'средний',
  students: 8,
  image: 'https://drive.google.com/open?id=1xT39RlF-BRIJLhOpbbw1lQXu0JUGH39Y',
  well_students: 25,
  price: '50$'
};

const JavaSenior = {
  name: 'Продвинутый Java',
  level: 'продвинутый',
  students: 5,
  image: 'https://drive.google.com/open?id=1xT39RlF-BRIJLhOpbbw1lQXu0JUGH39Y',
  well_students: 10,
  price: '100$'
};

const CSharpJun = {
  name: 'Основы C#',
  level: 'начальный',
  students: 20,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 46,
  price: '43$'
};

const CSharpMiddle = {
  name: 'Средний C#',
  level: 'средний',
  students: 14,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 187,
  price: '86$'
};

const CSharpSenior = {
  name: 'Продвинутый C#',
  level: 'продвинутый',
  students: 5,
  image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
  well_students: 10,
  price: '150$'
};

const JavaScriptJun = {
  name: 'Основы JavaScript',
  level: 'начальный',
  students: 15,
  image: 'https://drive.google.com/open?id=1x3NNi4-2zd2XYkYMQfW925bxPFT4dtxT',
  well_students: 57,
  price: '74$'
};

const JavaScriptMiddle = {
  name: 'Средний JavaScript',
  level: 'средний',
  students: 14,
  image: 'https://drive.google.com/open?id=1x3NNi4-2zd2XYkYMQfW925bxPFT4dtxT',
  well_students: 187,
  price: '158$'
};

const JavaScriptSenior = {
  name: 'Продвинутый JavaScript',
  level: 'продвинутый',
  students: 25,
  image: 'https://drive.google.com/open?id=1x3NNi4-2zd2XYkYMQfW925bxPFT4dtxT',
  well_students: 46,
  price: '200$'
};

const CPlusJun = {
  name: 'Основы C++',
  level: 'начальный',
  students: 25,
  image: 'https://drive.google.com/open?id=1ku0EdQoBMPctCguAJExTPTbBd9kWKtvB',
  well_students: 112,
  price: '54$'
};

const CPlusMiddle = {
  name: 'Средний C++',
  level: 'средний',
  students: 30,
  image: 'https://drive.google.com/open?id=1ku0EdQoBMPctCguAJExTPTbBd9kWKtvB',
  well_students: 78,
  price: '90$'
};

const CPlusSenior = {
  name: 'Продвинутый C++',
  level: 'продвинутый',
  students: 15,
  image: 'https://drive.google.com/open?id=1ku0EdQoBMPctCguAJExTPTbBd9kWKtvB',
  well_students: 321,
  price: '165$'
};

localStorage.setItem('JavaJun', JSON.stringify(JavaJun));
localStorage.setItem('JavaMiddle', JSON.stringify(JavaMiddle));
localStorage.setItem('JavaSenior', JSON.stringify(JavaSenior));
localStorage.setItem('JavaScriptJun', JSON.stringify(JavaScriptJun));
localStorage.setItem('JavaScriptMiddle', JSON.stringify(JavaScriptMiddle));
localStorage.setItem('JavaScriptSenior', JSON.stringify(JavaScriptSenior));
localStorage.setItem('CPlusJun', JSON.stringify(CPlusJun));
localStorage.setItem('CPlusMiddle', JSON.stringify(CPlusMiddle));
localStorage.setItem('CPlusSenior', JSON.stringify(CPlusSenior));
