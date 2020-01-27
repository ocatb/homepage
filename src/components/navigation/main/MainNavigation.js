import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/styles';
// import A from '@material-ui/core/Link';

import styles from './style';

type Props = {
  classes: Object,
  options: [],
};

const MainNavigation = ({ classes, options }: Props) => (
  <ul>
    {options.map((link, i) => (
      <li className={classes.menuContainer} key={i}>
        {
          link.external ? 
          <a className={classes.navLink} href={link.to}>{link.text}</a>
          : 
          <Link
            to={link.to}
            className={classes.navLink}
            activeClassName={classes.navLinkActive}
            exact={'true'}>
            <span>{link.text}</span>
          </Link>
        }
      </li>
    ))}
  </ul>
);

export default withStyles(styles)(MainNavigation);
