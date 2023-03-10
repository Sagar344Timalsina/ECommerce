import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import UserMenu from '../../components/UserMenu'
import { useAuth } from '../../components/context/Auth'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Profile = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [auth, setAuth] = useAuth();



    useEffect(() => {
        const { email, username, phone, address } = auth.user;
        setUserName(username);
        setAddress(address);
        // setPassword(password)
        setEmail(email);
        setPhone(phone);
    }, [auth.user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put("/api/admin/profile", {
                username,
                email,
                password,
                phone,
                address,
            });
            if (data?.error) {
                toast.error(data?.error);
            } else {
                setAuth({ ...auth, user: data?.updatedAdmin })
                let ls = localStorage.getItem("auth");
                ls = JSON.parse(ls);
                ls.user = data.updatedAdmin;
                localStorage.setItem("auth", JSON.stringify(ls));
                toast.success("Profile updated successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
        console.log(username, email, password, phone, address);
    };


    return (
        <Layout title={"Your Profile User"}>
            <div className="container-fluid p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="form-container d-flex  align-items-center mx-auto p-3" style={{ minHeight: "90vh", maxWidth: "30vw" }}>
                            <form className="shadow  bg-white rounded p-5" onSubmit={handleSubmit}>
                                <h4 className="title  ">REGISTER FORM</h4>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your Name"

                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your Email "

                                        disabled
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Your Password"

                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your Phone"

                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your Address"

                                    />
                                </div>
                                <div className="mb-3">

                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile