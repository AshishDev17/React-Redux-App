import React from 'react';
import store, { getAuthors, removeAuthor } from '../store.js';
import {NavLink} from 'react-router-dom';

export default class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.removeAuthor = this.removeAuthor.bind(this);
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
        store.dispatch(getAuthors());
    }
    
    componentWillUnmount () {
        this.unsubscribe();
    }

    removeAuthor(e){
        const authorId = e.target.value;
        store.dispatch(removeAuthor(authorId));
    }

    render() {
        const authors  = this.state.authors;

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        {
                            authors.length >= 0 
                            &&
                            authors.map((author) => {
                                return (
                                    <tr key={author.id}>
                                        <td>{author.firstName}</td>
                                        <td>{author.lastName}</td>
                                        <td>{author.email}</td>
                                        <td>{author.address}</td>
                                        <td><NavLink to={`/editAuthor/${author.id}`}><button type="button" >Edit {author.firstName + ' ' + author.lastName}</button> </NavLink></td>
                                        <td><button type="button" value={author.id} onClick={(e) => this.removeAuthor(e)}>Delete {author.firstName + ' ' + author.lastName}</button></td>
                                    </tr>
                                );
                            })
                        }                    
                    </tbody>
                </table>
                <div>
                    <NavLink to="/addAuthor">
                        <button type="button">Add Author</button>
                    </NavLink>                  
                </div>
            </div>
            
        )
    }
}