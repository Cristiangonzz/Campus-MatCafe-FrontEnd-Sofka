import { GetUserLocalStorageUseCase } from 'src/app/application/use-case/login/get-user-local-storage.use.case';
import { HasRolUseCase } from 'src/app/application/use-case/login/has-rol-user.use-case.application';
import { HasUserUseCase } from 'src/app/application/use-case/login/has-user.use-case';
import { SetUserLocalStorageUseCase } from 'src/app/application/use-case/login/set-user-local-storage.use-case';

const GetUserLocalStrotageUseCaseFactory = (() => {
  let instance: GetUserLocalStorageUseCase;

  const factory = (): GetUserLocalStorageUseCase => {
    if (!instance) {
      instance = new GetUserLocalStorageUseCase();
    }

    return instance;
  };

  return factory;
})();

const HasUserLocalStrotageUseCaseFactory = (() => {
  let instance: HasUserUseCase;

  const factory = (): HasUserUseCase => {
    if (!instance) {
      instance = new HasUserUseCase();
    }

    return instance;
  };

  return factory;
})();
const HasRolLocalStrotageUseCaseFactory = (() => {
  let instance: HasRolUseCase;

  const factory = (): HasRolUseCase => {
    if (!instance) {
      instance = new HasRolUseCase();
    }

    return instance;
  };

  return factory;
})();


const SetUserLocalStrotageUseCaseFactory = (() => {
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
  getUserLocalStrotageUseCaseProvider: {
    provide: GetUserLocalStorageUseCase,
    useFactory: GetUserLocalStrotageUseCaseFactory,
    deps: [],
  },
  hasUserUseCaseProvider: {
    provide: HasUserUseCase,
    useFactory: HasUserLocalStrotageUseCaseFactory,
    deps: [],
  },
  hasRolUseCaseProvider: {
    provide: HasRolUseCase,
    useFactory: HasRolLocalStrotageUseCaseFactory,
    deps: [],
  },
  setUserLocalStrotageUseCaseProvider: {
    provide: SetUserLocalStorageUseCase,
    useFactory: SetUserLocalStrotageUseCaseFactory,
    deps: [],
  },
};
