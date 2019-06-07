import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CategoriesList extends Component {

	constructor(props) {
    super(props);
  }

	render() {
		const {category} = this.props;
		return (
			<Link to={'/category/' + category._id}>
				<div>
				<p>{category.name}</p>
				</div>
			</Link>
		)
	}
}

export default CategoriesList;