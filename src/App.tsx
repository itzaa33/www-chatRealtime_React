import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import firebase from 'firebase'
import 'App.css'

import IconChat from 'components/IconChat'
import BoxChat from 'components/BoxChat'
import Modal from './components/ModalSelectAuth'
import * as TypeMassage from './components/BoxChat/ListChat/Message'

import { firebaseConfig } from './Config'
firebase.initializeApp(firebaseConfig)

export type senderType = "A" | "B"

const App: React.FC = () =>
{
  const [displayChatbox, setdisplayChatbox] = useState(false)
  const [listchats, setListchats] = useState<TypeMassage.Value[]>([])
  const [sender, setSender] = useState<senderType>('A')

  function toggleChatbox()
  {
    setdisplayChatbox(!displayChatbox)
  }

  useEffect(() =>
  {
    firebase.database().ref('chat/chatlog').on('value', function (snapshot)
    {
      if (snapshot.val() != null)
      {
        setListchats([...snapshot.val()])
      }
    });
  }, [])

  function sendMessage(message: string)
  {
    const obj = {
      key: Math.random().toString().replace('.', ''),
      message: message,
      sender: sender
    }

    const array = [...listchats, obj]
    firebase.database().ref('chat/chatlog').set(array);
  }

  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <div id="center-text">
        <h2>ChatBox UI</h2>
        <p>Message send and scroll to bottom enabled </p>
      </div>
      <div id="body">
        {
          !displayChatbox ?
            <IconChat
              handleDisplay={toggleChatbox}
            />
            :
            <BoxChat
              sender={sender}
              listchats={listchats}
              sendMessage={sendMessage}
              handleDisplay={toggleChatbox}
            />
        }
      </div>
      <Modal
        setSender={setSender}
      />
    </div>
  );
}

export default App;
