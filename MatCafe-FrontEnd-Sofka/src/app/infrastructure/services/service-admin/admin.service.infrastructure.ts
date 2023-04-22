import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminEntity } from "src/app/domain/entities/admin.entity.domain";
import { CalificationEntity } from "src/app/domain/entities/calification.entity.domain";
import { LearnerEntity } from "src/app/domain/entities/learner.entity.domain";
import { AdminService } from "src/app/domain/services/admin.service.domain";



@Injectable({
    providedIn: 'root',
})
export class AdminImplementationService extends AdminService {
    
    


    URL = "https://gestion-de-project-backend-production.up.railway.app";

    constructor(private http: HttpClient) {
        super();
    }

    httpOptions = {
        headers : new HttpHeaders({
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
          'Access-Control-Allow-Origin': '*'
        })
    }
    createAdmin(data: AdminEntity): Observable<AdminEntity> {
        throw new Error("Method not implemented.");
    }
    createLearner(data: LearnerEntity): Observable<LearnerEntity> {
        throw new Error("Method not implemented.");
    }
    updateAdmin(id: string, Course: AdminEntity): Observable<AdminEntity> {
        throw new Error("Method not implemented.");
    }
    updateLearner(id: string, Course: LearnerEntity): Observable<LearnerEntity> {
        throw new Error("Method not implemented.");
    }
    getAdminByEmail(id: string): Observable<AdminEntity> {
        throw new Error("Method not implemented.");
    }
    getLearnerByEmail(id: string): Observable<LearnerEntity> {
        throw new Error("Method not implemented.");
    }
    graderStudent(data: CalificationEntity): Observable<string> {
        throw new Error("Method not implemented.");
    }
   
}
    