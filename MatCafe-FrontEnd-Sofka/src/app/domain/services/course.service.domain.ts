import { CourseEntity } from '../entities/course.entity.domain';
import { BaseService } from './base.service.domain';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class CourseService extends BaseService<CourseEntity> {}
