import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '1.5',
  letterSpacing: 'normal',
  display: 'block',
  fontFamily: theme.typography.subtitle1,
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '17px',
  },
}));

function SubtitleHeading({ children, ...props }) {
  return (
    <Paragraph variant="subtitle1" {...props}>
      {children}
    </Paragraph>
  );
}

export default SubtitleHeading;
