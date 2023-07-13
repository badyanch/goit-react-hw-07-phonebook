import { Toaster, toast } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader';
import { GlobalStyle } from 'components/GlobalStyle';
import * as S from './App.styled';
import { useEffect } from 'react';

export const App = () => {
  const { data, isSuccess, isError, isFetching } = useFetchContactsQuery();

  useEffect(() => {
    if (isError) {
      toast.error(
        'Something went wrong while uploading contacts, please try again later.'
      );
    }
  }, [isError]);

  return (
    <S.Container>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />

      <S.PrimaryTitle>Phonebook</S.PrimaryTitle>

      <ContactForm contacts={data} />

      <S.TitleBox>
        <S.SecondaryTitle>Contacts</S.SecondaryTitle>
        {isFetching && <Loader />}
      </S.TitleBox>

      <Filter />

      {isSuccess && <ContactList contacts={data} />}
    </S.Container>
  );
};
