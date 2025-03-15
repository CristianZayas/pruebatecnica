import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numerotelefono',
  standalone: true
})
export class NumerotelefonoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `(+503) ${String(value).slice(0,4)}-${String(value).slice(4,8)}`;
  }
}
