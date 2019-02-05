import React from 'react';
import {NavLink} from 'react-router-dom';
import store, { addAuthor } from '../store.js';

export default class AddAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddAuthorClick = this.handleAddAuthorClick.bind(this);
    }

    handleAddAuthorClick(e) {
      e.preventDefault();
      const author = {
        id: Math.floor(Math.random() * 100000).toString(),
        firstName: e.target.authorFirstName.value,
        lastName: e.target.authorLastName.value,
        email: e.target.authorEmail.value,
        address: e.target.authorAddress.value
      }

      store.dispatch(addAuthor(author));
      this.props.history.push('/authors');
    }

    render() {
        return (
            <div className="App">
                <NavLink to="/authors">
                    <button type="button">See All Authors</button>
                </NavLink>  
                <form onSubmit={(e) => this.handleAddAuthorClick(e)}>
                    <div className="formWidth">
                        <label>
                        Author First Name:  <input type="text" name="authorFirstName"/>
                        </label>
                    </div>
                    <div className="formWidth">
                        <label>
                        Author Last Name:  <input type="text" name="authorLastName"/>
                        </label>
                    </div>
                    <div className="formWidth">
                        <label>
                        Author Email:  <input type="text" name="authorEmail"/>
                        </label>
                    </div>
                    <div className="formWidth">
                        <label>
                        Author Address:  <input type="text" name="authorAddress"/>
                        </label>
                    </div>
                    <br />
                    <div className="formWidth">
                        <input type="submit" value="Submit" />
                    </div>          
                </form>       
            </div>
        )
    }
}