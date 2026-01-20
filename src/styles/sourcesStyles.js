import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useSourcesStyles = createUseStyles({
  section: {
    padding: '3rem 1rem',
    backgroundColor: theme.colors.gray[900],
    color: theme.colors.gray[300],
    '@media (min-width: 768px)': {
      padding: '5rem 1.5rem',
    },
  },
  container: {
    maxWidth: '896px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.colors.white,
    marginBottom: '1.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1.875rem',
      marginBottom: '2rem',
    },
  },
  grid: {
    display: 'grid',
    gap: '1rem',
    textAlign: 'left',
    '@media (min-width: 768px)': {
      gap: '1.5rem',
    },
  },
  card: {
    padding: '0.75rem',
    border: `1px solid ${theme.colors.gray[700]}`,
    borderRadius: '0.5rem',
    transition: 'border-color 0.2s',
    '&:hover': {
      borderColor: theme.colors.blue[500],
    },
    '@media (min-width: 768px)': {
      padding: '1rem',
    },
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.colors.white,
    marginBottom: '0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1.25rem',
    },
  },
  link: {
    color: theme.colors.blue[400],
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  description: {
    color: theme.colors.gray[400],
    fontSize: '0.875rem',
  },
  disclaimer: {
    marginTop: '2rem',
    fontSize: '0.75rem',
    color: theme.colors.gray[500],
    '@media (min-width: 768px)': {
      marginTop: '3rem',
      fontSize: '0.875rem',
    },
  },
});
