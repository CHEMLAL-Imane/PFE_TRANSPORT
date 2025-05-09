import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './router/ProtectedRoute';

// Admin pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminChauffeurs from './pages/admin/Chauffeurs';
import AdminVehicules from './pages/admin/Vehicules';
import AdminDocuments from './pages/admin/Documents';
import AdminFactures from './pages/admin/Factures';
import AdminTrajets from './pages/admin/Trajets';
import AdminPartenaires from './pages/admin/Partenaires';
import AdminComptabilite from './pages/admin/Comptabilite';

// Responsable pages
import RespDashboard from './pages/responsable/Dashboard';
import RespChauffeurs from './pages/responsable/Chauffeurs';
import RespVehicules from './pages/responsable/Vehicules';
import RespDocuments from './pages/responsable/Documents';
import RespFactures from './pages/responsable/Factures';
import RespTrajets from './pages/responsable/Trajets';
import RespPartenaires from './pages/responsable/Partenaires';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/chauffeurs" element={<ProtectedRoute><AdminChauffeurs /></ProtectedRoute>} />
        <Route path="/admin/vehicules" element={<ProtectedRoute><AdminVehicules /></ProtectedRoute>} />
        <Route path="/admin/documents" element={<ProtectedRoute><AdminDocuments /></ProtectedRoute>} />
        <Route path="/admin/factures" element={<ProtectedRoute><AdminFactures /></ProtectedRoute>} />
        <Route path="/admin/trajets" element={<ProtectedRoute><AdminTrajets /></ProtectedRoute>} />
        <Route path="/admin/partenaires" element={<ProtectedRoute><AdminPartenaires /></ProtectedRoute>} />
        <Route path="/admin/comptabilite" element={<ProtectedRoute><AdminComptabilite /></ProtectedRoute>} />

        {/* Responsable Routes */}
        <Route path="/responsable/dashboard" element={<ProtectedRoute><RespDashboard /></ProtectedRoute>} />
        <Route path="/responsable/chauffeurs" element={<ProtectedRoute><RespChauffeurs /></ProtectedRoute>} />
        <Route path="/responsable/vehicules" element={<ProtectedRoute><RespVehicules /></ProtectedRoute>} />
        <Route path="/responsable/documents" element={<ProtectedRoute><RespDocuments /></ProtectedRoute>} />
        <Route path="/responsable/factures" element={<ProtectedRoute><RespFactures /></ProtectedRoute>} />
        <Route path="/responsable/trajets" element={<ProtectedRoute><RespTrajets /></ProtectedRoute>} />
        <Route path="/responsable/partenaires" element={<ProtectedRoute><RespPartenaires /></ProtectedRoute>} />

        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
