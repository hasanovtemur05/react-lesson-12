import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import {SignIn, AdminLayout, StudentLayout, Student, Teacher} from '@pages'; 

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />
        {/* Admin */}
        <Route path="admin-layout" element={<AdminLayout/>}>
          <Route path="student" element={<Student />} />
          <Route path="teacher" element={<Teacher />} />
        </Route>
        
        {/* Student */}
        <Route path="student-layout" element={<StudentLayout/>}>
          <Route path="student" element={<Student />} />
          <Route path="teacher" element={<Teacher />} />
        </Route>

        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;
