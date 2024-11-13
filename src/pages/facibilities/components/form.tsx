import React from 'react'
import { TextField, Stack, Autocomplete } from '@mui/material'

function Form({ name, description, setdescription, address, setaddress, setname, setCityId, data, cityId }: any) {
    return <>
        <Stack  spacing={2}>
            <Stack direction="row" gap={4}>
                <TextField fullWidth label="Name" value={name} onChange={(e) => setname(e.target.value)} />
                <Autocomplete
                    fullWidth
                    options={data || []}
                    getOptionLabel={(option: any) => option.name}
                    value={data?.find((option: any) => option._id === cityId) || null}
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

        </Stack>
    </>
}

export default Form