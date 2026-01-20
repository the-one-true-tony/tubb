import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useVariantsStyles = createUseStyles({
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
  variantsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    '@media (min-width: 768px)': {
      gap: '1rem',
    },
  },
  variantCard: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.blue[50],
    padding: '1rem',
    borderRadius: '0.5rem',
    borderLeft: `4px solid ${theme.colors.medicalBlue}`,
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      padding: '1.5rem',
    },
  },
  variantName: {
    fontSize: '1.25rem',
    fontWeight: 900,
    color: theme.colors.medicalBlue,
    width: '7rem',
    flexShrink: 0,
    marginBottom: '0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1.5rem',
      width: '8rem',
      marginBottom: 0,
    },
  },
  variantDesc: {
    fontSize: '0.875rem',
    color: theme.colors.gray[700],
    '@media (min-width: 768px)': {
      fontSize: '1.125rem',
    },
  },
  note: {
    marginTop: '1.5rem',
    textAlign: 'center',
    fontSize: '0.75rem',
    color: theme.colors.gray[500],
    fontStyle: 'italic',
    '@media (min-width: 768px)': {
      marginTop: '2rem',
      fontSize: '0.875rem',
    },
  },
});
