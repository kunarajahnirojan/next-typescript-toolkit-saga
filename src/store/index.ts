import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import { createAxios } from '@/lib/axios';
import rootReducer from '@/store/reducer';
import { rootSaga } from '@/store/saga';

const sagaMiddleware = createSagaMiddleware();

//logging redux actions
const loggerMiddleware = createLogger({
  collapsed: true,
  diff: true,
  duration: true,
  timestamp: false,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([sagaMiddleware, loggerMiddleware]),
});
sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
createAxios(store);

export default store;
