import axios from "axios";
import React from "react";
import PersonList from "../Person/PersonList";

class ExerciseList extends React.Component {

    state = {
        exercises: [],
    }

    componentDidMount() {
        axios.get('http://192.168.29.101/api/exercises').then(response => {
            // console.log(response.data.status);

            const data = response.data.data;
            this.setState({ exercises: data });
            console.log(this.state.exercises);
        });
    }

    render() {
        return (
            <div>
                Exercise list
                <ul>
                    {/* {this.state.exercises.map(exercise => <li>{exercise.title}</li>)} */}
                    {this.state.exercises.map(exercise => <li>{exercise.title}</li>)}
                </ul>

            </div>
        )
    }
}

export default ExerciseList;