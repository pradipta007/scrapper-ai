"use client";
import { useState } from 'react';
import { theme } from '../../../styles/theme';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: theme.colors.tertiary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: theme.shadows.md,
        width: '100%',
        maxWidth: '400px',
      }}>
        <h1 style={{ color: theme.colors.primary, marginBottom: '1.5rem' }}>Register</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: theme.colors.secondary }}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: `1px solid ${theme.colors.secondary}`,
                borderRadius: '4px',
                marginTop: '0.25rem'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: theme.colors.secondary }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: `1px solid ${theme.colors.secondary}`,
                borderRadius: '4px',
                marginTop: '0.25rem'
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ color: theme.colors.secondary }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: `1px solid ${theme.colors.secondary}`,
                borderRadius: '4px',
                marginTop: '0.25rem'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: theme.colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}