import React from "react";
import axios from "axios";

class AsteroidShow extends React.Component {

    state = {
        name: "",
        nasa_jpl_url: "",
        is_potentially_hazardous_asteroid: "",
    };

    componentDidMount() {
        axios.get('https://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=IfEhqHoPLCC16Jf7D2FFTbIPy6l2t22Il96mc5jX')
            .then(response => {
                this.setState({ name: response.data.name });
                this.setState({ nasa_jpl_url: response.data.nasa_jpl_url });
                this.setState({ is_potentially_hazardous_asteroid: response.data.is_potentially_hazardous_asteroid });
            });
    }

    render() {
        return (
            <div>
                <label>Name {this.state.name} <br /></label>
                <label>Nasa Jpl Url  {this.state.nasa_jpl_url} <br /></label>
                <label>Is potentially hazardous {this.state.is_potentially_hazardous_asteroid} <br /></label>
            </div>
        );
    }
}

export default AsteroidShow;