import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { UserSetup } from './pages/UserSetup';
import { Dashboard } from './pages/Dashboard';
import { UserProfile } from './pages/UserProfile';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { MainLayout } from './components/layout/MainLayout';
import { ComingSoonPage } from './components/tools/ComingSoonPage';
import { Eye, FileText, CheckSquare, Search, ClipboardCheck, FileSpreadsheet } from 'lucide-react';

export default function App() {
  const tools = [
    {
      path: "field-observations",
      icon: <Eye className="w-12 h-12" />,
      title: "Field Observations",
      description: "Record and track field safety observations in real-time with our advanced observation system.",
      color: "bg-[#007AFF]"
    },
    {
      path: "digital-permits",
      icon: <FileText className="w-12 h-12" />,
      title: "Digital Permits",
      description: "Streamline your permit workflows with our digital permit management system.",
      color: "bg-[#4CD964]"
    },
    {
      path: "digital-inspections",
      icon: <CheckSquare className="w-12 h-12" />,
      title: "Digital Inspections",
      description: "Conduct and manage comprehensive safety inspections with our digital tools.",
      color: "bg-[#FFD700]"
    },
    {
      path: "investigations",
      icon: <Search className="w-12 h-12" />,
      title: "Investigations",
      description: "Document and analyze safety incidents with our advanced investigation tools.",
      color: "bg-[#FF3B30]"
    },
    {
      path: "jha",
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Job Hazard Analysis",
      description: "Create and manage comprehensive job hazard analyses with our digital JHA system.",
      color: "bg-[#FF9500]"
    },
    {
      path: "dar",
      icon: <FileSpreadsheet className="w-12 h-12" />,
      title: "Daily Activity Reports",
      description: "Track and report daily work activities with our streamlined DAR system.",
      color: "bg-[#5856D6]"
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/setup" element={<UserSetup />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <MainLayout>
                <UserProfile />
              </MainLayout>
            </PrivateRoute>
          }
        />
        {['/team', '/notifications', '/reports', '/settings'].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute>
                <MainLayout>
                  <ComingSoonPage
                    title={path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                    description={`The ${path.slice(1)} feature is coming soon.`}
                    icon={<FileText className="w-12 h-12" />}
                    color="bg-[#FFD700]"
                  />
                </MainLayout>
              </PrivateRoute>
            }
          />
        ))}
        {tools.map((tool) => (
          <Route
            key={tool.path}
            path={`/${tool.path}`}
            element={
              <PrivateRoute>
                <MainLayout>
                  <ComingSoonPage {...tool} />
                </MainLayout>
              </PrivateRoute>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}