import React, { Component, useState } from 'react';
import styled from 'styled-components';
import FamilyMember from '../models/family_member_model';
import AddNewFamilyMemberComponent from '../components/add_new_member_component';

interface Props {
  member: FamilyMember;
}

const FamilyMemberTile = (props: Props) => {
  return (
    <FamilyMemberBoxStyle>
      <h5>{`${props.member.firstName} ${props.member.lastName}`} </h5>
      <p className={'subtext'}>
        <b>Description:</b> {props.member.description}
      </p>
      <p className={'subtext'}>
        <b>Favorite Fruit:</b> {props.member.favFruit}
      </p>
    </FamilyMemberBoxStyle>
  );
};

const FamilyMemberBoxStyle = styled.div`
  background-color: var(--bg-color);
  height:90px;
  width:300px;
  padding:20px;
  border: 2px solid lightgrey;
  border-radius: 5px;
  .subtext{
    padding-top:15px;
    font-size: 0.9em;
  }
`;

export default FamilyMemberTile;
