import React, { Component } from 'react';

class CategoryCardProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        }
    }

    render() {
        return (
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 my-3">
                <div className="category-card">
                <div className={this.state.selected ? 'category-option selected' : 'category-option'} id={this.props.category}
                    onClick={() => {
                        let selected = this.props.clickFunction(this.props.category)
                        {console.log(this.state.selected)}
                        if (selected) {
                            this.setState({ selected: !this.state.selected })
                        }
                    }}>
                    <img disable className='category-icon' id={this.props.category} src={this.props.image} alt="" />
                </div>
                <h4> {this.props.category} </h4>
                </div>
            </div>
        )
    }
}

export default CategoryCardProfile