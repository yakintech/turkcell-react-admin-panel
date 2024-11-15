import React from 'react'
import { Inputs } from './Inputs'
import { useForm } from 'react-hook-form'
import { styles } from './style'
// import './style.css'
import './style.scss'
import styles2 from './styles.module.css'
import styles3 from './styles.module.scss'




function Add() {


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>()

    let h1Style : any = { textAlign: 'center', color: 'aqua' }

    return <>
        <h1 style={h1Style}>Add New User </h1>
        <h1 style={styles.h1Style}>Add New User</h1>
        <h1 className='title'>Add New User</h1>
        <h1 className={styles2.title}>Add New User</h1>
        <h1 className={styles3.title}>Add New User</h1>
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