import { CssBaseline } from '@mui/material';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import useAlan from './Alan';
import { Actors, Movies, NavBar, Profile, MovieInfomation } from './index';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInfomation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;
