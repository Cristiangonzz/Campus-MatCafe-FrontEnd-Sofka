import { CreateCourseUseCase } from 'src/app/application/use-case/course/create-course.use-case';
import { DeleteCourseUseCase } from 'src/app/application/use-case/course/delete-course.use-case';
import { GetAllCourseUseCase } from 'src/app/application/use-case/course/find-all-course.use-case';
import { GetCourseUseCase } from 'src/app/application/use-case/course/get-course.use-case';
import { UpdateCourseUseCase } from 'src/app/application/use-case/course/update-course.use-case';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { GetCourseByNameUseCase } from '../../../application/use-case/course/get-Course-ByName.use-case';

const CreateCourseUseCaseFactory = (() => {
  let instance: CreateCourseUseCase;

  const factory = (service: CourseService): CreateCourseUseCase => {
    if (!instance) {
      instance = new CreateCourseUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const UpdateCourseUseCaseFactory = (() => {
  let instance: UpdateCourseUseCase;

  const factory = (service: CourseService): UpdateCourseUseCase => {
    if (!instance) {
      instance = new UpdateCourseUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const DeleteCourseUseCaseFactory = (() => {
  let instance: DeleteCourseUseCase;

  const factory = (service: CourseService): DeleteCourseUseCase => {
    if (!instance) {
      instance = new DeleteCourseUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const GetCourseUseCaseFactory = (() => {
  let instance: GetCourseUseCase;

  const factory = (service: CourseService): GetCourseUseCase => {
    if (!instance) {
      instance = new GetCourseUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const GetCourseByNameUseCaseFactory = (() => {
  let instance: GetCourseByNameUseCase;

  const factory = (service: CourseService): GetCourseByNameUseCase => {
    if (!instance) {
      instance = new GetCourseByNameUseCase(service);
    }

    return instance;
  };

  return factory;
})();

const GetAllCourseUseCaseFactory = (() => {
  let instance: GetAllCourseUseCase;

  const factory = (service: CourseService): GetAllCourseUseCase => {
    if (!instance) {
      instance = new GetAllCourseUseCase(service);
    }

    return instance;
  };

  return factory;
})();

export const courseUseCaseProviders = {
  createCourseUseCaseProvider: {
    provide: CreateCourseUseCase,
    useFactory: CreateCourseUseCaseFactory,
    deps: [CourseService],
  },
  updateCourseUseCaseProvider: {
    provide: UpdateCourseUseCase,
    useFactory: UpdateCourseUseCaseFactory,
    deps: [CourseService],
  },
  deleteCourseUseCaseProvider: {
    provide: DeleteCourseUseCase,
    useFactory: DeleteCourseUseCaseFactory,
    deps: [CourseService],
  },
  getCourseUseCaseProvider: {
    provide: GetCourseUseCase,
    useFactory: GetCourseUseCaseFactory,
    deps: [CourseService],
  },
  getAllCourseUseCaseProvider: {
    provide: GetAllCourseUseCase,
    useFactory: GetAllCourseUseCaseFactory,
    deps: [CourseService],
  },
  getCourseByNameUseCaseProvider: {
    provide: GetCourseByNameUseCase,
    useFactory: GetCourseByNameUseCaseFactory,
    deps: [CourseService],
  },
};
