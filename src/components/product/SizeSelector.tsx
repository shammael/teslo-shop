import { TSize } from '@/interfaces';
import { Box, Button } from '@mui/material';

interface Props {
  selectedSize: TSize | null;
  sizes: TSize[];
  onSelectedSize: (size: TSize) => void;
}

const SizeSelector = ({ selectedSize, sizes, onSelectedSize }: Props) => (
  <Box display="flex" justifyContent="space-between">
    {sizes.map((size) => (
      <Button
        key={`${size}`}
        size="small"
        color={selectedSize === size ? 'primary' : 'info'}
        onClick={() => onSelectedSize(size)}
      >
        {size}
      </Button>
    ))}
  </Box>
);

export default SizeSelector;
