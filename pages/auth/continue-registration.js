import { useState } from "react";
import Head from "next/head";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';


const validationRules = yup.object().shape({
    firstName:yup.string().required('this field is compulsory').min(2,'must be at least 2 characters').max(25,'must not be more than 25 characters'),

    lastName:yup.string().required('this field is compulsory').min(2,'must be at least 2 characters').max(25,'must not be more than 25 characters'),
    address:yup.string().min(8,'must be at least 2 characters').max(60,'must not be more than 25 characters'),
    compName:yup.string().required('this field is compulsory').min(2,'must be at least 2 characters').max(120,'must not be more than 25 characters'),
});

export default function ContinueReg () {

    const {handleBlur,handleChange, handleSubmit,touched,errors,values,} = useFormik({
        initialValues:{firstName:'',lastName:'',address:'',compName:''},
        onSubmit: (value) => {
            console.log(value.firstName,value.lastName,value.address)
        },
        validationSchema:validationRules,
    });

    return (
        <>
        <Head>
            
            <title>Continue Registration | AgroTrade</title>
        </Head>
        <main className="h-screen flex justify-center items-center py-20 px-3 md:px-0">
            <div className="w-full md:w-[420px] flex flex-col gap-3 border border-gray-300 rounded-md p-3">
                <div className="flex flex-col gap-5 md:gap-3">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">Provide more information</h2>
                        <p className="text-xs text-green-600">Your account registration will be complete after this step</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <TextField 
                            className="w-full"
                             variant="outlined" 
                            label="first name"
                             id="firstName"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.firstName}
                             />
                             <small>{touched && errors.firstName ? errors.firstName : null}</small>
                        </div>

                        <div className="mb-2">
                            <TextField
                             className="w-full" 
                            variant="outlined"
                             label="last name"
                             id="lastName"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.lastName}/>
                             <small className="text-red-500">{touched && errors.lastName ? errors.lastName : null}</small>
                        </div>

                        <div className="mb-2">
                            <TextField multiline={true} 
                            className="w-full" 
                            type="text" 
                            variant="outlined"
                             label="address"
                             id="address"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.address}/>
                             <small className="text-red-500">{touched && errors.address ? errors.address : null}</small>
                        </div>

                        {/* {tab == 'farmer'
                        ? <div className="mb-2">
                            <TextField 
                            className="w-full" 
                            variant="outlined" 
                            label="company name"
                            id="farmer"
                            onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.farmer}
                            />
                            <small className="text-red-500">{touched && errors.farmer ? errors.farmer : null}</small>
                        </div> 
                        : null} */}

                        <button 
                        type="submit"  
                        className="h-[48px] w-full flex justify-center items-center bg-green-700 text-white text-xl rounded-md">Continue</button>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}

const styles = {
    tabColor:'border-b-4 border-green-600'
}