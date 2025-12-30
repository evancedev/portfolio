/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { GlobalStyle } from './src/styles';
import Layout from './src/components/layout';

export const wrapPageElement = ({ element, props }) => (
  <>
    <GlobalStyle />
    <Layout {...props}>{element}</Layout>
  </>
);
