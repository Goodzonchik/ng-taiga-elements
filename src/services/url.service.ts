import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
  parseParams(url: string): any {
    const params = new URL(url).searchParams.toString();

    return decodeURIComponent(params);
  }
}