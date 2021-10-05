import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import Modal, { ModalProvider } from 'styled-react-modal';
import FamilyMember from '../models/family_member_model';
import uuid from 'react-uuid';

const AddNewFamilyMemberComponent = ({ saveMember }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function toggleModal(e) {
    setIsFormOpen(!isFormOpen);
  }

  function onSubmit(event) {
    event.preventDefault();
    const firstName: string = event.target.fname.value;
    const lastName: string = event.target.lname.value;
    const description: string = event.target.description.value;
    const favFruit: string = event.target.favFruit.value;
    if (firstName && lastName && description && favFruit) {
      const newMember: FamilyMember = {
        id: uuid(),
        firstName,
        lastName,
        description,
        favFruit,
      };
      saveMember(newMember);
      setIsFormOpen(false);
    }
  }

  return (
    <div>
      <div>
        <AddButton onClick={toggleModal}>Add New Member</AddButton>
      </div>
      <StyledModal
        isOpen={isFormOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <Form onSubmit={onSubmit}>
          <h5>Add New Member</h5>
          <div>
            <FormRow>
              <label htmlFor="fname">First Name</label>
              <div className={'inputDiv'}>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Your first name.."
                />
              </div>
            </FormRow>
            <FormRow>
              <label htmlFor="lname">Last Name</label>
              <div className={'inputDiv'}>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Your last name.."
                />
              </div>
            </FormRow>
            <FormRow>
              <label htmlFor="name">Description</label>

              <div className={'inputDiv'}>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="description.."
                />
              </div>
            </FormRow>
            <FormRow>
              <label htmlFor="favFruit">Favorite Fruit</label>
              <div className={'inputDiv'}>
                <input
                  type="text"
                  id="favFruit"
                  name="favfruit"
                  placeholder="favorite fruit.."
                />
              </div>
            </FormRow>
          </div>
          <ButtonRow>
            <button onClick={toggleModal}>Cancel</button>
            <button type="submit">Add Member</button>
          </ButtonRow>
        </Form>
      </StyledModal>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  width: 13rem;
  height: 18rem;
`;
const AddButton = styled.button`
    background: ${(props) => props.theme.mainBlue};
    color:white;
    border-radius: 2px;
    padding:5px;
`;

const FormRow = styled.div`
    padding-top:20px;
    .inputDiv{
      padding-top:5px;
    }
`;
const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top:40px;
`;
const StyledModal = Modal.styled`
  width: 15rem;
  height: 20rem;
  padding:2rem;
  background-color: white;
  border-radius:5px;
`;

export default AddNewFamilyMemberComponent;
