import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function VerifyToken() {
  const { id, token } = useParams();
  const [VerifyResult, setVerifyResult] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api-for-adventura-app.onrender.com/api/v1/auth/${id}/verify/${token}`
      )
      .then((response) => {
        setVerifyResult(response.data);
      })
      .catch((error) => {
        console.error('Verification failed:', error);
        setVerifyResult({ message: 'Verification failed' });
      });
  }, [id, token]);

  return (
    <div>
      {VerifyResult ? <p>{VerifyResult.message}</p> : <p>Verifying...</p>}
    </div>
  );
}

export default VerifyToken;
