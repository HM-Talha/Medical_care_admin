import React from 'react';

import { Typography } from '@mui/material';
import { styled } from '@mui/system';

type Props = {
    heading: string;
    className?: string;
};

const Heading = styled((Typography))({
    fontSize: 32,
    fontWeight: 500,
    color :'#3C4858',
    marginTop: 43
})

const PageHeading = ({className='', heading }: Props) => {
    return <Heading className={className}>{heading}</Heading>;
};

export default PageHeading;
