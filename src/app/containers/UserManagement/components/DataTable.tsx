import { CustomTable } from 'app/components/Table';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectQuery } from '../redux/selector';
import { actions as userActions } from '../redux/slice';
type Props = {
  rows: Array<any>;
  columns: Array<any>;
  Actions?: any;
  editComponent?: any;
  editAction?: any;
  deleteAction?:any;
  actions?: Array<any>;
  scrollClass?: any;
  orderField?: string;
  orderDirection?: string;
};

const DataTable = ({
  rows,
  columns,
  Actions,
  editComponent,
  editAction,
  deleteAction,
  actions,
  scrollClass,
  orderField,
  orderDirection,
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doubleClickEvent = row => {
    navigate('/dashboard/user-management/' + row.id);
  };
  // const { orderField, orderDirection } = useSelector(selectQuery);
  const onRowTap = () => {};

  const setOrderByEvent = event => {
    dispatch(
      userActions.setQuery({ name: 'orderField', value: event }),
    );
  };

  const setOrderEvent = event => {
    dispatch(
        userActions.setQuery({ name: 'orderDirection', value: event }),
    );
  };

  return (
    <CustomTable
      Actions={Actions}
      editComponent={editComponent}
      doubleClickEvent={doubleClickEvent}
      singleClickEvent={onRowTap}
      rows={rows}
      editAction={editAction}
      deleteAction={deleteAction}
      order={orderDirection}
      orderBy={orderField}
      columns={columns}
      actions={actions}
      scrollClass={scrollClass}
      setOrderByEvent={setOrderByEvent}
      setOrderEvent={setOrderEvent}
    />
  );
};

export default DataTable;
