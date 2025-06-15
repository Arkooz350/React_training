import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function IconButtonWithBadge() {
  return (
    <IconButton>
      <ArrowDownwardIcon fontSize="large" style={{display:"inline-flex"}}/>
      <CartBadge badgeContent={null} color="primary" overlap="circular" />
    </IconButton>
  );
}
