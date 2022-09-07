import React, { useState, useEffect } from 'react';

const dashboard = () => {
  // loading indicator
  const [isLoading, setIsLoading] = useState(true);
  // store data
  const [dashboardData, setDashboardData] = useState(null);

  // fetch data using effect hook
  useEffect(() => {
    // define the function using an async function
    async function fetchDashboardData() {
      // end points is from json-server
      const response = await fetch('http://localhost:4000/dashboard');
      // converting response to json
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }

    // invoke the function
    fetchDashboardData();

    // empty dependency array cause we want to this function to run only when it mounts
  }, []);

  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  return (
    <div>
      <h2>Dashboard Data</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>
  );
};

export default dashboard;
