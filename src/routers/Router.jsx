import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import SecuredRoute from "./SecuredRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "selectedClass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrolledClass",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "allusers",
        element: (
          <SecuredRoute role="admin">
            <ManageUsers></ManageUsers>
          </SecuredRoute>
        ),
      },
      {
        path: "allclasses",
        element: (
          <SecuredRoute role="admin">
            <ManageClasses></ManageClasses>
          </SecuredRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <SecuredRoute role="instructor">
            <AddClass></AddClass>
          </SecuredRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <SecuredRoute role="instructor">
            <MyClass></MyClass>
          </SecuredRoute>
        ),
      },
    ],
  },
]);

export default router;
