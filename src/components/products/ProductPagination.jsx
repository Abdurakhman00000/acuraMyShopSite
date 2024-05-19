import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useProduct } from '../../context/ProductContext';

export default function PaginationRounded() {

    const {count, setPage} = useProduct();

    function handlerPage (p, n) {
        setPage(n)
    }
  return (
    <Stack spacing={2}>
      <Pagination onChange={handlerPage} count={count} variant="outlined" shape="rounded" />
    </Stack>
  );
}
