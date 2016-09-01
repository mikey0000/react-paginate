'use strict';

import React from 'react';

export default class PageView extends React.Component {
  render() {
    let linkClassName = this.props.pageLinkClassName;
    let cssClassName = this.props.pageClassName;
    let onClick = this.props.onClick;
    let link;

    if (this.props.selected) {
      if (typeof(cssClassName) !== 'undefined') {
        cssClassName = cssClassName + ' ' + this.props.activeClassName;
      } else {
        cssClassName = this.props.activeClassName;
      }

      link = (<span className={linkClassName}>
        {this.props.page}
      </span>);

    } else {
      link = (<a className={linkClassName}>
        {this.props.page}
      </a>);
    }

    return (
        <li onClick={onClick} className={cssClassName}>
          {link}
        </li>
    );
  }
};
