import React, { useState } from 'react';
import axios from 'axios';

const ShipmentTracker = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [trackingResponse, setTrackingResponse] = useState(null);

  const trackShipment = () => {
    const options = {
      method: 'GET',
      url: 'https://developer.dhl.com/user/51666/apps/supply_sophomores',
      params: { trackingNumber: trackingNumber },
      headers: { 'DHL-API-Key': apiKey },
      auth: {
        username: 'sahilmakhija03',
        password: 'Buddy@2508'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setTrackingResponse(response.data);
      })
      .catch(function (error) {
        console.error(error);
        setTrackingResponse(null);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Enter tracking number"
      />
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter API Key"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={trackShipment}>Track</button>
      {trackingResponse && (
        <div>
          <h3>Tracking Information:</h3>
          <pre>{JSON.stringify(trackingResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ShipmentTracker;
