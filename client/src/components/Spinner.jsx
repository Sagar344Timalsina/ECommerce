import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(
            () => {
                setCount((prev) => --prev)
            }, 1000
        );
        count === 0 && navigate("/accounts");
        return () => {
            clearInterval(interval);
        }
    }, [count, navigate])

    return (
        <>
            <div class="d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}>
                <h1>Redirecting you in {count} seconds</h1>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden"></span>
                </div>
            </div></>
    )
}

export default Spinner