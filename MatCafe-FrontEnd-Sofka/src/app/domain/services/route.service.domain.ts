import { RouteEntity } from '../entities/route.entity.domain';
import { BaseService } from './base.service.domain';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class RouteService extends BaseService<RouteEntity> {}
