import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/users/signup', {
        email,
        password,
      });

      console.log(res.data);
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          id="email"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          id="password"
          className="form-control"
        />
      </div>

      {errors.length > 0 && (
        <div className="alert alert-danger">
          <h4>Oops...</h4>
          <ul className="my-0">
            {errors.map(err => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
