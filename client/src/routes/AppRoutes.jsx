import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Collections = lazy(() => import('../pages/Collections'));
const CustomizedBlouses = lazy(() => import('../pages/CustomizedBlouses'));
const WeddingDresses = lazy(() => import('../pages/WeddingDresses'));
const RentalDresses = lazy(() => import('../pages/RentalDresses'));
const TailoringClasses = lazy(() => import('../pages/TailoringClasses'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Contact = lazy(() => import('../pages/Contact'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collections" element={<Collections />} />
          <Route path="customized-blouses" element={<CustomizedBlouses />} />
          <Route path="wedding-dresses" element={<WeddingDresses />} />
          <Route path="rental-dresses" element={<RentalDresses />} />
          <Route path="tailoring-classes" element={<TailoringClasses />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
