import { useState } from 'react';
import React from "react";
import * as S from './styles';

const Input: React.FC = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return(
    <S.InputPesquisa
    onChangeText={onChangeText}
    value={text}
    />
  );

};

export default Input