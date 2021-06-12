const formStyles = theme => ({
  main: {
    fontFamily: 'Poppins',
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    fontFamily: 'Poppins',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,

    '@media (min-width: 1200px)': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2.5),
    }
  },
  paperHeader: {
    fontFamily: 'Poppins',
    fontSize: '1.5rem',

    '@media (min-width: 1200px)': {
      fontSize: '1.625rem',
    }
  },
  alert: {
    fontFamily: 'Poppins',
    fontSize: '0.875rem',
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),

    '@media (min-width: 1200px)': {
      fontSize: '1rem',
      marginTop: theme.spacing(2.25),
      marginBottom: theme.spacing(0.5),
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
    }
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(0),

    '@media (min-width: 1200px)': {
      marginTop: theme.spacing(0),
    }
  },
  formInput: {
    fontFamily: 'Poppins',
    fontSize: '1rem',

    '@media (min-width: 1200px)': {
      fontSize: '1.0625rem',
    }
  },
  btn: {
    fontFamily: 'Poppins',
    fontSize: '0.875rem',
    marginTop: theme.spacing(2.5),

    '@media (min-width: 1200px)': {
      fontSize: '0.9375rem',
      marginTop: theme.spacing(3.5),
    }
  },
  btnSocial: {
    fontFamily: 'Poppins',
    fontSize: '17px',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  flexSpaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(1.5),

    '@media (min-width: 1200px)': {
      marginTop: theme.spacing(2),
    }
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(2),

    '@media (min-width: 1200px)': {
      marginTop: theme.spacing(2.25),
    }
  },
  divider: {
    width: '100%',
    marginTop: theme.spacing(2),

    '@media (min-width: 1200px)': {
      marginTop: theme.spacing(2.5),
    }
  },
  midDivider: {
    width: '100%',
    marginTop: theme.spacing(4),

    '@media (min-width: 1200px)': {
      marginTop: theme.spacing(4.5),
    }
  },
  endDivider: {
    width: '100%',
    marginTop: theme.spacing(4),

    '@media (min-width: 1200px)': {
      marginTop: theme.spacing(4),
    }
  },
  updateProfileDivider: {
    width: '100%',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),

    '@media (min-width: 1200px)': {
      marginTop: theme.spacing(4.5),
      marginBottom: theme.spacing(2.5),
    }
  },
  formSubHeader: {
    fontFamily: 'Poppins',
    fontSize: '1.1875rem',
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(0),

    '@media (min-width: 1200px)': {
      fontSize: '1.25rem',
      marginTop: theme.spacing(3.5),
      marginBottom: theme.spacing(0),
    }
  },
  linkHeader: {
    fontFamily: 'Poppins',
    fontSize: '1rem',
    width: '37%',

    '@media (min-width: 1200px)': {
      fontSize: '1.0625rem',
    }
  },
  link: {
    fontFamily: 'Poppins',
    fontSize: '0.875rem',
    color: '#303f9f',
    fontWeight: 'bolder',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
    '&:active': {
      color: '#222d75',
    },

    '@media (min-width: 1200px)': {
      fontSize: '0.9375rem',
    }
  },
  switchLabel: {
    fontFamily: 'Poppins',
    fontSize: '1rem',

    '@media (min-width: 1200px)': {
      fontSize: '1.0625rem',
    }
  },
  userInfo: {
    fontFamily: 'Poppins',
    fontSize: '1rem',
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),

    '@media (min-width: 1200px)': {
      fontSize: '1.0625rem',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    }
  },
});

export default formStyles;