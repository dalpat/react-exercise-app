import React from "react";
import axios from "axios";

class PersonCreate extends React.Component {
    state = {
        name: '',
    }


    handleChange = event => {
        console.log('Name = ' + event.target.value);
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
        };

        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then(response => {
                console.log(response);
                console.log("Data ======", user);
                console.log(response.data);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" onchange={this.handleChange} />
                    <button type="submit">Create Person</button>
                </form>
            </div>
        )
    }
}

export default PersonCreate;