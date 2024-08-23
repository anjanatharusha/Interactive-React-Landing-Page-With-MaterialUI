import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {

  const [message, setMessage] = useState('');


  useEffect(() => {
    const currentHour = new Date().getHours();
    let welcomeMessage = '';

    if (currentHour < 12) {
      welcomeMessage = 'Good morning!';
    } else if (currentHour < 18) {
      welcomeMessage = 'Good afternoon!';
    } else {
      welcomeMessage = 'Good evening!';
    }

    setMessage(welcomeMessage);
  }, []);

  return (
    <div>
        {message}
    </div>
    
  );
};

export default WelcomeMessage;
