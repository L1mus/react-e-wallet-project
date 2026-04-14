import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/es/storage";
import authReducer from "./slice/authSlice";

const persistConfig = {
  key: "ew-DB",
  storage,
  whitelist: [],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  authReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  devTools: "development",
  middleware: (defaultMiddleware) => {
    return defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    });
  },
});

export const persistor = persistStore(store);
export default store;
