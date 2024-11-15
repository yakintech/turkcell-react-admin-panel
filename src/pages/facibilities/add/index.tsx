import { Autocomplete, Button, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { CreateFacibilityRequest, CreateFacibilityResponse } from '../models/Facibility'
import { baseService } from '../../../api/baseService'
import { useQuery } from '@tanstack/react-query'
import { getAllCitiesResponseModel } from '../models/City'
import { useNavigate } from 'react-router-dom'
import Form from '../components/form'
import { queryClient } from '../../..'

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

  const navigate = useNavigate()

  const add = () => {
    let newFacibility: CreateFacibilityRequest = {
      name: name,
      description: description,
      address: address,
      city: cityId
    }

    baseService.add<CreateFacibilityResponse>("/facibilities", newFacibility)
      .then(res => {
        //listelemedeki cache i boz.
        queryClient.invalidateQueries({
          queryKey: ["facibilities"]
        })
        navigate("/facibilities")
      })
  }

  return <>
    <h1>Add New Facibility</h1>
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
      />

      <Stack alignItems="flex-end">
        <Button onClick={add} sx={{ width: '15%' }} variant="contained">Add</Button>
      </Stack>
    </Stack>

  </>
}

export default Add

