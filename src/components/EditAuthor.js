import React from 'react';
import {NavLink} from 'react-router-dom';
import store, { editAuthor } from '../store.js';

export default class EditAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.authorId = this.props.match.params.id;
        this.handleEditAuthorClick = this.handleEditAuthorClick.bind(this);
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }
    
    componentWillUnmount () {
        this.unsubscribe();
    }

    handleEditAuthorClick(e) {
      e.preventDefault();
      const author = {
        id: this.authorId,
        firstName: e.target.authorFirstName.value,
        lastName: e.target.authorLastName.value,
        email: e.target.authorEmail.value,
        address: e.target.authorAddress.value
      }

      store.dispatch(editAuthor(author));
      this.props.history.push('/authors');
    }

    render() {
        let author = this.state.authors.find((author) => author.id === this.authorId);

        return (
            <div className="App">
                <NavLink to="/authors">
                    <button type="button">See All Authors</button>
                </NavLink> 
                {
                    author
                    &&
                    <form onSubmit={(e) => this.handleEditAuthorClick(e)}>
                        <div className="formWidth">
                            <label>
                            Author First Name:  <input type="text" defaultValue={author.firstName} name="authorFirstName"/>
                            </label>
                        </div>
                        <div className="formWidth">
                            <label>
                            Author Last Name:  <input type="text" defaultValue={author.lastName} name="authorLastName"/>
                            </label>
                        </div>
                        <div className="formWidth">
                            <label>
                            Author Email:  <input type="text" defaultValue={author.email} name="authorEmail"/>
                            </label>
                        </div>
                        <div className="formWidth">
                            <label>
                            Author Address:  <input type="text" defaultValue={author.address} name="authorAddress"/>
                            </label>
                        </div>
                        <br />
                        <div className="formWidth">
                            <input type="submit" value="Submit" />
                        </div>          
                    </form>
                }                        
            </div>
        )
    }
}