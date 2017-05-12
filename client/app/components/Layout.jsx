import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  return (
    <div>
      <div className="container">
        <Header/>
        <Body
          chartData={props.chartData}
          collectData={props.collectData}
          storyPoint={props.storyPoint}
          history={props.history}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
