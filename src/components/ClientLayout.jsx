// components/ClientLayout.js
"use client"; // Ensure this component is a Client Component

import { Provider } from 'react-redux';
import { store } from '../store/store';
import Header from './header/Header';
import Footer from './footer/Footer';

const ClientLayout = ({ children }) => (
  <Provider store={store}>
    <Header />
    {children}
    <Footer />
  </Provider>
);

export default ClientLayout;
