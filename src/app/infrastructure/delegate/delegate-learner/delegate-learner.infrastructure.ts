import { CreateCourseUseCase } from "src/app/application/use-case/course/create-course.use-case";
import { DeleteCourseUseCase } from "src/app/application/use-case/course/delete-course.use-case";
import { GetAllCourseUseCase } from "src/app/application/use-case/course/find-all-course.use-case";
import { GetCourseUseCase } from "src/app/application/use-case/course/get-course.use-case";
import { UpdateCourseUseCase } from "src/app/application/use-case/course/update-course.use-case";
import { SendWorkshoplUseCase } from "src/app/application/use-case/learner/send-work-shop.use-case.application";
import { SuscribeRouteUseCase } from "src/app/application/use-case/learner/subscribe-route.use-case.application";
import { CourseService } from "src/app/domain/services/course.service.domain";
import { LearnerService } from "src/app/domain/services/learner.service.domain";





const SendWorkshopUseCaseFactory = 
(() => {
    let instance: SendWorkshoplUseCase;
  
    const factory = (service: LearnerService): SendWorkshoplUseCase => {
      if (!instance) {
        instance = new SendWorkshoplUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();

const SubscribeRouteCaseFactory = 
(() => {
    let instance: SuscribeRouteUseCase;
  
    const factory = (service: LearnerService): SuscribeRouteUseCase => {
      if (!instance) {
        instance = new SuscribeRouteUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();



export const learnerUseCaseProviders = {

    sendWorkshopUseCaseProvaider : 
    {
        provide: SendWorkshoplUseCase,
        useFactory: SendWorkshopUseCaseFactory,
        deps: [LearnerService],
    },
    subscribeRouteCaseProvaider : 
    {
        provide: SuscribeRouteUseCase,
        useFactory: SubscribeRouteCaseFactory,
        deps: [LearnerService],
    },
  
}