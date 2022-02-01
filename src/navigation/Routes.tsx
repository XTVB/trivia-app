import React, { FC, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { PATH } from 'src/utils/constants';
import TopMenu from 'src/components/TopMenu';
import HomePage from 'src/screens/Home';
import QuizPage from 'src/screens/Quiz';
import ResultsPage from 'src/screens/Results';
import ConfigPage from 'src/screens/Config';
import PastResultsPage from 'src/screens/PastResults';
import useStyles from './RoutesStyles';
import LoadingBar from 'react-redux-loading-bar';
import SlideRoutes from './SlideRoutes';
import { useAppDispatch } from 'src/redux/store';
import { fetchCategoryList, initiatePastResults } from 'src/redux/SystemState';

const Routes: FC = () => {
  const { classes } = useStyles();
  const location = useLocation();
  const dispatch = useAppDispatch();

  // Initialisation
  useEffect(() => {
    dispatch(initiatePastResults());
    dispatch(fetchCategoryList());
  }, [dispatch]);

  return (
    <div className={classes.layout}>
      <div className={classes.container}>
        <LoadingBar className={classes.loadingBar} />
        <TopMenu />
        <div className={classes.content}>
          <SlideRoutes duration={500} location={location}>
            <Route exact path={PATH.HOME} component={HomePage} />
            <Route exact path={PATH.PAST_RESULT} component={PastResultsPage} />
            <Route exact path={PATH.CONFIGURE} component={ConfigPage} />
            <Route exact path={PATH.QUIZ} component={QuizPage} />
            <Route exact path={PATH.RESULTS} component={ResultsPage} />
          </SlideRoutes>
        </div>
      </div>
    </div>
  );
};

export default Routes;
