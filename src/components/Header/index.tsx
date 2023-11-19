import React from 'react';
import * as S from './styles';

interface PropHeader {
  titulo: string;
}

const Header: React.FC<PropHeader> = ({ titulo }) => {
  return (
    <S.ContainerHeader>
      <S.TextHeader>{titulo}</S.TextHeader>
    </S.ContainerHeader>
  );
};
export default Header;
