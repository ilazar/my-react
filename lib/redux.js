(() => {
  const currentState = {};
  const listeners = [];

  const getState = () => currentState;

  const subscribe = listener => {
    listeners.push(listener);
    const unsubscribe = () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
    return unsubscribe;
  };

  const createStore = reducer => {
    const dispatch = action => {
      const prevState = currentState;
      currentState = reducer(currentState, action);
      if (currentState !== prevState) {
        for (let i = 0; i < listeners.length; i++) {
          const listener = listeners[i]
          listener();
        }
      }
    };
    return {
      dispatch,
      getState,
      subscribe,
    }
  };

  window.createStore = createStore;
})();
