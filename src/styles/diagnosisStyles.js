import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useDiagnosisStyles = createUseStyles({
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
    backgroundColor: theme.colors.white,
    padding: '1rem',
    borderRadius: '0.5rem',
    borderLeft: `4px solid ${theme.colors.medicalBlue}`,
    boxShadow: theme.shadows.sm,
    overflow: 'hidden',
    '@media (min-width: 768px)': {
      padding: '1.5rem',
    },
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: theme.colors.gray[900],
    marginBottom: '1.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
  timelineContainer: {
    position: 'relative',
  },
  timelineLine: {
    display: 'none',
    position: 'absolute',
    left: '1rem',
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: theme.colors.medicalBlue,
    '@media (min-width: 768px)': {
      display: 'block',
    },
  },
  timelineItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    position: 'relative',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    '@media (min-width: 768px)': {
      gap: '1.5rem',
    },
  },
  timelineIconContainer: {
    display: 'none',
    position: 'relative',
    zIndex: 10,
    flexShrink: 0,
    '@media (min-width: 768px)': {
      display: 'block',
    },
  },
  timelineIcon: {
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    backgroundColor: theme.colors.medicalBlue,
    border: `4px solid ${theme.colors.white}`,
    boxShadow: theme.shadows.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineContent: {
    flex: 1,
    paddingTop: 0,
    minWidth: 0,
    '@media (min-width: 768px)': {
      paddingTop: '0.25rem',
    },
  },
  timelineCard: {
    backgroundColor: theme.colors.blue[50],
    padding: '1rem',
    borderRadius: '0.5rem',
    border: `1px solid ${theme.colors.blue[100]}`,
    '@media (min-width: 768px)': {
      padding: '1.25rem',
    },
  },
  timelineBadge: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: theme.colors.medicalBlue,
    backgroundColor: theme.colors.white,
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  timelineBadgeIcon: {
    width: '0.75rem',
    height: '0.75rem',
    '@media (min-width: 768px)': {
      display: 'none',
    },
  },
  timelineItemTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.colors.gray[900],
    marginBottom: '0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1.125rem',
    },
  },
  timelineText: {
    fontSize: '0.875rem',
    color: theme.colors.gray[700],
    lineHeight: '1.75',
    marginBottom: '0.5rem',
  },
  timelineList: {
    listStyle: 'disc',
    listStylePosition: 'outside',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    color: theme.colors.gray[700],
    marginLeft: '1.25rem',
    paddingLeft: '0.5rem',
  },
  timelineListItem: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
  },
  paragraph: {
    fontSize: '0.875rem',
    color: theme.colors.gray[700],
    lineHeight: '1.75',
    marginBottom: '0.75rem',
    '@media (min-width: 768px)': {
      fontSize: '1.125rem',
    },
  },
  paragraphLarge: {
    fontSize: '1.125rem',
    color: theme.colors.gray[700],
    lineHeight: '1.75',
    marginTop: '1rem',
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
    '@media (min-width: 768px)': {
      fontSize: '1rem',
    },
  },
  subsection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  subsectionTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.colors.gray[900],
    marginBottom: '0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '1.125rem',
    },
  },
  strong: {
    fontWeight: 'bold',
    color: theme.colors.gray[900],
  },
});
