import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useExpressionsStyles = createUseStyles({
  section: {
    padding: '3rem 1rem',
    backgroundColor: theme.colors.gray[50],
    '@media (min-width: 768px)': {
      padding: '5rem 1.5rem',
    },
  },
  container: {
    maxWidth: '1152px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    '@media (min-width: 768px)': {
      marginBottom: '4rem',
    },
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.colors.gray[900],
    marginBottom: '0.75rem',
    '@media (min-width: 768px)': {
      fontSize: '2.25rem',
      marginBottom: '1rem',
    },
  },
  subtitle: {
    fontSize: '0.875rem',
    color: theme.colors.gray[600],
    maxWidth: '672px',
    margin: '0 auto',
    padding: '0 0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1rem',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  card: {
    backgroundColor: theme.colors.white,
    padding: '1rem',
    borderRadius: '0.75rem',
    boxShadow: theme.shadows.lg,
    border: `1px solid ${theme.colors.gray[100]}`,
    transition: 'box-shadow 0.2s',
    '&:hover': {
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
    },
    '@media (min-width: 768px)': {
      padding: '1.5rem',
    },
  },
  iconContainer: {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: theme.colors.blue[100],
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.75rem',
    color: theme.colors.medicalBlue,
    '@media (min-width: 768px)': {
      width: '3rem',
      height: '3rem',
      marginBottom: '1rem',
    },
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: theme.colors.gray[900],
    marginBottom: '0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1.25rem',
    },
  },
  cardDescription: {
    fontSize: '0.875rem',
    color: theme.colors.gray[600],
    lineHeight: '1.75',
    '@media (min-width: 768px)': {
      fontSize: '1rem',
    },
  },
});
