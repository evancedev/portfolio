/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { GlobalStyle as GlobalStyleBase } from './src/styles';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import Layout from './src/components/layout';

// Create a styled component that properly receives the theme
const GlobalStyle = () => <GlobalStyleBase />;

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
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
