import React, {useState} from 'react';

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${data.name} Mail id: ${data.email} phone number: ${data.phone} Message: ${data.message}`);
    };

    const InputEvent =(event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact Us
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" value={data.name} onChange= {InputEvent} name="name" placeholder="Your Name" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput2" value={data.email} onChange= {InputEvent} name="email" placeholder="name@example.com" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput3" className="form-label">Number</label>
                            <input type="number" className="form-control" id="exampleFormControlInput3" value={data.phone} onChange= {InputEvent} name="phone" placeholder="Phone number" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" value={data.message} onChange= {InputEvent} name="message" rows="3"></textarea>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;