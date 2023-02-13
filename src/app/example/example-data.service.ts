import { Injectable } from '@angular/core';
import { SectionType , createSection} from './section-container/section-container.component';


const keyname = 'exmaple-data';

@Injectable({
  providedIn: 'root'
})
export class ExampleDataService {
  constructor() { }

  save(data: SectionType[]): void {
    localStorage.setItem(keyname, JSON.stringify(data));
  }

  load(): SectionType[] {
    const json = localStorage.getItem(keyname);

    if(json) {
      return JSON.parse(json) as SectionType[];
    }
    else {
      return [createSection()];
    }
  }
}
