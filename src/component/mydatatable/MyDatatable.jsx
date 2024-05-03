import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
  
  
];

const rows = [
  { id: 1, Name: "Coffe",  },
  { id: 2, Name: "Non Coffe", },
  { id: 3, Name: "Cake",  },
  { id: 4, Name: "Pastry",  },
  { id: 5, Name: "Cookie",  },
];

const actionColumn = [
  {
    
    renderCell: () => {
      return (
        <div className="cellAction">
          
        </div>
      );
    },
  },
];

const MyDatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
      All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;