import React, { useRef } from "react";
import { columns } from "../configs/tableColumnDef";
import MaterialTable from "material-table";
import { tableIcons } from "../configs/tableIcons";
import PatchedPagination from "./TablePaginationPatch";

export default function DeviceList() {
  const tableRef = useRef();

  const pageSize = 10;

  return (
    <MaterialTable
      tableRef={tableRef}
      title="Accounts"
      icons={tableIcons}
      columns={columns}
      data={(query) =>
        new Promise((resolve, reject) => {
          let url = "https://reqres.in/api/users?";
          url += "per_page=" + query.pageSize;
          url += "&page=" + (query.page + 1);
          fetch(url)
            .then((response) => response.json())
            .then((result) => {
              resolve({
                data: result.data,
                page: result.page - 1,
                totalCount: result.total,
              });
            });
        })
      }
      options={{
        headerStyle: {
          position: "sticky",
          top: "0",
        },
        paging: true,
        pageSize: pageSize,
        emptyRowsWhenPaging: false,
        showTextRowsSelected: false,
        pageSizeOptions: [pageSize, pageSize * 2],
      }}
      components={{
        Pagination: PatchedPagination,
      }}
    />
  );
}
