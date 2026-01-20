import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

export const useAdBannerStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0',
  },
  containerGray: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0',
    backgroundColor: theme.colors.gray[50],
    padding: '1rem 0',
  },
  containerWhite: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0',
    backgroundColor: theme.colors.white,
    padding: '1rem 0',
  },
  ad: {
    display: 'block',
    minHeight: '100px',
  },
});
