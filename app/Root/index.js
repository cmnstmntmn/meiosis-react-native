const initial = (appName) => {
  return {
    application: {
      name: appName,
    },
    counter: 0,
  };
};

const Actions = (update) => {
  return {
    increment: () => {
      update({
        counter: (x) => x + 1,
      });
    },
  };
};

export const root = {
  initial,
  Actions,
};

export {Root} from './view';
