import React from 'react';
import TabsContainer from './Components/TabsContainer';

function App() {
  const tabsData = [
    { label: "Tab 1", content: "Content for Tab 1" },
    { label: "Tab 2", content: "Content for Tab 2" },
    { label: "Tab 3", content: "Content for Tab 3" },
  ];

  return <TabsContainer tabs={tabsData} />;
}

export default App;
