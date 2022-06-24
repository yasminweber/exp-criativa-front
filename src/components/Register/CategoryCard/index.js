import React, { Component } from 'react';

class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    render() {
        return (
            <div className="col-md-4 col-6 my-2 category-card">
                <div className={this.state.selected ? 'category-option selected' : 'category-option'} id={this.props.category}
                    onClick={() => {
                        let selected = this.props.clickFunction(this.props.category)
                        if (selected) {
                            this.setState({ selected: !this.state.selected })
                        }
                    }}>
                    <img className='category-icon' id={this.props.category} icon={this.props.icon} alt={this.props.category} disable />
                </div>
                <h4> {this.props.category} </h4>
            </div>
        )
    }
}

export default CategoryCard