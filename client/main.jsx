import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { Bins } from '../imports/api/Collections/binsCollection';
import {Route, Switch, BrowserRouter  } from 'react-router-dom';
import BinList from '../imports/ui/Components/Bins/BinLsist';
import BinMain from '../imports/ui/Components/Bins/BinMain';

const routes = (
  <BrowserRouter>
      <div>
          <App/>
          <Switch>
          <Route exact path="/" component={BinList} />
          <Route path="/bins/:binId" component={BinMain} />
        </Switch>
      </div>
  </BrowserRouter>
  );

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
