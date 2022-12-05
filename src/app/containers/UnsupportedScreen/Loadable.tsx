/**
 * Asynchronously loads the component for HomePage
 */

import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { lazyLoad } from 'utils/loadable';

export const UnsupportedScreen = lazyLoad(
    () => import('./index'),
    module => module.UnsupportedScreen,
    {
        fallback: (
            <LoadingIndicator />
        ),
    },
);
