import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

function Add() {

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")
  const [address, setaddress] = useState("")
  const [city, setcity] = useState("")

  return <>
    <Stack spacing={2}>
      <Stack direction="row" gap={4}>
        <TextField fullWidth label="Name" value={name} onChange={(e) => setname(e.target.value)} />
        <TextField fullWidth label="City" value={city} onChange={(e) => setcity(e.target.value)} />
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
        <Button sx={{ width: '20%' }} variant="contained">Add</Button>
      </Stack>
    </Stack>

  </>
}

export default Add