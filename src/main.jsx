import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// configure axios base configurations
import axios from 'axios';
import.meta.env.VITE_TOKEN;

const token = import.meta.env.VITE_TOKEN || '';
axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
  withCredentials: false,
};

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || window.location.href;

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
