import { CreateAdminUseCase } from "src/app/application/use-case/admin/create-admin.use-case.application";
import { CreateLearnerUseCase } from "src/app/application/use-case/admin/create-learner.use-case.application";
import { GetAdminByEmailUseCase } from "src/app/application/use-case/admin/get-admin-by-email.use-case.application";
import { GetLearnerByEmailUseCase } from "src/app/application/use-case/admin/get-learner-by-email.use-case.application";
import { GraderStudentUseCase } from "src/app/application/use-case/admin/grader-student.use-case.application";
import { UpdateAdminUseCase } from "src/app/application/use-case/admin/update-admin.use-case.application";
import { UpdateLearnerUseCase } from "src/app/application/use-case/admin/update-learner.use-case.application";
import { CreateCourseUseCase } from "src/app/application/use-case/course/create-course.use-case";
import { DeleteCourseUseCase } from "src/app/application/use-case/course/delete-course.use-case";
import { GetAllCourseUseCase } from "src/app/application/use-case/course/find-all-course.use-case";
import { GetCourseUseCase } from "src/app/application/use-case/course/get-course.use-case";
import { UpdateCourseUseCase } from "src/app/application/use-case/course/update-course.use-case";
import { AdminService } from "src/app/domain/services/admin.service.domain";
import { CourseService } from "src/app/domain/services/course.service.domain";



const CreateAdminUseCaseFactory = 
(() => {
    let instance: CreateAdminUseCase;
  
    const factory = (service: AdminService): CreateAdminUseCase => {
      if (!instance) {
        instance = new CreateAdminUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();
const CreateLearnerUseCaseFactory = 
(() => {
    let instance: CreateLearnerUseCase;
  
    const factory = (service: AdminService): CreateLearnerUseCase => {
      if (!instance) {
        instance = new CreateLearnerUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();
const UpdateAdminUseCaseFactory = 
(() => {
    let instance: UpdateAdminUseCase;
  
    const factory = (service: AdminService): UpdateAdminUseCase => {
      if (!instance) {
        instance = new UpdateAdminUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();
const UpdateLearnerUseCaseFactory = 
(() => {
    let instance: UpdateLearnerUseCase;
  
    const factory = (service: AdminService): UpdateLearnerUseCase => {
      if (!instance) {
        instance = new UpdateLearnerUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();



const GetAdminByEmailUseCaseFactory = 
(() => {
    let instance: GetAdminByEmailUseCase;
  
    const factory = (service: AdminService): GetAdminByEmailUseCase => {
      if (!instance) {
        instance = new GetAdminByEmailUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();

const GetLearnerByEmailUseCaseFactory = 
(() => {
    let instance: GetLearnerByEmailUseCase;
  
    const factory = (service: AdminService): GetLearnerByEmailUseCase => {
      if (!instance) {
        instance = new GetLearnerByEmailUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();
const GraderStudentUseCaseFactory = 
(() => {
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

    createAdminUseCaseProvaider : 
    {
        provide: CreateAdminUseCase,
        useFactory: CreateAdminUseCaseFactory,
        deps: [AdminService],
    },

    createLearnerUseCaseProvaider : 
    {
        provide: CreateLearnerUseCase,
        useFactory: CreateLearnerUseCaseFactory,
        deps: [AdminService],
    },

    updateAdminUseCaseProvaider : 
    {
        provide: UpdateAdminUseCase,
        useFactory: UpdateAdminUseCaseFactory,
        deps: [AdminService],
    },

    updateLearnerUseCaseProvaider : 
    {
        provide: UpdateLearnerUseCase,
        useFactory: UpdateLearnerUseCaseFactory,
        deps: [AdminService],
    },

    getAdminByEmailUseCaseProvaider : 
    {
        provide: GetAdminByEmailUseCase,
        useFactory: GetAdminByEmailUseCaseFactory,
        deps: [AdminService],
    },

    getLearnerByEmailUseCaseProvaider : 
    {
        provide: GetLearnerByEmailUseCase,
        useFactory: GetLearnerByEmailUseCaseFactory,
        deps: [AdminService],
    },

    graderStudentUseCaseFactoryProvaider : 
    {
        provide: GraderStudentUseCase,
        useFactory: GraderStudentUseCaseFactory,
        deps: [AdminService],
    },
}