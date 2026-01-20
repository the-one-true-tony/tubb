import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useContactStyles = createUseStyles({
  section: {
    padding: '3rem 1rem',
    backgroundColor: theme.colors.white,
    '@media (min-width: 768px)': {
      padding: '5rem 1.5rem',
    },
  },
  container: {
    maxWidth: '896px',
    margin: '0 auto',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.colors.gray[900],
    marginBottom: '1.5rem',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '2.25rem',
      marginBottom: '2.5rem',
    },
  },
  card: {
    backgroundColor: theme.colors.blue[50],
    padding: '1rem',
    borderRadius: '0.5rem',
    borderLeft: `4px solid ${theme.colors.medicalBlue}`,
    boxShadow: theme.shadows.sm,
    '@media (min-width: 768px)': {
      padding: '2rem',
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    '@media (min-width: 768px)': {
      marginBottom: '2rem',
    },
  },
  iconContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3rem',
    height: '3rem',
    backgroundColor: theme.colors.medicalBlue,
    borderRadius: '50%',
    marginBottom: '0.75rem',
    '@media (min-width: 768px)': {
      width: '4rem',
      height: '4rem',
      marginBottom: '1rem',
    },
  },
  icon: {
    color: theme.colors.white,
    width: '1.5rem',
    height: '1.5rem',
    '@media (min-width: 768px)': {
      width: '2rem',
      height: '2rem',
    },
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: theme.colors.gray[900],
    marginBottom: '0.75rem',
    '@media (min-width: 768px)': {
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },
  },
  cardText: {
    fontSize: '0.875rem',
    color: theme.colors.gray[700],
    lineHeight: '1.75',
    maxWidth: '672px',
    margin: '0 auto 1rem',
    padding: '0 0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1.125rem',
      marginBottom: '1.5rem',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: theme.colors.medicalBlue,
    color: theme.colors.white,
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: 600,
    fontSize: '1rem',
    textDecoration: 'none',
    boxShadow: theme.shadows.md,
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: theme.colors.blue[700],
      boxShadow: theme.shadows.lg,
    },
    '@media (min-width: 768px)': {
      gap: '0.75rem',
      padding: '1rem 2rem',
      fontSize: '1.125rem',
    },
  },
  buttonIcon: {
    width: '1rem',
    height: '1rem',
    '@media (min-width: 768px)': {
      width: '1.25rem',
      height: '1.25rem',
    },
  },
});
