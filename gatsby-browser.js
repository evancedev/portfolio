/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
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

// Prevent default scroll restoration to fix page transitions
const scrollTo = id => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(() => scrollTo(hash.substr(1)), 0);
  }
};
