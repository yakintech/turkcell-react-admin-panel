import React from 'react'
import { Inputs } from './Inputs'
import { useForm } from 'react-hook-form'
import { styles } from './style'
// import './style.css'
import './style.scss'
import styles2 from './styles.module.css'
import styles3 from './styles.module.scss'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { baseService } from '../../../api/baseService'
import { useNavigate } from 'react-router-dom'




function Add() {


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    let h1Style: any = { textAlign: 'center', color: 'aqua' }

    const navigate = useNavigate()

    const addNewAdminUser = (data: any) => {
        baseService.add('/adminuser', {
            email: data.email,
            password: data.password
        })
            .then(response => {
                navigate('/adminusers')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return <>
            {/* <h1 style={h1Style}>Add New User </h1>
        <h1 style={styles.h1Style}>Add New User</h1>
        <h1 className='title'>Add New User</h1>
        <h1 className={styles2.title}>Add New User</h1>
        <h1 className={styles3.title}>Add New User</h1> */}
            <h1>Add New User </h1>
            <form onSubmit={handleSubmit(data => addNewAdminUser(data))}>
                <div>
                    <label htmlFor="">EMail</label>
                    <input type='text' {...register("email")} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type='password' {...register("password")} />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type='password' {...register("confirmPassword")} />
                    {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

        </>
    }

    export default Add