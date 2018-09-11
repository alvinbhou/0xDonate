import React from 'react';
import { render } from 'react-dom';
import RootRouter from './router';
import { AppContainer } from 'react-hot-loader'
import 'styles/index.scss';

if (typeof document !== 'undefined' && window) {
  window.onload = () => {
    return render(
      <AppContainer>
        <RootRouter />
      </AppContainer>,
      document.getElementById('app')
    )
  }
}
