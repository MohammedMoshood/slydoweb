// @flow
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import contactReducer from "./reducers/contacts";
import paymentReducer from "./reducers/payments";
import settingReducer from "./reducers/settings";
import slydocommerceReducer from "./reducers/slydocommerce";
import blogReducer from "./reducers/blog";
import storage from "redux-persist/lib/storage";
import integrationReducer from "./reducers/integrations";
import userReducer from "./reducers/user";
import messageReducer from "./reducers/messages"
import profileReducer from './reducers/profile';
const middlewares = [thunk];

// middlewares.push(thunk)

const combineReducer = combineReducers({
      contacts: contactReducer,
      payments: paymentReducer,
      settings: settingReducer,
      slydocommerce: slydocommerceReducer,
      blog: blogReducer,
      integrations: integrationReducer,
      user: userReducer,
      messages: messageReducer,
      // payouts: payoutsReducer
      profile: profileReducer
})

const persistConfig = {
      key: "root",
      storage: storage,
      // stateReconciler: autoMergeLevel2
    };
    
    const pReducer = persistReducer(persistConfig, combineReducer);

export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store);

