import React from 'react';
import classNames from 'classnames';

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >
      <h1>Welcome!</h1>
    </div>
  );
}

export default Home;
