import { render } from "@testing-library/react";

const columns = React.useMemo(
    () => [
      {
        Header: "Company",
        accessor: "company" // accessor is the "key" in the data
      },
      {
        Header: "Contact",
        accessor: "contact"
      },
      {
        Header: "Country",
        accessor: "country"
      }
    ],
    []
  );
const data = React.useMemo(
    () => [
      {
        company: "Alfred",
        contact: "Maria Anders",
        country: "Germany"
      },
      {
        company: "Centro comercial Moctezuma",
        contact: "Francisco Chang",
        country: "Mexico"
      },
      {
        company: "Ernst Handel",
        contact: "Roland Mendel	",
        country: "Austria"
      }
    ],
    []
  )
  render()
  {
         return (
         <BasicTable columns={columns} data={data}/>
    )
}