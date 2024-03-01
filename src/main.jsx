import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "./components/spinner.component.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
