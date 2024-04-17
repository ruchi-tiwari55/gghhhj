import React, { useState } from 'react';
import Logo from '../../src/assest/loginlog.png'; 
import { useSelector } from 'react-redux';
import './Login.css'; 

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const dummyEmail = useSelector((state) => state.dummyEmail);
  const dummyPassword = useSelector((state) => state.dummyPassword);

  const handleLogin = () => {
    if (username === dummyEmail && password === dummyPassword) {
      setLoggedIn(true);
      props.loggedIn();
    } else {
      alert('Invalid Credentials');
    }
  };

  if (loggedIn) {
    return <h1>Welcome {username}</h1>;
  }

  return (
    <div className="login-container">
      <img src={Logo} alt="logo" className="logo" />
      <h3 className="login-heading">Login</h3>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin} className="login-buttonn">Login</button>
    </div>
  );
}





// import React, { useState } from 'react';
// import Logo from '../../src/assest/logo.png';
// import { useSelector } from 'react-redux';

// export default function Login(props) {
//     const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const dummyEmail = useSelector((state) => state.dummyEmail);
//   const dummyPassword = useSelector((state) => state.dummyPassword);

//   const handleLogin = () => {
//     if (username === dummyEmail && password === dummyPassword) {
//       setLoggedIn(true);
//       props.loggedIn();
//     } else {
//       alert('Invalid Credentials');
//     }
//   }

//   // if (loggedIn) {
//   //   return <h1>Welcome {username}</h1>;
//   // }

//    return (
//      <div>
//         <h1>
//             <img src={Logo} alt="logo" />
//             <h1>Login</h1>
//             <div>
//               <label>Username:</label>
//               <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div>
//               <label>Password:</label>
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button onClick={() => handleLogin() }>Login</button>
//         </h1>
//      </div>
//    );
// }
