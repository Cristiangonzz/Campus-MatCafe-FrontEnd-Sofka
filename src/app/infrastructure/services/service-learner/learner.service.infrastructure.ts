import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISendWorkshop } from 'src/app/domain/interfaces/send-work-shop.interface.domain';
import { ISuscribeRoute } from 'src/app/domain/interfaces/suscribe-route.inteface.domain';
import { LearnerService } from 'src/app/domain/services/learner.service.domain';

@Injectable({
  providedIn: 'root',
})
export class LearnerImplementationService extends LearnerService {
  URL = 'https://stable-use-production.up.railway.app';

  constructor(private http: HttpClient) {
    super();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  sendWorkshop(data: ISendWorkshop): Observable<string> {
    return this.http.post<string>(`${this.URL}/learner/sendWorkshop`, data, this.httpOptions);
  }

  subscribeRoute(data: ISuscribeRoute): Observable<string> {
    return this.http.post<string>(`${this.URL}/learner/subscribeRoute`, data, this.httpOptions);
  }
}
