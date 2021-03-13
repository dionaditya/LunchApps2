import * as React from 'react';
import {FunctionComponent, ReactElement, Fragment} from 'react';
import {Link} from 'react-router-dom'

const Home: FunctionComponent<{}> = (): ReactElement => {
  return (
    <Fragment>
      <Link to="/employee">
        <button>
          Employee
        </button>
      </Link>
      <Link to="/staff">
        <button>
          Staff
        </button>
      </Link>
    </Fragment>
  );
} 

export default Home;
