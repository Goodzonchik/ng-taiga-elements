import { Injectable } from '@angular/core';

@Injectable()
export class UtmService {
  parseUtm(url: string): any {
    return decodeURIComponent(url);
  }
}