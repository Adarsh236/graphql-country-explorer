import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client/react/context/ApolloProvider";
import { apolloClient } from "./graphql/client.ts";
import AppRoutes from "./router/routes.tsx";
import { store } from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </StrictMode>
);
