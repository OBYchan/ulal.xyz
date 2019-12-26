import { Global } from '@emotion/core';
import * as React from 'react';
import Helmet from 'react-helmet';

import GlobalStyles from './styles';
import { getJsonLdWebsite } from '../utils/jsonld'

interface IndexProps {
  className?: string;
}

const IndexLayout: React.FC<IndexProps> = props => {
  return (
    <div className={props.className}>
      <Helmet>
        <script type="application/ld+json">{` ${getJsonLdWebsite()} `}</script>
      </Helmet>
      <Global styles={GlobalStyles} />
      {props.children}
    </div>
  );
};

export default IndexLayout;
