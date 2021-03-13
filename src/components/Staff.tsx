import * as React from 'react';
import {ReactElement, FunctionComponent} from 'react';
import QrReader from 'react-qr-scanner'
import { List } from 'linq-typescript'
import { useSnackbar } from 'react-simple-snackbar'


const Staff: FunctionComponent<{}> = (): ReactElement => {
  const [result, setResult] = React.useState('')
  const [openSnackbar, closeSnackbar] = useSnackbar()
  
  const previewStyle = {
    height: 240,
    width: 320,
  }

  const handleError = () => {
    setResult('error')
  }

  const handleScan = (data: any) => {
    setResult(data?.text)
  }

  React.useEffect(() => {
    if (result) {
      const getEmployeeData = async () => {
        let url = 'https://api.sheety.co/ecd8dc146192dc95e1c56b00661bc208/employee/sheet1';
          fetch(url)
          .then((response) => response.json())
          .then(json => {
            // Do something with the data
            const list = new List(json.sheet1)
            const filteredList = list.where((val: any) => val.email === result).toArray()
            if(filteredList.length > 0) {
              alert('lunch berhasil di redeem')
            } else {
               alert('lunch tidak berhasil di redeem')
            }
          });
      }
      getEmployeeData()
    }
  }, [result])

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
