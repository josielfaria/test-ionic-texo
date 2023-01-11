import {
  IonItem,
  IonLabel,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './styled.css';

interface MenuList {
  url: string;
  title: string;
}

const menuList: MenuList[] = [
  {
    title: 'Dashboard',
    url: '/page/dashboard',
  },
  {
    title: 'List',
    url: '/page/movie-list',
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {menuList.map((appPage, index) => {
        return (
          <IonMenuToggle key={index} autoHide={false}>
            <IonItem
              className={location.pathname === appPage.url ? 'selected' : ''}
              routerLink={appPage.url}
              routerDirection="none"
              lines="none" detail={false}
            >
              <IonLabel>{appPage.title}</IonLabel>
            </IonItem>
          </IonMenuToggle>
        );
      })}
    </>
  );
};

export default Menu;
