import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useHeroStyles = createUseStyles({
  section: {
    position: 'relative',
    background: `linear-gradient(to right, ${theme.colors.medicalBlue}, ${theme.colors.blue[700]})`,
    color: theme.colors.white,
    padding: '3rem 1rem',
    overflow: 'hidden',
    '@media (min-width: 768px)': {
      padding: '6rem 3rem',
    },
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: theme.colors.black,
    opacity: 0.1,
  },
  container: {
    maxWidth: '896px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 800,
    marginBottom: '1rem',
    letterSpacing: '-0.025em',
    wordBreak: 'break-word',
    hyphens: 'auto',
    '@media (min-width: 768px)': {
      fontSize: '3.75rem',
      marginBottom: '1.5rem',
    },
  },
  subtitle: {
    fontSize: '1rem',
    fontWeight: 300,
    color: theme.colors.blue[100],
    maxWidth: '672px',
    margin: '0 auto',
    lineHeight: '1.75',
    padding: '0 0.5rem',
    wordBreak: 'break-word',
    hyphens: 'auto',
    '@media (min-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
});
