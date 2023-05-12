import React from 'react';
import Tab from './Tab';

// The TabList component manages the state of the currently selected tab and renders the Tab components.
// It accepts three props: tabs, activeTab, and setActiveTab.
const TabList = ({ tabs, activeTab, setActiveTab }) => (
  <div>
    {/* The component maps over the tabs prop to render a Tab component for each tab. */}
    {tabs.map((tab) => (
      <Tab
        key={tab.title}
        title={tab.title}
        // The isActive prop is set to true if the activeTab prop matches the current tab's title.
        isActive={activeTab === tab.title}
        // The onClick prop is set to a function that calls the setActiveTab prop with the current tab's title.
        onClick={() => setActiveTab(tab.title)}
      />
    ))}
  </div>
);

export default TabList;
