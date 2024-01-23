import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      
    ],
  },

//   {
//     path: "/dashboard",
//     element: (
//       // <PrivateRoutes>
//       <DashboardLayout />
//       // </PrivateRoutes>
//     ),
//     children: [
//       {
//         path: "/dashboard/job",
//         element: <ViewJobs />,
//       },
//       {
//         path: "/dashboard/job/edit/:id",
//         element: <EditJob />,
//       },
//       {
//         path: "/dashboard/job/create",
//         element: <CreateJob />,
//       },
//       {
//         path: "/dashboard/job/applied-jobs",
//         element: <AppliedJobs />,
//       },
//       {
//         path: "/dashboard/blog/create",
//         element: <CreateBlog />,
//       },
//       {
//         path: "/dashboard/blog",
//         element: <ViewBlogs />,
//       },
//       {
//         path: "/dashboard/blog/edit/:id",
//         element: <EditBlog />,
//       },
//       {
//         path: "/dashboard/company",
//         element: <ViewCompany />,
//       },
//       {
//         path: "/dashboard/company/edit/:id",
//         element: <UpdateCompany />,
//       },
//       {
//         path: "/dashboard/company-chart",
//         element: <CompanyChart />,
//       },
//     ],
//   },
]);
export default routes;