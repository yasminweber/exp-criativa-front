import React, { Component } from 'react';

class CategoryCardProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
            // selected: false
        }
    }

    render() {
        return (
            <div className="col-lg-4 col-md-4 col-6 my-3">
                <div className="category-card">
                <div className={this.state.selected ? 'category-option selected' : 'category-option'} id={this.props.category}
                    onClick={() => {
                        let selected = this.props.clickFunction(this.props.category)

                        if (selected) {
                            this.setState({ selected: !this.state.selected })
                        }

                    }}>
                    <img disable className='category-icon' id={this.props.category} src="https://cdn-icons-png.flaticon.com/512/672/672716.png" alt="" />
                </div>
                <h4> {this.props.category} </h4>
                </div>
            </div>
        )
    }
}

export default CategoryCardProfile