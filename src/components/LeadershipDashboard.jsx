import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const { kioskid = '' } = useParams();
  const { isLoading, error, data, isFetching } = useQuery(
    'leadershipData',
    () => axios.get(`/${kioskid}`).then((res) => res.data),
    {
      retry: 0,
      refetchInterval: 3000,
    }
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default Dashboard;
