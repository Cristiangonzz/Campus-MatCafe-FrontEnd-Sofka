import { Injectable } from '@angular/core';
import { BaseService } from './base.service.domain';

@Injectable({
  providedIn: 'root',
})
export abstract class LearnerService extends BaseService<'LearnerEntity'> {}
