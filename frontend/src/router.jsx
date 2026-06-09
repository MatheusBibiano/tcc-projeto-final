import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RatingContextProvider } from "./contexts/RatingsContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ColabContextProvider } from "./contexts/ColabContext";
import { ClassesContextProvider } from "./contexts/ClassesContext";

import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { RatingsPage } from "./pages/ColabPages/RatingsPage";
import { FormPage } from "./pages/FormPage";
import { ClassesPage } from "./pages/ColabPages/ClassesPage";
import { AddClassPage } from "./pages/ColabPages/AddClassPage";
import { RatingPage } from "./pages/ColabPages/RatingPage";
import { ClassPage } from "./pages/ColabPages/ClassPage";
import { ClassesAvailable } from "./pages/StudentPages/ClassesAvailable";
import { StudentContextProvider } from "./contexts/StudentContext";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/"
          element={
            <AuthContextProvider>
              <ColabContextProvider>
                <StudentContextProvider>
                  <LoginPage />
                </StudentContextProvider>
              </ColabContextProvider>
            </AuthContextProvider>
          }
        />
        <Route
          path="/avaliacoes"
          element={
            <AuthContextProvider>
              <ClassesContextProvider>
                <ColabContextProvider>
                  <RatingContextProvider>
                    <RatingsPage />
                  </RatingContextProvider>
                </ColabContextProvider>
              </ClassesContextProvider>
            </AuthContextProvider>
          }
        />
        <Route
          path="/avaliar-aula"
          element={
            <RatingContextProvider>
              <FormPage />
            </RatingContextProvider>
          }
        />
        <Route
          path="/aulas"
          element={
            <AuthContextProvider>
              <ClassesContextProvider>
                <ClassesPage />
              </ClassesContextProvider>
            </AuthContextProvider>
          }
        />
        <Route
          path="/adicionar-aula"
          element={
            <AuthContextProvider>
              <ClassesContextProvider>
                <AddClassPage />
              </ClassesContextProvider>
            </AuthContextProvider>
          }
        />
        <Route
          path="/avaliacao"
          element={
            <AuthContextProvider>
              <RatingPage />
            </AuthContextProvider>
          }
        />
        <Route
          path="/aula"
          element={
            <AuthContextProvider>
              <ClassesContextProvider>
                <ClassPage type="view" />
              </ClassesContextProvider>
            </AuthContextProvider>
          }
        />
        <Route
          path="/editar-aula"
          element={
            <AuthContextProvider>
              <ClassesContextProvider>
                <ClassPage type="edit" />
              </ClassesContextProvider>
            </AuthContextProvider>
          }
        />

        {/* Student Routes */}
        <Route
          path="/aulas-disponiveis"
          element={
            <AuthContextProvider>
              <ClassesContextProvider>
                <ClassesAvailable />
              </ClassesContextProvider>
            </AuthContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
