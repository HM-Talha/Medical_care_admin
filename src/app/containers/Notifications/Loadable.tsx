import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { lazyLoad } from 'utils/loadable';

export const UserManagement = lazyLoad(
  () => import('./index'),
  module => module.default,
  {
    fallback: <LoadingIndicator />,
  },
);