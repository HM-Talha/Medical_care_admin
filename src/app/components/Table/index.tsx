import clsx from "clsx";
import React from "react";
import download from "../../containers/DailyActivity/assets/Download.png";

import {
  Box,
  Checkbox,
  IconButton,
  Paper,
  Radio,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import { useStyles } from "./styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import imgDelete from "../../assets/Delete.png";
import fileView from "../../assets/FileView.png";
import imgEdit from "../../assets/Edit.png";

import { withStyles } from "@mui/styles";
import disableDelete from "../../assets/disableDelete.png";

export const StyledTableCell = styled(TableCell)({
  fontSize: 15,
  lineHeight: "20px",
  backgroundColor: "transparent",
  color: "#3C4858",
  borderRight: "1px solid #C4C4C4",
  textAlign: "unset",
  "&:first-of-type": {
    borderLeft: "1px solid #C4C4C4",
  },
  whiteSpace: "nowrap",
});

export const StyledTableRow = styled(TableRow)({
  "&:hover": {
    backgroundColor: "#F5F5F540",
  },
  // '&:nth-of-type(odd)': {
  //   backgroundColor: 'transparent',
  // },
});
export const TableHeader = ({
  columnValues,
  classes,
  order,
  orderBy,
  Actions,
  onRequestSort,
  showSelect,
  selectLabel,
  showSelectAll,
  actionsAt,
  actions,
  selectAllHandler,
  isAllSelected,
  HeaderActions,
  isPointerCursor,
  page,
}) => {
  const createSortHandler =
    (property) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  console.log("entry");

  return (
    <TableHead>
      <TableRow>
        {HeaderActions && (
          <TableCell
            className={clsx(
              classes.textCenterClass,
              classes.removeLeft,
              classes.cellHeadWithoutWidth
            )}
            key="Actions"
            style={{ width: 10, paddingLeft: "25px" }}
          >
            {" "}
            <Checkbox color="info" style={{ paddingLeft: "0px" }} />
          </TableCell>
        )}

        {Actions && !HeaderActions && (
          <TableCell
            className={
              page === "contactList"
                ? clsx(
                    classes.textCenterClass,
                    classes.removeLeft,
                    classes.cellHeadWithoutWidth
                  )
                : clsx(
                    classes.textCenterClass,
                    classes.removeLeft,
                    classes.cellHead
                  )
            }
            key="Actions"
            style={{ width: 10, paddingLeft: "25px", textAlign: "unset" }}
            // style={{ textAlign:'left' }}
          >
            {" "}
            Actions
          </TableCell>
        )}
        {showSelect && (
          <TableCell
            className={clsx(
              classes.textCenterClass,
              classes.removeLeft,
              classes.cellHead
            )}
            style={{
              minWidth: 97,
            }}
          >
            {showSelect && (
              <Checkbox
                color="info"
                value={isAllSelected}
                checked={isAllSelected}
                onChange={(e) => {
                  // console.log(e.target.value, e.target.checked)
                  selectAllHandler(e.target.checked);
                }}
                className={classes.headerCheckbox}
                disableRipple
              />
            )}
            {selectLabel}
          </TableCell>
        )}
        {columnValues.map((headCell, index) => (
          <>
            {console.log(headCell)}
            <TableCell
              className={clsx(
                classes.textCenterClass,
                classes.removeLeft,
                classes.cellHeadWithoutWidth
              )}
              key={headCell.id + "_" + index}
              align={headCell.align}
              style={{
                alignItems: "end",

                width: headCell.width ? headCell.width : "auto",
                minWidth: headCell.minWidth,
                maxWidth: headCell.maxWidth ? headCell.maxWidth : "auto",
                textAlign: headCell?.align,
                ...(headCell.centeredHeader && {
                  textAlign: "left",
                }),
                ...headCell.position,
              }}
            >
              {/* {headCell.sortValue && headCell.sortValue !== "" && (
              <TableSortLabel
                IconComponent={ArrowDownwardIcon}
                className={classes.tableSort}
                active={true}
                direction={
                  orderBy !== headCell.sortValue && order
                    ? order.toLocaleLowerCase()
                    : "asc"
                }
                onClick={createSortHandler(headCell.sortValue)}
              >
                {headCell.label}
              </TableSortLabel>
            )} */}
              {/* {!(headCell.sortValue && headCell.sortValue !== "") &&
              headCell.label} */}

              {headCell.label === "checkBox" ? (
                <Checkbox
                  color="info"
                  value={isAllSelected}
                  checked={isAllSelected}
                  onChange={(e) => {
                    // console.log(e.target.value, e.target.checked)
                    selectAllHandler(e.target.checked);
                  }}
                  className={classes.headerCheckbox}
                  disableRipple
                />
              ) : (
                headCell.label
              )}
            </TableCell>
          </>
        ))}
      </TableRow>
    </TableHead>
  );
};

var columnValues: any = [];
export const CustomTable = ({ rows, ...props }) => {
  const [selected, setSelected] = React.useState<any>("");
  const styles = useStyles();
  let { actionsAt } = props;
  const {
    id,
    order,
    doubleClickEvent,
    setOrderEvent,
    setOrderByEvent,
    orderBy,
    columns,
    Actions,
    singleClickEvent,
    selectAllHandler,
    isAllSelected,
    // editComponent,
    editAction,
    editActionDbl,
    deleteAction,
    className,
    scrollClass = "",
    showSelect = false,
    selectLabel = "Select",
    showSelectAll = true,
    actions,
    selectHandler,
    isChecked,
    isRadioCheck,
    loading,
    page,
    HeaderActions,
    isPointerCursor,
    onRowDoubleClick,
  } = props;

  if (!columns) {
    columnValues = [];
    if (rows.length > 0) {
      Object.keys(rows[0]).map((value) => {
        let obj = {
          id: value,
          label: value,
          sortValue: "",
          format: (valuee) => valuee[value],
        };
        columnValues.push(obj);
        return <span key={"uniquefield-" + id}>value</span>;
      });
    }
  } else {
    columnValues = columns;
  }

  const MySwitch = withStyles({
    root: {
      width: 33,
      height: 14,
      padding: 0,
      margin: 5,
    },
    switchBase: {
      padding: 3,
      color: "#387E8D",
      "&$checked": {
        color: "#387E8D",
      },
      "&$checked + $track": {
        backgroundColor: "#FFF",
        opacity: 1,
      },
      "&.MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track": {
        backgroundColor: "#FFF",
      },
    },
    thumb: {
      width: 7,
      height: 7,
    },
    focusVisible: {},
    checked: {
      color: "#387E8D",
      "&$checked": {
        color: "#387E8D",
        opacity: 1,
      },
      "&$checked + $track": {
        backgroundColor: "#FFFF",
        opacity: 1,
      },
      "&.MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track": {
        backgroundColor: "#FFF",
      },
    },
    track: {
      borderRadius: 30,
      border: `2px solid #387E8D`,
      backgroundColor: "#FFF",
      opacity: 1,
      transition: "#387E8D",
    },
  })(Switch);

  const selectRow = (value) => (event: React.MouseEvent<unknown>) => {
    // console.log(value, event);
    if (value.Id === selected) {
      setSelected(null);
      if (singleClickEvent) {
        singleClickEvent(null);
      }
    } else {
      setSelected(value.Id);
      if (singleClickEvent) {
        singleClickEvent(value);
      }
    }
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property) => {
    const isAsc = orderBy === property && order === "ASC";
    if (orderBy === property && order === "DESC") {
      setOrderByEvent("");
      setOrderEvent("");
    } else {
      setOrderEvent(isAsc ? "DESC" : "ASC");
      setOrderByEvent(property);
    }
  };

  actionsAt = actionsAt ? actionsAt - 1 : columnValues.length;

  return (
    <Paper id={id} className={styles.root} elevation={0}>
      <TableContainer
        className={clsx(styles.container, className, scrollClass)}
      >
        <Table className={styles.table} stickyHeader>
          <TableHeader
            isAllSelected={isAllSelected}
            columnValues={columnValues}
            classes={styles}
            Actions={Actions}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            showSelect={showSelect}
            selectLabel={selectLabel}
            showSelectAll={showSelectAll}
            actionsAt={actionsAt}
            actions={actions}
            selectAllHandler={selectAllHandler}
            HeaderActions={HeaderActions}
            isPointerCursor={isPointerCursor}
            page={page}
          />
          <TableBody className={styles.tableBody}>
            {!loading && rows.length === 0 && (
              <StyledTableRow>
                <StyledTableCell
                  colSpan={columnValues.length + 1}
                  style={{ textAlign: "center" }}
                >
                  No items found
                </StyledTableCell>
              </StyledTableRow>
            )}
            {rows.map((row: any, index) => {
              console.log("roe", row);

              let checked = (isChecked && isChecked(row)) || false;
              let radioCheck = (isRadioCheck && isRadioCheck(row)) || false;
              return (
                <React.Fragment key={index}>
                  <StyledTableRow
                    tabIndex={-1}
                    key={index}
                    onClick={() => singleClickEvent(row)}
                    onDoubleClick={() => doubleClickEvent(row)}
                  >
                    {Actions && (
                      <StyledTableCell>
                        {Actions.search("Delete") !== -1 && (
                          <IconButton
                            className={
                              page === "userDetails"
                                ? styles.overrideIconButton
                                : ""
                            }
                            onClick={() =>
                              page === "userGroup"
                                ? row?.numberOfAssignedUsers !== "0"
                                  ? null
                                  : deleteAction(row)
                                : deleteAction(row)
                            }
                          >
                            {page === "userGroup" ? (
                              <img
                                height={"18px"}
                                src={
                                  row?.numberOfAssignedUsers === "0"
                                    ? imgDelete
                                    : disableDelete
                                }
                              ></img>
                            ) : (
                              <img height="18px" src={imgDelete}></img>
                            )}
                          </IconButton>
                        )}
                        {Actions.search("Edit") !== -1 && (
                          <IconButton
                            onClick={() => editAction(row)}
                            onDoubleClick={() => onRowDoubleClick(row)}
                          >
                            <img height="18px" src={imgEdit}></img>
                          </IconButton>
                        )}

                        {Actions.search("FileView") !== -1 && (
                          <IconButton
                          // onClick={() => deleteAction(row)}
                          >
                            <img height="18px" src={fileView}></img>
                          </IconButton>
                        )}

                        {Actions.search("Toggle") !== -1 && (
                          <MySwitch></MySwitch>
                        )}
                        {Actions.search("Checkbox") !== -1 && (
                          <Checkbox value={"Masa"} color="info" />
                        )}
                      </StyledTableCell>
                    )}
                    {showSelect && (
                      <StyledTableCell>
                        <Checkbox
                          color="info"
                          checked={checked}
                          className={styles.customCheckbox}
                          disableRipple
                          onClick={() => selectHandler(row)}
                        />
                      </StyledTableCell>
                    )}
                    {columnValues.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <React.Fragment key={column.id + "_" + index}>
                          <StyledTableCell
                            dir={column.ltr}
                            key={column.id + "_" + index}
                            align={column.align}
                            style={{
                              textAlign: column?.align ?? "left",
                              color: "#2A3333",
                              fontFamily: "Cairo, sans-serif",
                              fontWeight: "400",
                              cursor: isPointerCursor ? "pointer" : "",
                              ...column.position,
                            }}
                            // onDoubleClick={() => {
                            //   if (column && column.onClick) {
                            //     column.onClick(row);
                            //   }
                            // }}
                          >
                            {column.format ? column.format(row) : value}

                            {column.label === "Must" ||
                            column.label === "Email Notification" ||
                            column.label === "checkBox" ? (
                              <Checkbox color="info" value={"Masa"} />
                            ) : (
                              <></>
                            )}
                            {column?.type === "radio" && (
                              <Radio
                                // checked={radioCheck}
                                value="Masa"
                                color="info"
                                disableRipple
                                style={{
                                  textAlign: "right",
                                  flex: 1,
                                  display: "flex",
                                }}
                                // onChange={()=>{radioCheck=false}}
                              />
                            )}
                            {column.label === "Video File" && (
                              <img
                                src={download}
                                alt="downloadIcon"
                                className={styles.downloadBtn}
                              />
                            )}
                          </StyledTableCell>
                        </React.Fragment>
                      );
                    })}
                  </StyledTableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
