import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useStatisticsStyles = createUseStyles({
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
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.colors.gray[900],
    marginBottom: '2rem',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '2.25rem',
      marginBottom: '3rem',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '3rem',
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  chartCard: {
    backgroundColor: theme.colors.white,
    padding: '1rem',
    borderRadius: '0.75rem',
    boxShadow: theme.shadows.lg,
    overflow: 'hidden',
    '@media (min-width: 768px)': {
      padding: '2rem',
    },
  },
  chartTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: theme.colors.gray[800],
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
    },
  },
  mobileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  },
  mobileChartItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chartContainer: {
    height: '8rem',
    width: '100%',
    minWidth: 0,
    minHeight: '128px',
  },
  chartContainerLarge: {
    height: '500px',
    width: '100%',
    minWidth: 0,
    minHeight: '500px',
  },
  chartContainerMedium: {
    height: '20rem',
    width: '100%',
    minWidth: 0,
    minHeight: '320px',
  },
  chartContainerSmall: {
    height: '16rem',
    width: '100%',
    minWidth: 0,
    minHeight: '256px',
  },
  chartContainerPie: {
    position: 'relative',
    width: '100%',
    maxWidth: '280px',
    height: '280px',
    marginBottom: '1.5rem',
    minWidth: 0,
    minHeight: '280px',
  },
  itemName: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: theme.colors.gray[900],
    marginTop: '0.5rem',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  itemValue: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: theme.colors.medicalBlue,
    marginTop: '0.25rem',
  },
  note: {
    textAlign: 'center',
    fontSize: '0.75rem',
    color: theme.colors.gray[500],
    marginTop: '1rem',
    '@media (min-width: 768px)': {
      fontSize: '0.875rem',
    },
  },
  seizureSection: {
    marginTop: '3rem',
    '@media (min-width: 768px)': {
      marginTop: '4rem',
    },
  },
  seizureGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    '@media (min-width: 768px)': {
      gap: '3rem',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    padding: '1rem 0',
  },
  percentage: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: '0.5rem',
    '@media (min-width: 768px)': {
      fontSize: '3rem',
    },
  },
  percentageText: {
    fontSize: '0.875rem',
    color: theme.colors.gray[600],
    '@media (min-width: 768px)': {
      fontSize: '1rem',
    },
  },
  findings: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  findingsTitle: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: theme.colors.gray[700],
  },
  findingsList: {
    fontSize: '0.75rem',
    color: theme.colors.gray[600],
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    marginLeft: '1rem',
    listStyle: 'disc',
    '@media (min-width: 768px)': {
      fontSize: '0.875rem',
    },
  },
  findingsListItem: {
    lineHeight: '1.5',
  },
  strong: {
    fontWeight: 'bold',
  },
});
