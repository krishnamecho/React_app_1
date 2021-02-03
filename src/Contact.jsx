import React, {Component} from 'react';

class Contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            number: "",
            email: "",
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async formSubmit(e){
        try{
        e.preventDefault();
        // alert(`Name: ${this.state["name"]} Mail id: ${this.state['email']} phone number: ${this.state['number']} Message: ${this.state['message']}`);
        await fetch('https://webhook.site/244832fb-28a9-4956-82c2-ebd4046623a0', {
            method: 'post',
            mode: "no-cors",
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json',
            },
            body: JSON.stringify({
                Name: this.state["name"] ,
                Mail_id: this.state['email'],
                phone_number: this.state['number'] ,
                Message: this.state['message']  
            })
        });
        alert("The form has been submitted.")
        } catch(e){
            console.log(e);
        }
    }
    render(){

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
                            <form onSubmit={this.formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" value={this.state['name']} onChange= {this.handleChange} name="name" placeholder="Your Name" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput2" value={this.state['email']} onChange= {this.handleChange} name="email" placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput3" className="form-label">Number</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput3" value={this.state['number']} onChange= {this.handleChange} name="number" placeholder="Phone number" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" value={this.state['message']} onChange= {this.handleChange} name="message" rows="3"></textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;