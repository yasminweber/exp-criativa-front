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
            <div class="col-4 my-2 category-card">
                <div className={this.state.selected ? 'category-option selected' : 'category-option'} id={this.props.category}
                    onClick={() => {
                        let selected = this.props.clickFunction(this.props.category)

                        if (selected) {
                            this.setState({ selected: !this.state.selected })
                        }

                    }}>
                    <img disable className='category-icon' id={this.props.category} src="https://cdn-icons-png.flaticon.com/512/672/672716.png" />
                </div>
                <h4> {this.props.category} </h4>
            </div>
        )
    }
}
export default CategoryCard