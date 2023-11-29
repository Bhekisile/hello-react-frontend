import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetings/greetingSlice';
import './styles/Greetings.css';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, error, loading } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="header">Greetings</h2>
      <div className="card-body text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {greeting && <p className="message">{greeting.greeting}</p>}
      </div>
    </div>
  );
};

export default Greetings;
