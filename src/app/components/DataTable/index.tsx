import { CustomTable } from 'app/components/Table';
import { selectQuery } from 'app/containers/UserManagement/redux/selector';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { selectQuery } from '../redux/selector';

type Props = {
  rows: Array<any>;
  columns: Array<any>;
  Actions?: any;
  editComponent?: any;
  editAction?: any;
  editActionDbl?: any;
  deleteAction?:any;
  actions?: Array<any>;
  scrollClass?: any;
  onRowClick?: any;
  onRowDoubleClick?: any;
  setQuery: (name: string, value: string) => void;
  orderField?: any;
  orderDirection?: any;
  loading?: boolean;
  page?:string;
  HeaderActions?:any;
  showSelect?:boolean;
  isPointerCursor?:boolean;
};

const DataTable = ({
  rows,
  columns,
  Actions,
  HeaderActions,
  editComponent,
  editAction,
  editActionDbl,
  deleteAction,
  actions,
  scrollClass,
  onRowClick,
  onRowDoubleClick,
  setQuery,
  orderField,
  orderDirection,
  page,
  loading = false,
  showSelect,
  isPointerCursor
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doubleClickEvent = row => {
    onRowDoubleClick(row);
  };
  // const { orderField, orderDirection } = useSelector(selectQuery);
  const onRowTap = e => {
    {
      onRowClick && onRowClick(e);
    }
  };

  const setOrderByEvent = (event: any) => {
    setQuery('orderField', event);
  };

  const setOrderEvent = (event: any) => {
    setQuery('orderDirection', event);
  };

  return (
    <CustomTable
      loading={loading}
      Actions={Actions}
      editComponent={editComponent}
      doubleClickEvent={doubleClickEvent}
      singleClickEvent={onRowTap}
      rows={rows}
      onRowDoubleClick={onRowDoubleClick}
      editAction={editAction}
      editActionDbl={editActionDbl}
      deleteAction={deleteAction}
      order={orderDirection}
      orderBy={orderField}
      columns={columns}
      actions={actions}
      scrollClass={scrollClass}
      setOrderByEvent={setOrderByEvent}
      setOrderEvent={setOrderEvent}
      page={page}
      HeaderActions={HeaderActions}
      showSelect={showSelect}
      isPointerCursor={isPointerCursor}
    />
  );
};

export default DataTable;
