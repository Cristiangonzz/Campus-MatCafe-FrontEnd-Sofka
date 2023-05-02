import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  async transform(url: string): Promise<string> {
    const videoId = this.getVideoIdFromUrl(url);
    const apiUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.title;
  }

  private getVideoIdFromUrl(url: string): string {
    const regex = /(?:\?v=|&v=|youtu\.be\/)(.*?)(?:\?|&|$)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  }
}