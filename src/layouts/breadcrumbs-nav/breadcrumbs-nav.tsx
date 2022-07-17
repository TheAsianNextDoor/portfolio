import styles from './breadcrumbs-nav.module.scss';

import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Outlet, useLocation, NavLink } from 'react-router-dom';

export const BreadcrumbsNav = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={styles['breadcrumbs-nav']}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link
            variant='h5'
            underline='hover'
            sx={{ display: 'flex', alignItems: 'center' }}
            color='inherit'
            component={NavLink}
            to='/'
          >
            Home
          </Link>

          {pathname.includes('contact') && (
            <Link
              variant='h5'
              underline='hover'
              sx={{ display: 'flex', alignItems: 'center' }}
              color='inherit'
              component={NavLink}
              to='/contact'
            >
              Contact
            </Link>
          )}

          {pathname.includes('case-studies') && (
            <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center' }} color='text.primary'>
              Case Studies
            </Typography>
          )}
        </Breadcrumbs>
      </div>
      <Outlet />
    </>
  );
};
