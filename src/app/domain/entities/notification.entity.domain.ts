import { INotification } from '../interfaces/notification.interface.domain';

export class NotificationEntity implements INotification {
  id: string;
  repo: string;
  course: string;
  coment: string;

  constructor(id: string, repo: string, course: string, coment: string) {
    this.id = id;
    this.repo = repo;
    this.course = course;
    this.coment = coment;
  }
}
