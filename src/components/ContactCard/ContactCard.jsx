import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { BtnLoader } from 'components/Loader';
import * as S from './ContactCard.styled';

export const ContactCard = ({ contactId, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isError }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (isError) {
      toast.error(
        'Something went wrong while deleting a contact, please try again later.'
      );
    }
  }, [isError]);

  const handleDeleteContact = async contactId => {
    await deleteContact(contactId);
  };

  return (
    <S.Card>
      <p>
        {name}: {number}
      </p>
      <S.Button
        type="button"
        onClick={() => handleDeleteContact(contactId)}
        disabled={isDeleting}
      >
        {isDeleting && <BtnLoader />}Delete
      </S.Button>
    </S.Card>
  );
};

ContactCard.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
