import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import FamilyMemberTile from '../components/family_member_tile';
import FamilyMember, { initialFam } from '../models/family_member_model';
import AddNewFamilyMemberComponent from '../components/add_new_member_component';
import { SpacerReg } from '../styles/shared';
import axios from 'axios';
import uuid from 'react-uuid';
import ReactLoading from 'react-loading';

const getMembersURL =
  'https://2swdepm0wa.execute-api.us-east-1.amazonaws.com/prod/NavaInterview/household/members';

const addUserURL =
  'https://2swdepm0wa.execute-api.us-east-1.amazonaws.com/prod/NavaInterview/household/members/new';

const HomePage = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(getMembersURL)
      .then(function (response) {
        const members = response.data.members;
        const _familyMembers = members.map((memberData) => {
          const newMember: FamilyMember = {
            id: uuid(),
            firstName: memberData.firstName,
            lastName: memberData.lastName,
            favFruit: memberData.favoriteFruit,
            description: memberData.description,
          };
          return newMember;
        });
        setFamilyMembers(_familyMembers);
        setIsLoading(false);
        // handle success
        console.log(members);
      })
      .catch((e) => {});
  }, []);

  return (
    <div>
      <BannerStyle>
        <h1>Marketplace</h1>
      </BannerStyle>

      <MainDivStyle>
        <h4>Your Household</h4>
        <SpacerReg />
        <p>Welcome to the Marketplace! Review your Household below:</p>
        <SpacerReg />
        {isLoading ? (
          <ReactLoading color={'#00000'} />
        ) : (
          <div className={'familyMemberList'}>
            {familyMembers.map((member: FamilyMember) => {
              return (
                <FamilyMemberTile
                  key={member.id}
                  member={member}
                ></FamilyMemberTile>
              );
            })}
          </div>
        )}
        <SpacerReg />
        <AddNewFamilyMemberComponent
          saveMember={(newMember: FamilyMember) => {
            setIsLoading(true);
            axios({
              method: 'post',
              url: addUserURL,
              data: {
                firstName: newMember.firstName,
                lastName: newMember.lastName,
                favoriteFruit: newMember.favFruit,
                description: newMember.description,
              },
            })
              // axios
              //   .post(addUserURL, {
              //     firstName: newMember.firstName,
              //     lastName: newMember.lastName,
              //     favoriteFruit: newMember.favFruit,
              //     description: newMember.description,
              //   })
              .then(function (response) {
                console.log(response);
                setIsLoading(false);
              })
              .catch(function (error) {
                console.log(error);
              });

            setFamilyMembers([...familyMembers, newMember]);
          }}
        />
        <SpacerReg />
      </MainDivStyle>
    </div>
  );
};

const BannerStyle = styled.div`
  background-color: ${(props) => props.theme.mainBlue};
  height:100px;
  width: 100vw;
  > h1 {
    margin:0px;
    line-height:100px;
    padding-left:40px;
    color: var(--white-text-color);
  }
  @media only screen and (max-width: 600px) {
   >h1{
     text-align:center;
     padding-left:0px;
   }
  }
`;

const MainDivStyle = styled.div`
  background-color: var(--bg-color);
  height:100px;
  width: calc( 100vw - 80px );
  padding: 30px 40px;
  .familyMemberList{
    display:flex;
    flex-wrap: wrap;
    gap:20px;
  }
`;

export default HomePage;
