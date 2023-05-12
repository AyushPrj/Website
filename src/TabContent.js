import React from 'react';

// The TabContent component displays the content of the currently selected tab.
// It accepts one prop: activeTab.
const TabContent = ({ activeTab }) => {
  // The component uses a switch statement to conditionally render different content based on the value of the activeTab prop.
  switch (activeTab) {
    case 'Projects':
      return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>;
    case 'Work Experience':
      return <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>;
    case 'Hobbies':
      return <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>;
    default:
      return null;
  }
};

export default TabContent;