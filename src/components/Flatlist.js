import React, { useState } from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  background-color: #eee;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #ccc;
`;

export default ({ data, Checkbox }) => {
  return (
    <Item onPress={Checkbox} activeOpacity={0.7}>
      <>
        <ItemText>
          {data.task} - {data.done.toString()}{' '}
        </ItemText>
        <ItemCheck />
      </>
    </Item>
  );
};
