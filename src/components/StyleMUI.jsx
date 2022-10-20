import { makeStyles } from '@material-ui/core/styles'; // styling MUI icons

export const useStyles = makeStyles(() => ({
  customHover: {
    '&:hover, &.Mui-focusVisible': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
    },
  },
}));
