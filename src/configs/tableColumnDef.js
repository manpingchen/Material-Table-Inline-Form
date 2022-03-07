import React from "react";
import InlineTextField from "../components/InineForm";

export const columns = [
  {
    title: "Avatar",
    field: "avatar",
    render: (rowData) => <img style={{ height: 36, borderRadius: "50%" }} src={rowData.avatar} />,
  },
  { title: "First Name", field: "first_name" },
  { title: "Email", field: "email" },
  {
    title: "Action",
    field: "id",
    render: (rowData) => <InlineTextField rowData={rowData} />,
  },
];
