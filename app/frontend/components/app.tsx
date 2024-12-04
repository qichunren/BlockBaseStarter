import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages1 from '../pages/pages1';
import Pages2 from '../pages/pages2';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';

import UsersPage from '../pages/users';
import { AuthProvider } from '@/contexts/auth-context';
import PrivateRoute from '@/components/private-route';

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const AppContent = () => {

  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {/* TODO: 面包屑 */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Routes>
            <Route path='/app/pages1' element={<Pages1 />} />
            <Route path='/app/pages2' element={<Pages2 />} />
            <Route path='/app/login' element={<Login />} />
            <Route path='/app/register' element={<Register />} />
            <Route 
              path='/app/users' 
              element={
                <PrivateRoute>
                  <UsersPage />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
        </SidebarInset>
      </SidebarProvider>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;