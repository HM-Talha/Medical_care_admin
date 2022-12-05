import theme from 'styles/theme/mui';

import { styled } from '@mui/system';

export const TextButton = styled(('button'))({
  background: 'none',
  outline: 'none',
  padding: 0,
  margin: 0,
  border: 'none',
  color: theme.palette.primary.main,
  cursor: 'pointer',
  '&:hover': {
  opacity: 0.8,
  textDecoration: 'underline',
  },
 '&:active': {
  opacity: 0.4,
  }
});
