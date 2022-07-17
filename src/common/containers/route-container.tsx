import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { BreadcrumbsNav } from 'layouts';

const Home = lazy(() => import('pages').then((res) => ({ default: res.Home })));
const CaseStudies = lazy(() => import('pages').then((res) => ({ default: res.CaseStudies })));
const Contact = lazy(() => import('pages').then((res) => ({ default: res.Contact })));

export const RouteContainer = () => {
  return (
    <Suspense fallback={<div> </div>}>
      <Routes>
        <Route element={<BreadcrumbsNav />}>
          <Route path='/' element={<Home />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
