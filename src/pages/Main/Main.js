import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';


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
        swal("Good job!", "Movie Submited Successfully !!", "success");
    }




    return (
        <div className='w-100 bg-dark h-100 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='my-3 text-light'>MOVIE DETAILS</h1>
            <form className=' text-dark d-flex flex-column align-items-center justify-content-center w-50 h-50 mt-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='p-2 w-50 rounded' placeholder='Catagory' type='text' {...register("category")} /> <br />
                <input className='p-2 w-50 rounded' placeholder='language' type='text' {...register("language")} /> <br />
                <input className='p-2 w-50 rounded' placeholder='genre' type='text' {...register("genre")} /> <br />
                <input className='p-2 w-50 rounded' placeholder='sort' type='text' {...register("sort")} /> <br />

                <input className='w-25 btn btn-primary fw-bold bg-gray border-0 my-3 py-2' type="submit" value='Submit' />
            </form>

        </div>
    );
};

export default Main;