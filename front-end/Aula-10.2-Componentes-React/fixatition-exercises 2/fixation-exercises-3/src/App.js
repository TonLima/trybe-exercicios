/* eslint-disable no-undef */
import React, { Component }from 'react';
import UserProfile from './UserProfile';
import './App.css';

class App extends Component {
  render() {
    const washington = {
      id: 102,
      name: "Washington Lima Ferreira",
      email: "tondrums@hotmail.com",
      avatar: "https://scontent.fcgh56-1.fna.fbcdn.net/v/t1.18169-9/969149_399881266789491_1988891088_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeGTcUbazWFbWRUwyfdrxZKFhgR2MHrhKRaGBHYweuEpFuClSbA66psdBl_EubohXkfXmkS0JVmcydWglSOM2HUr&_nc_ohc=WXC0f7BJHrYAX-N2uvW&tn=IO0JeqNjZRD_hjmq&_nc_ht=scontent.fcgh56-1.fna&oh=00_AT-nW4EVLmCEJmTiPdFF4SSCmybk1K-LUvcbkRhXpv2TwA&oe=6245334B"
    };

    const rute = {
      id: 77,
      name: "Rute Câmara Ferreira",
      email: "rueton9@hotmail.com",
      avatar: "https://scontent.fcgh56-1.fna.fbcdn.net/v/t1.6435-9/46047367_10210752073397888_7683550678404300800_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=102&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeFcnIHN4_oxjvtTQsMmiQNfuozt-6ZMDPC6jO37pkwM8MUodEYu0NRfdaNhHe9eBaq16vlh7gbZOq8tZYhIj6M5&_nc_ohc=MDIH37utlJ4AX9s6bF0&_nc_ht=scontent.fcgh56-1.fna&oh=00_AT_EsPGU6hLbOifP4b8sVDcxX3T9AFWukJouhsOzNqWMOQ&oe=6248965C"
    };
    return(
      <div className="App">
      <UserProfile user={washington} />
      <UserProfile user={rute} />
    </div>
    );
  }
}

export default App;
