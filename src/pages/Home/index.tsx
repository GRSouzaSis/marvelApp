import React, { useState, useEffect } from 'react';
import { TextTitle } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';


const Home: React.FC = () => {

  return (
    <>
      <Header titulo='Personagens'/>
      <Input/>
      <TextTitle>teste</TextTitle>
    </>
  )
}
export default Home