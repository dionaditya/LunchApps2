import * as React from 'react';
import {ReactElement, FunctionComponent} from 'react';
import QRCode from 'react-qr-code';

const Employee: FunctionComponent<{}> = (): ReactElement => {
  const [email, setEmail] = React.useState('');
  const [result, setResult] = React.useState('');
  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        <button onClick={() => setResult(email)}>Enter</button>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="type your email here" />
        {result && <QRCode value={result} />}
      </div>
    </React.Fragment>
  );
};

export default Employee;
