import React from 'react'
import { Inputs } from './Inputs'
import { useForm } from 'react-hook-form'




function Add() {


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>()

    return <>
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <div>
                <label htmlFor="">EMail</label>
                <input required type='text' {...register("email")} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type='password' {...register("password")} />
            </div>
            <div>
                <label htmlFor="">Confirm Password</label>
                <input type='password' {...register("confirmPassword")} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>

    </>
}

export default Add