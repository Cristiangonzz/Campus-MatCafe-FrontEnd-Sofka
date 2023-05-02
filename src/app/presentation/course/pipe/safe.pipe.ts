import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    const videoId = url.split('v=')[1].split('&')[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    const searchParams = new URLSearchParams(url.split('?')[1]);
    searchParams.delete('v');
    const paramsString = searchParams.toString();
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${embedUrl}?${paramsString}`
    );
    return safeUrl;
  }
}