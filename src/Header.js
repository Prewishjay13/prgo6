import React from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'Restaurants list'

export class Header extends React.Component{
    render() {
      return (
        <>
          <Helmet>
            <title>{ TITLE }</title>
          </Helmet>
          <div class="header">
            <h2>Restaurants</h2>
          </div>
        </>
      );
    }
  }