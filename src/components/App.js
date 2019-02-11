import React, { Component } from 'react';
import Main from './main/Main';
import Navbar from './navbar/Navbar';
import Loader from './loader/Loader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import $ from 'jquery';
class App extends Component {
  render() {
    $(document).ready(function() {
      let activeId = 'link1';
      $('#link1').addClass('active');
      $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');
        $('.menu-toggle').toggleClass('menu-bar');
        $('.menu-toggle').toggleClass('menu-cross');
      });
      $('nav li').click(function(event) {
        $('#' + activeId).removeClass('active');
        $('#' + event.target.id).toggleClass('active');
        activeId = event.target.id;
      });
    });
    $(window).on('load', function() {
      $('#app').fadeIn('slow');
      $('#loadingbox ').fadeOut('slow');
    });
    return (
      <React.Fragment>
        <Loader />
        <div id="app">
          <Navbar />
          <Router>
            <Switch>
              <Route path="/" component={Main} />
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
