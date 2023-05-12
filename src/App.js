import React, { useState } from 'react';
import TabList from './TabList';
import TabContent from './TabContent';

const App = () => {
  // The App component uses the useState hook to manage the state of the currently selected tab.
  const [activeTab, setActiveTab] = useState('Projects');

  // The tabs array defines the list of tabs to be displayed in the tabbed interface.
  const tabs = [
    { title: 'Projects' },
    { title: 'Work Experience' },
    { title: 'Hobbies' },
  ];

  return (
    <div>
      {/* The App component renders a TabList component and passes it the tabs, activeTab, and setActiveTab props. */}
      <TabList tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* The App component also renders a TabContent component and passes it the activeTab prop. */}
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default App;
