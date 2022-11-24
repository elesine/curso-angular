import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: any, por: any): string {
    let value1 = (value);
    let value2 = (por);

    let result = "La multiplicación: " +
                value1 + " x " + value2 + " = " +
                (value1 * value2)

    return result;
  }

}
