import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { baseService } from '../../../api/baseService'

function List() {

  const { data } = useQuery({
    queryKey: ["facibilities"],
    queryFn: async () => {
      return baseService.getAll("facibilities")
    }
  })

  return <>

      
  
  </>
}

export default List