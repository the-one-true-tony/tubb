import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const usePageStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colors.softBg,
    fontFamily: theme.fonts.sans.join(', '),
    overflowX: 'hidden',
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    zIndex: 50,
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    borderBottom: `1px solid ${theme.colors.gray[100]}`,
  },
  navContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: theme.colors.medicalBlue,
    textDecoration: 'none',
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.colors.blue[700],
    },
  },
  navLinks: {
    display: 'none',
    alignItems: 'center',
    gap: '1.5rem',
    '@media (min-width: 768px)': {
      display: 'flex',
    },
  },
  navLink: {
    color: theme.colors.gray[700],
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.colors.medicalBlue,
    },
  },
  main: {
    paddingTop: '4rem',
  },
  footer: {
    backgroundColor: theme.colors.gray[950],
    color: theme.colors.gray[600],
    padding: '2rem 0',
    textAlign: 'center',
    fontSize: '0.875rem',
  },
  footerText: {
    marginTop: '0.5rem',
    color: theme.colors.gray[500],
  },
});
