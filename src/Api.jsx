import React, { Component } from 'react';

class Api extends Component{

    async postData(){
        try{
            
            let result = await fetch('https://webhook.site/244832fb-28a9-4956-82c2-ebd4046623a0', {
                method: 'post',
                mode: "no-cors",
                headers: {
                    "Accept": 'application/json',
                    "Content-type": 'application/json',
                },
                body: JSON.stringify({
                    key1: "myUserName"
                })
            });

            console.log(result);

        } catch(e){
            console.log(e);
        }
    }

    render(){
        return(
            <>
            <button onClick={this.postData} >Click here</button>
            </>
        )
    }
}

export default Api;