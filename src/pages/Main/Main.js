import React from 'react';
import { useForm } from "react-hook-form";


const Main = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://hoblist.com/movieList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset()
            })

    }




    return (
        <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='my-3'>Movie Details</h1>
            <form className='bg-light text-dark d-flex flex-column align-items-center justify-content-center w-50 h-75' onSubmit={handleSubmit(onSubmit)}>
                <input className='p-2 w-50 rounded' placeholder='Catagory' type='text' {...register("category")} /> <br />
                <input className='p-2 w-50 rounded' placeholder='language' type='text' {...register("language")} /> <br />
                <input className='p-2 w-50 rounded' placeholder='genre' type='text' {...register("genre")} /> <br />
                <input className='p-2 w-50 rounded' placeholder='sort' type='text' {...register("sort")} /> <br />

                <input className='w-25 fw-bold bg-gray border-0 my-3 py-2' type="submit" value='Submit' />
            </form>

        </div>
    );
};

export default Main;