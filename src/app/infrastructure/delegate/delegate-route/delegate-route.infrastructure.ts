import { CreateRouteUseCase } from "src/app/application/use-case/route/create-route.use-case";
import { DeleteRouteUseCase } from "src/app/application/use-case/route/delete-route.use-case";
import { GetAllRouteUseCase } from "src/app/application/use-case/route/find-all-route.use-case";
import { GetRouteByNameUseCase } from "src/app/application/use-case/route/get-Route-ByName.use-case";
import { GetRouteUseCase } from "src/app/application/use-case/route/get-route.use-case";
import { UpdateRouteUseCase } from "src/app/application/use-case/route/update-route.use-case";
import { RouteService } from "src/app/domain/services/route.service.domain";

const CreateRouteUseCaseFactory = 
(() => {
    let instance: CreateRouteUseCase;
  
    const factory = (service: RouteService): CreateRouteUseCase => {
      if (!instance) {
        instance = new CreateRouteUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();

const UpdateRouteUseCaseFactory = 
(() => {
    let instance: UpdateRouteUseCase;
  
    const factory = (service: RouteService): UpdateRouteUseCase => {
      if (!instance) {
        instance = new UpdateRouteUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();

const DeleteRouteUseCaseFactory = 
(() => {
    let instance: DeleteRouteUseCase;
  
    const factory = (service: RouteService): DeleteRouteUseCase => {
      if (!instance) {
        instance = new DeleteRouteUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();

const GetRouteUseCaseFactory = 
(() => {
    let instance: GetRouteUseCase;
  
    const factory = (service: RouteService): GetRouteUseCase => {
      if (!instance) {
        instance = new GetRouteUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();

const GetAllRouteUseCaseFactory = 
(() => {
    let instance: GetAllRouteUseCase;
  
    const factory = (service: RouteService): GetAllRouteUseCase => {
      if (!instance) {
        instance = new GetAllRouteUseCase(service);
      }
  
      return instance;
    };
  
    return factory;
})();

const GetRouteByNameUseCaseFactory = (() => {
  let instance: GetRouteByNameUseCase;

  const factory = (service: RouteService): GetRouteByNameUseCase => {
    if (!instance) {
      instance = new GetRouteByNameUseCase(service);
    }

    return instance;
  };

  return factory;
})();


export const routeUseCaseProviders = {

    createRouteUseCaseProvaider : 
    {
        provide: CreateRouteUseCase,
        useFactory: CreateRouteUseCaseFactory,
        deps: [RouteService],
    },
    updateRouteUseCaseProvaider : 
    {
        provide: UpdateRouteUseCase,
        useFactory: UpdateRouteUseCaseFactory,
        deps: [RouteService],
    },
    deleteRouteUseCaseProvaider : 
    {
        provide: DeleteRouteUseCase,
        useFactory: DeleteRouteUseCaseFactory,
        deps: [RouteService],
    },
    getRouteUseCaseProvaider : 
    {
        provide: GetRouteUseCase,
        useFactory: GetRouteUseCaseFactory,
        deps: [RouteService],
    },
    getAllRouteUseCaseProvaider : 
    {
        provide: GetAllRouteUseCase,
        useFactory: GetAllRouteUseCaseFactory,
        deps: [RouteService],
    },
    getRouteByNameUseCaseProvaider: {
      provide: GetRouteByNameUseCase,
      useFactory: GetRouteByNameUseCaseFactory,
      deps: [RouteService],
    }
}