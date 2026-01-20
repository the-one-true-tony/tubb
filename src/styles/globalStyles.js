import { createUseStyles } from 'react-jss'

export const useGlobalStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    html: {
      scrollBehavior: 'smooth',
      overflowX: 'hidden',
    },
    body: {
      fontFamily: ['Inter', 'system-ui', 'sans-serif'].join(', '),
      backgroundColor: '#f3f4f6',
      color: '#1f2937',
      overflowX: 'hidden',
      width: '100%',
      maxWidth: '100vw',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },
});
