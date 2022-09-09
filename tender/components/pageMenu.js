import React from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';
import styles from '../styles/menu.module.css';

const PageMenu = () => {
  return (
    <Container fluid className={styles.pageMenu}>
      <Menu size="large" stackable>
        <Menu.Item>
          <img className={styles.pageMenu__logo} alt="logo" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item>
          
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default PageMenu;
