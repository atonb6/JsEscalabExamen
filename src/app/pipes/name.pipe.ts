import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {


  transform(nombre: any, ...args: any[]) : string {

    return 'Philippe';
}

}
