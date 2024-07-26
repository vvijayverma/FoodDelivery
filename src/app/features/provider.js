"use client";

import { store, persistor } from "./store";
const { Provider } = require("react-redux");
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
