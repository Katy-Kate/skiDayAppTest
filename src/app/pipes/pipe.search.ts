import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(pipeData: any, pipeModifier): any {
    return pipeData.filter(item => {
      return item.name.toLocaleLowerCase().includes(pipeModifier.toLocaleLowerCase()) ||
             item.reknown.toLocaleLowerCase().includes(pipeModifier.toLocaleLowerCase());
    });
  }
}
