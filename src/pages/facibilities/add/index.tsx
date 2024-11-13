import { Autocomplete, Button, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { CreateFacibilityRequest, CreateFacibilityResponse } from '../models/Facibility'
import { baseService } from '../../../api/baseService'
import { useQuery } from '@tanstack/react-query'
import { getAllCitiesResponseModel } from '../models/City'

function Add() {

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


  const add = () => {
    let newFacibility: CreateFacibilityRequest = {
      name: name,
      description: description,
      address: address,
      cityId: cityId
    }

    baseService.add<CreateFacibilityResponse>("/facibilities", newFacibility)
      .then(res => {
        console.log(res)
      })
  }

  return <>
    <h1>Add New Facibility</h1>
    <Stack spacing={2}>
      <Stack direction="row" gap={4}>
        <TextField fullWidth label="Name" value={name} onChange={(e) => setname(e.target.value)} />
        <Autocomplete
          fullWidth
          options={data || []}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            setCityId(newValue ? newValue._id : "");
          }}
          renderInput={(params) => <TextField {...params} label="Select City" />}
        />
      </Stack>
      <Stack direction="row" gap={4}>
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          multiline
          rows={4}
        />
        <TextField
          fullWidth
          label="Address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          multiline
          rows={4}
        />
      </Stack>
      <Stack alignItems="flex-end">
        <Button onClick={add} sx={{ width: '15%' }} variant="contained">Add</Button>
      </Stack>
    </Stack>

  </>
}

export default Add

