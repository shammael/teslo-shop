import { Box, IconButton, Typography } from '@mui/material';
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material';

interface Props {
  counter: number;
  maxValue?: number;
  onSelectCounter: (param: number) => void;
}

const ItemCounter = ({ counter, onSelectCounter, maxValue }: Props) => (
  <Box display="flex" alignItems="center">
    <IconButton
      onClick={() => {
        if (counter < 2) return null;

        return onSelectCounter(counter - 1);
      }}
    >
      <RemoveCircleOutline />
    </IconButton>
    <Typography sx={{ width: 40, textAlign: 'center' }}>{counter}</Typography>
    <IconButton
      onClick={() => {
        if (!maxValue) {
          return onSelectCounter(counter + 1);
        }
        if (maxValue && counter < maxValue) {
          return onSelectCounter(counter + 1);
        }
        return null;
      }}
    >
      <AddCircleOutline />
    </IconButton>
  </Box>
);

export default ItemCounter;
