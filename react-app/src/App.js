import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { load_pins } from './store/pins';
import { authenticate } from './store/session';
import Homepage from './components/Homepage';
import PinPage from './components/PinPage';
import PinBuilder from './components/PinBuilder.js';
import UserProfile from './components/UserProfile';
import BoardPage from './components/BoardPage';
import { load_boards_by_user } from './store/boards';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session?.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate())
      setLoaded(true);
      await dispatch(load_pins())


    })();
  }, [dispatch]);


  if (!loaded) {
    return null;
  }

  if (loaded && user) {
    dispatch(load_boards_by_user(user?.id))
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LandingPage />
        </Route>
        <ProtectedRoute path='/profile/:profileId' exact={true} >
          <UserProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <Homepage />
        </ProtectedRoute>
        <ProtectedRoute path='/pins/:pinId' exact={true} >
          <PinPage />
        </ProtectedRoute>
        <ProtectedRoute path='/pinbuilder' exact={true} >
          <PinBuilder />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/:profileId/boards/:boardId' exact={true} >
          <BoardPage />
        </ProtectedRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
