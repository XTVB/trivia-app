import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PATH } from 'src/utils/constants';
import TopMenu from 'src/components/Layout/TopMenu';
import HomePage from 'src/screens/Home';
import QuizPage from 'src/screens/Quiz';
import ResultsPage from 'src/screens/Results';

const Routes: FC = () => {
  return (
    <div className="layout">
      <div className="container">
        <TopMenu />
        <div className="content">
          <Switch>
            <Route exact path={PATH.HOME} component={HomePage} />
            <Route exact path={PATH.QUIZ} component={QuizPage} />
            <Route exact path={PATH.RESULTS} component={ResultsPage} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Routes;
