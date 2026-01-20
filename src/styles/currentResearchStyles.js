import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useCurrentResearchStyles = createUseStyles({
  section: {
    padding: '3rem 1rem',
    backgroundColor: theme.colors.gray[50],
    '@media (min-width: 768px)': {
      padding: '5rem 1.5rem',
    },
  },
  container: {
    maxWidth: '896px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    '@media (min-width: 768px)': {
      marginBottom: '3rem',
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
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: '0.5rem',
    border: `1px solid ${theme.colors.gray[200]}`,
    boxShadow: theme.shadows.sm,
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    padding: '0.75rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.colors.gray[50],
    },
    '@media (min-width: 768px)': {
      padding: '1rem 1.5rem',
    },
  },
  buttonTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: theme.colors.gray[900],
    paddingRight: '1rem',
    wordBreak: 'break-word',
    '@media (min-width: 768px)': {
      fontSize: '1.125rem',
    },
  },
  icon: {
    width: '1.25rem',
    height: '1.25rem',
    flexShrink: 0,
    color: theme.colors.medicalBlue,
  },
  iconCollapsed: {
    width: '1.25rem',
    height: '1.25rem',
    flexShrink: 0,
    color: theme.colors.gray[400],
  },
  content: {
    padding: '0.5rem 1rem 1rem',
    borderTop: `1px solid ${theme.colors.gray[100]}`,
    '@media (min-width: 768px)': {
      padding: '0.5rem 1.5rem 1.5rem',
    },
  },
  description: {
    fontSize: '0.875rem',
    color: theme.colors.gray[600],
    lineHeight: '1.75',
    marginBottom: '0.75rem',
    '@media (min-width: 768px)': {
      fontSize: '1rem',
      marginBottom: '1rem',
    },
  },
  linksSection: {
    marginTop: '0.75rem',
    paddingTop: '0.75rem',
    borderTop: `1px solid ${theme.colors.gray[100]}`,
    '@media (min-width: 768px)': {
      marginTop: '1rem',
      paddingTop: '1rem',
    },
  },
  linksTitle: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: theme.colors.gray[700],
    marginBottom: '0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '0.875rem',
    },
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  link: {
    color: theme.colors.medicalBlue,
    textDecoration: 'none',
    fontSize: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    wordBreak: 'break-word',
    '&:hover': {
      color: theme.colors.blue[700],
      textDecoration: 'underline',
    },
    '@media (min-width: 768px)': {
      fontSize: '0.875rem',
    },
  },
  linkIcon: {
    width: '0.75rem',
    height: '0.75rem',
    flexShrink: 0,
    '@media (min-width: 768px)': {
      width: '1rem',
      height: '1rem',
    },
  },
});
