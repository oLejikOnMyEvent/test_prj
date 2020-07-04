import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelSerivceService {

  constructor(private http: HttpClient) { }

panelObj = [
{
  wordTitle: 'C',
  textTitle: 'Трещина',
  subWordTitle: 'CL',
  subTextTitle: 'Продольные',
  timer: 6,
  descriptText: 'Тут будет небольшой текст с приложением. Если текста будет много, то можно уменьшить шрифт.',
  value: '3 м.'
},
{
  wordTitle: 'F',
  textTitle: 'Разлом',
  subWordTitle: 'FL',
  subTextTitle: 'Продольные',
  timer: 6,
  descriptText: 'Тут будет небольшой текст с приложением. Если текста будет много, то можно уменьшить шрифт.',
  value: '8 м.'
},
{
  wordTitle: 'C',
  textTitle: 'Трещина',
  subWordTitle: 'CCL',
  subTextTitle: 'Продольные',
  timer: 6,
  descriptText: 'Тут будет небольшой текст с приложением. Если текста будет много, то можно уменьшить шрифт.',
  value: '12 м.'
},
{
  wordTitle: 'F',
  textTitle: 'Разлом',
  subWordTitle: 'FL',
  subTextTitle: 'Продольные',
  timer: 6,
  descriptText: 'Тут будет небольшой текст с приложением. Если текста будет много, то можно уменьшить шрифт.',
  value: '13 м.'
},
{
  wordTitle: 'C',
  textTitle: 'Трещина',
  subWordTitle: 'CCL',
  subTextTitle: 'Продольные',
  timer: 6,
  descriptText: 'Тут будет небольшой текст с приложением. Если текста будет много, то можно уменьшить шрифт.',
  value: '22 м.'
},

]

dataOfReport = '27.04.2020'

getPanelData(){
  return of (this.panelObj)
}

getDataReport(){
  return of (this.dataOfReport)
}
  
}
