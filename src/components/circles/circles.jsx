import React from 'react'
import './circles.css'



class Circle extends React.Component {
    render(props) {
        return(
            <div className="Circles">

                <div handleChange={this.props.handleChange}>1</div>
                <div handleChange={this.props.handleChange}>2</div>
                <div handleChange={this.props.handleChange}>3</div>
                <div handleChange={this.props.handleChange}>4</div>       
            </div>
        )
    }
}

export default Circle 