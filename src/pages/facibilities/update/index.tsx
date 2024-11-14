import React, { useEffect, useState } from 'react'
import { baseService } from '../../../api/baseService'
import { useParams } from 'react-router-dom'
import { Autocomplete, Button, Stack, TextField } from '@mui/material'
import Form from '../components/form'
import { useQuery } from '@tanstack/react-query'
import { getAllCitiesResponseModel } from '../models/City'

function Update() {

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")
  const [address, setaddress] = useState("")
  const [cityId, setCityId] = useState("")


  const { data } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      return baseService.getAll<getAllCitiesResponseModel[]>("cities")
    }
  })

  const { id } = useParams()
  useEffect(() => {

    baseService.getById("facibilities", id ?? "").then((res: any) => {
      setname(res.name)
      setdescription(res.description)
      setaddress(res.address)
      setCityId(res.city._id)
    })

  }, [])



  return <>
    <h1>Update</h1>
    <Stack spacing={2}>
      <Form
        name={name}
        description={description}
        setdescription={setdescription}
        address={address}
        setaddress={setaddress}
        setname={setname}
        data={data}
        setCityId={setCityId}
        cityId={cityId}
      />

      <Stack alignItems="flex-end">
        <Button sx={{ width: '15%' }} variant="contained">Update</Button>
      </Stack>
    </Stack>
  </>
}

export default Update