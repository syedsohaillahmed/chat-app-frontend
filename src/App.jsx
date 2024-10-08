import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";

const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        //protected routes
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/" element={<Home />} />

          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/group" element={<Group />} />
        </Route>

        //umprotected routes
        <Route
          path="/login"
          element={
            <ProtectedRoutes user={!user} redirectTo="/">
              <Login />
            </ProtectedRoutes>
          }
        />


        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
