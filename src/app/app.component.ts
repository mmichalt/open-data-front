import {Component} from '@angular/core';
import {of} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('uk');
  }
  setLanguage = (lang) => {
    this.translate.use(lang);
  }
}

const squareOf2 = of(1, 2, 3, 4, 5, 6)
  .pipe(
    filter(num => num % 2 === 0),
    map(num => num * num)
  );
squareOf2.subscribe( (num) => console.log(num));
