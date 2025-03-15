import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlShortener',
  standalone: true
})
export class UrlShortenerPipe implements PipeTransform {
  transform(url: string, maxLength: number = 30): string {
    if (!url) {
      return '';
    }

    // Eliminar protocolo (http://, https://)
    let cleanUrl = url.replace(/^(https?:\/\/)/, '');
    
    // Si la URL es más corta que la longitud máxima, devolverla tal cual
    if (cleanUrl.length <= maxLength) {
      return cleanUrl;
    }
    
    // Dividir la URL en partes (dominio y ruta)
    const parts = cleanUrl.split('/');
    const domain = parts[0];
    
    // Si solo hay dominio y es demasiado largo
    if (parts.length === 1 && domain.length > maxLength) {
      return domain.substring(0, maxLength - 3) + '...';
    }
    
    // Construir URL abreviada
    let result = domain;
    let remainingLength = maxLength - domain.length - 3; // -3 para los puntos suspensivos
    
    if (remainingLength <= 0) {
      // El dominio ya ocupa casi todo el espacio disponible
      return domain.substring(0, maxLength - 3) + '...';
    }
    
    // Añadir puntos suspensivos
    result += '/...';
    
    return result;
  }
}
