import React from 'react';
import { NextPage } from 'next';
import MainLayout from '@/components/MainLayout';
 const Home:NextPage = React.memo(():JSX.Element => {
  return (
    <MainLayout title='Головна'>
      
    </MainLayout>
  )
})
export default Home;