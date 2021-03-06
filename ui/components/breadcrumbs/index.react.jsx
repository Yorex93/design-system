// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

const Crumb = props => (
  <li className={classNames('slds-breadcrumb__item', props.className)}>
    {props.hasMenu ? (
      props.children
    ) : (
      <a href="#" onClick={e => e.preventDefault()}>
        {props.children}
      </a>
    )}
  </li>
);

const BreadCrumbs = props => (
  <nav role="navigation" aria-label="Breadcrumbs">
    <ol
      className={classNames(
        'slds-breadcrumb slds-list_horizontal slds-wrap',
        props.listClassNames
      )}
    >
      {props.children}
    </ol>
  </nav>
);

BreadCrumbs.Crumb = Crumb;

export default BreadCrumbs;
