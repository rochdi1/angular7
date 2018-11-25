import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, args?: number): string {
     
    return value ? value.substr(0, args) : value;
  }

}
