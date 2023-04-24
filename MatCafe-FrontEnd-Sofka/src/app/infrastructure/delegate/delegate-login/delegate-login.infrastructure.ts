import { GetUserLocalStorageUseCase } from "src/app/application/use-case/login/get-user-local-storage.use.case";
import { HasUserUseCase } from "src/app/application/use-case/login/has-user.use-case";
import { SetUserLocalStorageUseCase } from "src/app/application/use-case/login/set-user-local-storage.use-case";



const GetUserLocalStrotageUseCaseFactory = 
(() => {
    let instance: GetUserLocalStorageUseCase;
  
    const factory = (): GetUserLocalStorageUseCase => {
      if (!instance) {
        instance = new GetUserLocalStorageUseCase();
      }
  
      return instance;
    };
  
    return factory;
})();


const HasUserLocalStrotageUseCaseFactory = 
(() => {
    let instance: HasUserUseCase;
  
    const factory = (): HasUserUseCase => {
      if (!instance) {
        instance = new HasUserUseCase();
      }
  
      return instance;
    };
  
    return factory;
})();

const SetUserLocalStrotageUseCaseFactory = 
(() => {
    let instance: SetUserLocalStorageUseCase;
  
    const factory = (): SetUserLocalStorageUseCase => {
      if (!instance) {
        instance = new SetUserLocalStorageUseCase();
      }
  
      return instance;
    };
  
    return factory;
})();



export const loginUseCaseProviders = {

    getUserLocalStrotageUseCaseProvaider : 
    {
        provide: GetUserLocalStorageUseCase,
        useFactory: GetUserLocalStrotageUseCaseFactory,
        deps: [],
    },
    hasUserUseCaseProvaider : 
    {
        provide: HasUserUseCase,
        useFactory: HasUserLocalStrotageUseCaseFactory,
        deps: [],
    },
    setUserLocalStrotageUseCaseProvaider : 
    {
        provide: SetUserLocalStorageUseCase,
        useFactory: SetUserLocalStrotageUseCaseFactory,
        deps: [],
    },

}