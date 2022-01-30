import React, { useState, useEffect } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

function Outlook() {
  const [connection, setConnection] = useState(null);
  const [mails, setMails] = useState([]);
  const [int, setInt] = useState(true);

  useEffect(() => {
    console.log('called ');
    const newConnection = new HubConnectionBuilder()
      .withUrl('https://az1.trypanels.com/NotificationHub')
      .withAutomaticReconnect()
      .build();
    console.log('connected', newConnection);
    setConnection(newConnection);
  }, []);

  useEffect(() => {
    console.log(mails.length);
  }, [mails]);
  useEffect(() => {
    console.log('HI', connection);
    if (connection) {
      console.log('HI1', connection);
      connection
        .start()
        .then((result) => {
          connection.on('ReceiveMessage', (message) => {
            const uMails = mails;
            uMails.splice(0, 0, message[0]);
            setMails(uMails);
            console.log(uMails);
            console.log(message[0]);
            if (mails.length >= 1) {
              uMails.splice(0, 0, message[0]);
              if (mails.length >= 10) {
                uMails.pop();
                setMails(uMails);
              } else {
                setMails(uMails);
              }
            } else {
              setMails(uMails);
            }
          });
        })
        .catch((e) => console.log('Connection failed: ', e));
    }
  }, [connection]);
  console.log('>>>>>>>>>', mails);
  return (
    <div className="sourceContainer">
      {mails?.map((e) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <h3>{e.from}</h3>
            <h4>{e.subject}</h4>
            <p>{e.emailBody}</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}
          >
            {/* <h3>{e.emailDate}</h3> */}
            {e.attachments && <span>I</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Outlook;
