import { useEffect, Suspense, lazy } from 'react';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';


import AppBar from '../AppBar';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import { authOperations, authSelectors } from '../Redux/auth';
import { Spinner } from 'react-bootstrap';

import {
  getContacts,
  addContact,
  deleteContact,
} from "../Redux/Contacts/contactsOperations";

const HomeView = lazy(() => import('../views/HomView'));

const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));


const App = () => {
  


  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);


  ////////додає контакт

  const addContacts1 = ({ name, number }) => {
    if (
      contacts.some(
        (contact) =>
          contact.name?.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`name "${name}" is already in list`);
      return;
    }
    const newContact = {
      // id: nanoid(),
      name: name,
      number: number,
    };
    console.log(newContact);
    dispatch(addContact(newContact));

  };
  // шукає контакт

  const handleFilterChange = (value) => {
    filter(value);
  };

  ////видаляє контакт


  const deleteContacts1 = (id) => () => {
  dispatch(deleteContact(id));
  };

  return (
    <div>
          {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
          <>
            <Switch>
              
              <Suspense fallback={<Spinner animation="grow" />}>
                <AppBar />
                <PublicRoute exact path="/">
                  <HomeView />
                </PublicRoute>
                <PublicRoute exact path="/register" restricted>
                  <RegisterView />
                </PublicRoute>
                <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                  <LoginView />
                </PublicRoute>
                <PrivateRoute path="/contacts" redirectTo="/login">
                  <h1>Phonebooc</h1>
                  <ContactForm onSubmit={addContacts1} />
                  <Filter
                  onChange={(e) => handleFilterChange(e.target.value)}
                  />
                  <ContactList
                  onDelete={deleteContacts1} 
                  />
                  </PrivateRoute>
                </Suspense>
            </Switch>
            
        </>)}
      <ToastContainer />
    </div>
  );
};

export default App;
