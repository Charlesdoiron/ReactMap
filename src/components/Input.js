import React , { Component } from 'react';
import { user } from '../datas/user';

class Input extends Component{
	render(){
		return(
				<div>
				user.map(user){
					
				}
				<p>{user.user1.id}</p>
				<p>{user.user2.name}</p>
				<p>{user.user3.id}</p>
				<p>{user.user4.id}</p>
				</div>
			)
	}
}

export default Input;