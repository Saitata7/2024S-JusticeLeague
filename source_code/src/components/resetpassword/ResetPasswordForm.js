import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = (e) => {
    e.preventDefault();

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetSent(true);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {!resetSent ? (
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      ) : (
        <p>Password reset email has been sent. Please check your inbox.</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ResetPasswordForm;