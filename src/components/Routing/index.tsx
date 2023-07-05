import { Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTES } from './constants';
import DashboardLayout from '../DashboardLayout/DashboardLayout';

export default function Routing() {
  return (
    <DashboardLayout>
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </DashboardLayout>
  );
}
