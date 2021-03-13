import * as React from 'react';
import {ReactElement, FunctionComponent} from 'react';
import QrReader from 'react-qr-scanner'

const Staff: FunctionComponent<{}> = (): ReactElement => {
  const [result, setResult] = React.useState('')

  const previewStyle = {
    height: 240,
    width: 320,
  }

  const handleError = () => {
    setResult('error')
  }

  const handleScan = (data: string) => {
    setResult(data)
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div>
          Scan here
        </div>
        <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          />
          <p>{result}</p>
      </div>
    </div>
  );
  
} 
export default Staff;
