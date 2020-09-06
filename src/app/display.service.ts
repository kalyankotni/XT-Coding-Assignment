import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient) { }

  getMissions(url: string) {
    return this.http.get(url).pipe(map(data => {
      return Object.values(data);
    }));
  }
}
