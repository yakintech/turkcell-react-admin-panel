import React, { useState } from 'react'
import { Title, Wrapper } from '../../../components/core-components/Header-Core'
import Header from './Header'
import AdminUsers from './AdminUsers'
import { useQuery } from '@tanstack/react-query'
import { baseService } from '../../../api/baseService'

function List() {



  const { data } = useQuery({
    queryKey: ["adminusers"],
    queryFn: async () => {
      let response = await baseService.getAll('adminuser')
      return response
    }
  })


  return <>
    <Header />
    <AdminUsers data={data} />
  </>
}

export default List