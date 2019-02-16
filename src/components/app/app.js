import React, { Component } from 'react';

import { BookstoreServiceProvider } from '../bookstore-service-context';
import ErrorBoundry from '../error-boundry';

import BookstoreService from '../../services/bookstore-service';

import './app.scss';

export default class App extends Component {

    render() {
        return (
            <ErrorBoundry>
                <BookstoreServiceProvider>

                </BookstoreServiceProvider>
            </ErrorBoundry>
        );
    }
}
