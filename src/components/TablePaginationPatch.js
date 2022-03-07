import React from "react";
import { TablePagination, TablePaginationProps } from "@material-ui/core";

const PatchedPagination = (props: TablePaginationProps) => {
  const { ActionsComponent, onChangePage, onChangeRowsPerPage, ...tablePaginationProps } = props;

  return (
    <TablePagination
      {...tablePaginationProps}
      onPageChange={onChangePage}
      onRowsPerPageChange={onChangeRowsPerPage}
      ActionsComponent={(subprops) => {
        const { onPageChange, ...actionsComponentProps } = subprops;
        return <ActionsComponent {...actionsComponentProps} onChangePage={onPageChange} />;
      }}
    />
  );
};
export default PatchedPagination;
