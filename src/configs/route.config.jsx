import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

const delayRoute = (ms = 500) => {
  return (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        })
    );
};

const homePage = {
  path: "/",
  title: "Home",
  component: lazy(() => delayRoute()(import("../modules/home/features/index"))),
};

export const publicRouteData = [homePage];

const publicRoutes = () => {
  return publicRouteData.map((route, index) => {
    const { component: Component, path, ...rest } = route;
    return (
      <Route
        {...rest}
        key={`public-route-${index}`}
        path={path}
        element={
          <AppLayout>
            <Suspense fallback={() => <div>loading...</div>}>
              <Component />
            </Suspense>
          </AppLayout>
        }
      />
    );
  });
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>{publicRoutes()}</Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
