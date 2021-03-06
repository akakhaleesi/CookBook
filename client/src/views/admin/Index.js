import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

class AdminIndex extends Component {

	_alertStyle = (type) => {
		let color;
		switch(type) {
			case 'info': color='#d8f1ff'; break;
			default : color='#d8f1ff';
		}
		return {
     backgroundColor: color
   }
	}

	render() {
		let user = JSON.parse(localStorage.getItem('user'));
		if(user !== null && user.status === 1){
	    return (
				<div>
					{ (this.props.location.alert === undefined) ? '' : <div style={this._alertStyle(this.props.location.alertType)}>{ this.props.location.alert }</div> }
					<div>
						<ul>
							<li>
								Users
							</li>
							<li>
								<Link to="/admin/user/create">create</Link>
							</li>
							<li>
								<Link to="/admin/user/update">update</Link>
							</li>
							<li>
								<Link to="/admin/user/delete">delete</Link>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								Categories
							</li>
							<li>
								<Link to="/admin/category/create">create</Link>
							</li>
							<li>
								<Link to="/admin/category/update">update</Link>
							</li>
							<li>
								<Link to="/admin/category/delete">delete</Link>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								Recipes
							</li>
							<li>
								<Link to="/admin/recipe/create">create</Link>
							</li>
							<li>
								<Link to="/admin/recipe/update">update</Link>
							</li>
							<li>
								<Link to="/admin/recipe/delete">delete</Link>
							</li>
						</ul>
					</div>
				</div>
	    );
		}
		else {
			return <Redirect to='/home' />
		}
  }
}

export default AdminIndex;
