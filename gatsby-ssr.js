/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
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
