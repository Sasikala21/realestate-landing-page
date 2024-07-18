"use client"
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'
export default function NotFound() {
    const router = useRouter();

    const back = () => {
        router.push("/");
    };
    return (
        <div style={{ textAlign: 'center', paddingTop: '20%', background: 'linear-gradient(to right, #C1DEE8, #FBD9B9)', height: "100vh" }}>
            <p style={{ color: 'black', paddingBottom: '1rem', fontWeight:'bolder', fontSize: '22px'  }}>Page Not Found!</p>
            <Button style={{ color: 'white', background: 'black', fontWeight: 'bold' }} onClick={back}>Back to Home Page</Button>
        </div>
    )
}