import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { baseService } from '../../../api/baseService'
import { Button } from '@mui/material'
import { queryClient } from '../../..'

function AdminUsers({ data }: any) {

  console.log('AdminUsers component rendered')


  const deleteAdminUser = (id: string) => {

    let result = window.confirm('Are you sure?')
    if (!result) return

    baseService.delete('adminuser', id)
      .then(response => {
        queryClient.invalidateQueries({
          queryKey: ["adminusers"]
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'email', headerName: 'EMail', width: 200 },
    { field: 'createdAt', headerName: 'Created', width: 250 },
    { field: 'updatedAt', headerName: 'Updated', width: 250 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params: any) => {
        return (
          <div>
            <Button variant="contained" color="error" onClick={() => deleteAdminUser(params.row._id)}>Delete</Button>
          </div>
        )
      }
    }
  ]

  return <>
    <DataGrid
      columns={columns}
      rows={data}
      getRowId={(row) => row._id}
    />
  </>
}

export default React.memo(AdminUsers)

//Bir component proplarında değişiklik olmadıkça aynı çıktıyı veriyorsa o componenti memo ile sarmalamak performansı arttırır.
//React memo prop karşılaştırması yapar ve değişiklik olmadıkça aynı çıktıyı verir. ( Çalışma mantığı )