import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react';
import { IonReactHashRouter, IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* CSS */
import './styles/main.css';

/* Pages */
import DashboardPage from './pages/Dashboard';
import MovieListPage from './pages/MovieList';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <IonReactHashRouter >
            <IonRouterOutlet id='main'>
              <Route path='/'>
                <Redirect to='/page/dashboard' />
              </Route>

              <Route path='/page/dashboard'>
                <DashboardPage />
              </Route>

              <Route path='/page/movie-list'>
                <MovieListPage />
              </Route>
            </IonRouterOutlet>
          </IonReactHashRouter>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
