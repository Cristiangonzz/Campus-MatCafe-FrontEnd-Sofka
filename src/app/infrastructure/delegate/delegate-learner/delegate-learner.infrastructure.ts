import { SendWorkshoplUseCase } from 'src/app/application/use-case/learner/send-work-shop.use-case.application';
import { SuscribeRouteUseCase } from 'src/app/application/use-case/learner/subscribe-route.use-case.application';
import { LearnerService } from 'src/app/domain/services/learner.service.domain';

const SendWorkshopUseCaseFactory = (() => {
  let instance: SendWorkshoplUseCase;

  const factory = (service: LearnerService): SendWorkshoplUseCase => {
    if (!instance) {
      instance = new SendWorkshoplUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const SubscribeRouteCaseFactory = (() => {
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
  sendWorkshopUseCaseProvider: {
    provide: SendWorkshoplUseCase,
    useFactory: SendWorkshopUseCaseFactory,
    deps: [LearnerService],
  },
  subscribeRouteCaseProvider: {
    provide: SuscribeRouteUseCase,
    useFactory: SubscribeRouteCaseFactory,
    deps: [LearnerService],
  },
};
