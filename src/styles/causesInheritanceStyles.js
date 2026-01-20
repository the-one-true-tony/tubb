import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useCausesInheritanceStyles = createUseStyles({
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
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    '@media (min-width: 768px)': {
      gap: '2rem',
    },
  },
  card: {
    backgroundColor: theme.colors.blue[50],
    padding: '1rem',
    borderRadius: '0.5rem',
    borderLeft: `4px solid ${theme.colors.medicalBlue}`,
    '@media (min-width: 768px)': {
      padding: '1.5rem',
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
  paragraph: {
    fontSize: '0.875rem',
    color: theme.colors.gray[700],
    lineHeight: '1.75',
    marginBottom: '0.75rem',
    '@media (min-width: 768px)': {
      fontSize: '1.125rem',
      marginBottom: '1rem',
    },
  },
  paragraphSmall: {
    fontSize: '0.875rem',
    color: theme.colors.gray[700],
    lineHeight: '1.75',
    '@media (min-width: 768px)': {
      fontSize: '1rem',
    },
  },
  paragraphWithMargin: {
    fontSize: '0.875rem',
    color: theme.colors.gray[700],
    lineHeight: '1.75',
    marginTop: '0.75rem',
    '@media (min-width: 768px)': {
      fontSize: '1.125rem',
      marginTop: '1rem',
    },
  },
  contentSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  strong: {
    color: theme.colors.gray[900],
    fontWeight: 'bold',
  },
  list: {
    listStyle: 'disc',
    listStylePosition: 'outside',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    color: theme.colors.gray[700],
    marginLeft: '1.25rem',
    paddingLeft: '0.5rem',
  },
  listItem: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
  },
  subsection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  subsectionTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: theme.colors.gray[900],
    marginBottom: '0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1.25rem',
    },
  },
});
