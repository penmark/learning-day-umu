import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';


@Injectable()
export class AppService {
  constructor(private http: Http) {}

  instagramFeed(): Observable<any> {
    return this.http.get('https://bryggverket.se/instagram/latest')
      .map((r: Response) => r.json().images)
  }
}
