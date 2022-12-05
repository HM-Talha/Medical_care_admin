import React from 'react'
import { LoadingIndicator } from '../LoadingIndicator';
import { useStyles } from './style';

type Props = {
  colspan?: number;
  children?: any;
  className?: string;
}

const TableLoader = ({ colspan = 1, children, className = '' }: Props) => {
  const styles = useStyles();
  return (
    <div className={styles.cellRoot}>
      {children ? children : <LoadingIndicator />}
    </div>
  )
}

export default TableLoader