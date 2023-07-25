import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NumberUtils } from '../utils/number';

import useQueryParams from './useQueryParams';

import { IPaginationRequest } from '~/services/types';

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 10;

export default function usePagination() {
  const queryParams = useQueryParams();
  const navigate = useNavigate();

  const [pageOptions, setPageOptions] = useState<IPaginationRequest>({
    page: NumberUtils.convertQueryParam(queryParams.page) ?? DEFAULT_PAGE,
    size: NumberUtils.convertQueryParam(queryParams.size) ?? DEFAULT_SIZE
  });

  const [backPage, setBackPage] = useState<number | null>(null);

  useEffect(() => {
    if (backPage !== null && backPage === 0) {
      const newPage = pageOptions.page > 1 ? pageOptions.page - 1 : DEFAULT_PAGE;
      const newSize = pageOptions.size.toString();

      setPageOptions({ ...pageOptions, page: newPage });
      navigate({
        search: new URLSearchParams({ page: newPage.toString(), size: newSize }).toString()
      });
    }
  }, [backPage]);

  return { pageOptions, setPageOptions, setBackPage };
}
