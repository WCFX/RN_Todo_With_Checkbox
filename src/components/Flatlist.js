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
  color: ${({ checkDone }) => (checkDone ? '#897de0' : '#222')};
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #555;
  background-color: ${({ checkDone }) =>
    checkDone ? '#41aea8' : 'transparent'};
`;

export default ({ data, Checkbox }) => {
  return (
    <Item onPress={Checkbox} activeOpacity={0.7}>
      <>
        <ItemText checkDone={data.done}>{data.task}</ItemText>
        <ItemCheck checkDone={data.done} />
      </>
    </Item>
  );
};
