import { CreateUserUseCase } from 'src/app/application/use-case/admin/create-user.use-case.application';
import { GetAdminAndLearnerByEmailUseCase } from 'src/app/application/use-case/admin/get-admin-and-learner-by-email.use-case.application';
import { GetAdminByEmailUseCase } from 'src/app/application/use-case/admin/get-admin-by-email.use-case.application';
import { GetLearnerByEmailUseCase } from 'src/app/application/use-case/admin/get-learner-by-email.use-case.application';
import { GraderStudentUseCase } from 'src/app/application/use-case/admin/grader-student.use-case.application';
import { HasNotificationUseCase } from 'src/app/application/use-case/admin/notification-user.use-case.application';
import { UpdateAdminUseCase } from 'src/app/application/use-case/admin/update-admin.use-case.application';
import { UpdateLearnerUseCase } from 'src/app/application/use-case/admin/update-learner.use-case.application';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

const HasNotificationUseCaseFactory = (() => {
  let instance: HasNotificationUseCase;

  const factory = (): HasNotificationUseCase => {
    if (!instance) {
      instance = new HasNotificationUseCase();
    }

    return instance;
  };

  return factory;
})();
const CreateUserUseCaseFactory = (() => {
  let instance: CreateUserUseCase;

  const factory = (service: AdminService): CreateUserUseCase => {
    if (!instance) {
      instance = new CreateUserUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const UpdateAdminUseCaseFactory = (() => {
  let instance: UpdateAdminUseCase;

  const factory = (service: AdminService): UpdateAdminUseCase => {
    if (!instance) {
      instance = new UpdateAdminUseCase(service);
    }

    return instance;
  };

  return factory;
})();
const UpdateLearnerUseCaseFactory = (() => {
  let instance: UpdateLearnerUseCase;

  const factory = (service: AdminService): UpdateLearnerUseCase => {
    if (!instance) {
      instance = new UpdateLearnerUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const GetAdminByEmailUseCaseFactory = (() => {
  let instance: GetAdminByEmailUseCase;

  const factory = (service: AdminService): GetAdminByEmailUseCase => {
    if (!instance) {
      instance = new GetAdminByEmailUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const GetLearnerByEmailUseCaseFactory = (() => {
  let instance: GetLearnerByEmailUseCase;

  const factory = (service: AdminService): GetLearnerByEmailUseCase => {
    if (!instance) {
      instance = new GetLearnerByEmailUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const GetAdminAndLearnerByEmailUseCaseFactory = (() => {
  let instance: GetAdminAndLearnerByEmailUseCase;

  const factory = (service: AdminService): GetAdminAndLearnerByEmailUseCase => {
    if (!instance) {
      instance = new GetAdminAndLearnerByEmailUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const GraderStudentUseCaseFactory = (() => {
  let instance: GraderStudentUseCase;

  const factory = (service: AdminService): GraderStudentUseCase => {
    if (!instance) {
      instance = new GraderStudentUseCase(service);
    }

    return instance;
  };

  return factory;
})();

export const adminUseCaseProviders = {
  createUserUseCaseProvider: {
    provide: CreateUserUseCase,
    useFactory: CreateUserUseCaseFactory,
    deps: [AdminService],
  },
  hasNotificationUseCaseProvider: {
    provide: HasNotificationUseCase,
    useFactory: HasNotificationUseCaseFactory,
    deps: [],
  },

  updateAdminUseCaseProvider: {
    provide: UpdateAdminUseCase,
    useFactory: UpdateAdminUseCaseFactory,
    deps: [AdminService],
  },

  updateLearnerUseCaseProvider: {
    provide: UpdateLearnerUseCase,
    useFactory: UpdateLearnerUseCaseFactory,
    deps: [AdminService],
  },

  getAdminByEmailUseCaseProvider: {
    provide: GetAdminByEmailUseCase,
    useFactory: GetAdminByEmailUseCaseFactory,
    deps: [AdminService],
  },

  getLearnerByEmailUseCaseProvider: {
    provide: GetLearnerByEmailUseCase,
    useFactory: GetLearnerByEmailUseCaseFactory,
    deps: [AdminService],
  },

  getAdminAndLearnerByEmailUseCaseProvider: {
    provide: GetAdminAndLearnerByEmailUseCase,
    useFactory: GetAdminAndLearnerByEmailUseCaseFactory,
    deps: [AdminService],
  },
  graderStudentUseCaseFactoryProvider: {
    provide: GraderStudentUseCase,
    useFactory: GraderStudentUseCaseFactory,
    deps: [AdminService],
  },
};
