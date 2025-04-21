// src/components/forms/ValidatedInput.jsx
import React from 'react';

const ValidatedInput = ({ label, error, ...props }) => (
  <div>
    <label>{label}</label>
    <input {...props} className={`form-control ${error ? 'is-invalid' : ''}`} />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default ValidatedInput;
