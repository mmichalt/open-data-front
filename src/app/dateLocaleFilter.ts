import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as moment from 'moment';

@Pipe({name: 'dateLocale', pure: false})
export class DateLocaleFilter implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: string, dateFormat: string): any {
    if (!value) {
      return '';
    }
    const lang = !this.translate.currentLang ? this.translate.defaultLang : this.translate.currentLang;
    moment.locale(lang);
    return moment.utc(value).local().format(dateFormat);
  }
}
