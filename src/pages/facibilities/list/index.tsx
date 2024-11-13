import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { baseService } from '../../../api/baseService'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { GetAllFacilitiesResponse } from '../models/Facibility'
import { Button, Stack } from '@mui/material'
import { queryClient } from '../../..'
import { useNavigate } from 'react-router-dom'

function List() {

  const { data } = useQuery({
    queryKey: ["facibilities"],
    queryFn: async () => {
      return baseService.getAll<GetAllFacilitiesResponse[]>("facibilities")
    }
  })

  const navigate = useNavigate();


  const deleteFacibility = (id: any) => {

    const result = window.confirm("Are you sure you want to delete this item?")
    if (!result) return

    baseService.delete(`facibilities`, id).then(() => {

      queryClient.invalidateQueries({
        queryKey: ["facibilities"]
      })


    })

  }

  const columns: GridColDef[] = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1
    },
    {
      field: "city",
      headerName: "City",
      flex: 1
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params: any) => {
        return <Button onClick={() => deleteFacibility(params.row._id)} variant="contained" color="error">Delete</Button>
      }
    }
  ]


  return <>

    <div style={{ height: 600, width: '100%' }}>
      <hr />
      <h1>Facibilities: {data?.length}</h1>
      <Button onClick={() => navigate("/facibilities/add")} variant="contained">Add New</Button>

      <hr />
      <DataGrid
        columns={columns}
        rows={data ?? []}
        getRowId={(row) => row._id}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>

  </>
}

export default List