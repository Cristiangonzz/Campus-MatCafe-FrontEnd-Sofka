import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';

@Injectable({
  providedIn: 'root',
})
export class RouteImplementationService extends RouteService {
   getByName(id: string): Observable<RouteEntity> {
    return this.http.get<RouteEntity>(
      `${this.URL}/Route/getByName/${id}`,
      this.httpOptions
    );  
  }

  
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

  create(data: RouteEntity): Observable<RouteEntity> {
    return this.http.post<RouteEntity>(
      `${this.URL}/Route`,
      data,
      this.httpOptions
    );
  }
  update(id: string, data: RouteEntity): Observable<RouteEntity> {
    return this.http.put<RouteEntity>(
      `${this.URL}/Route/${id}`,
      data,
      this.httpOptions
    );
  }
  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(
      `${this.URL}/Route/${id}`,
      this.httpOptions
    );
  }
  get(id: string): Observable<RouteEntity> {
    return this.http.get<RouteEntity>(
      `${this.URL}/Route/${id}`,
      this.httpOptions
    );
  }
  getAll(): Observable<RouteEntity[]> {
    return this.http.get<RouteEntity[]>(`${this.URL}/Route`, this.httpOptions);
  }
}
