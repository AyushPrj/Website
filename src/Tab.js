import React from 'react';

// The Tab component represents a single tab in the tabbed interface.
// It accepts three props: title, isActive, and onClick.
const Tab = ({ title, isActive, onClick }) => (
  // The component renders a button element with an onClick handler that calls the onClick prop.
  // The style of the button is set to bold if the isActive prop is true.
  <button onClick={onClick} style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
    {title}
  </button>
);

export default Tab;
