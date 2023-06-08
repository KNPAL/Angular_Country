import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: unknown[], ...args: unknown[]): unknown {
    let retValue = '';
    if (value) {
      let count =0;
      for (const [key, val] of Object.entries(value)) {
        if(count>2){
          break;
        }
        retValue += `${val}, `
        count++;
      }
    }
    retValue = retValue.substring(0, retValue.lastIndexOf(','));
    return retValue;
  }

}
