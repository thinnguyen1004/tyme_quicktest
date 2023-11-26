import { useQuery } from "react-query";
import { DUMMY_CAT_VALUE, QUERY_KEY } from "../../../constants/constant";
import { mockResApi } from "../../../hooks/useMockResApi";
import { useMemo } from "react";
import { shuffle } from "lodash";

function useFetchListItem(params, options = {}) {
  const filteredCats = useMemo(() => {
    return DUMMY_CAT_VALUE.filter((cat) => {
      if (params.quickSearch) {
        if (
          !cat.name.toLowerCase().includes(params.quickSearch.toLowerCase()) &&
          !cat.breed.toLowerCase().includes(params.quickSearch.toLowerCase())
        ) {
          return false;
        }
      }

      if (params.price.length > 0) {
        if (cat.price < params.price[0] || cat.price > params.price[1]) {
          return false;
        }
      }

      if (params.age) {
        if (cat.age !== parseInt(params.age)) {
          return false;
        }
      }

      if (params.breed) {
        if (cat.breed !== params.breed) {
          return false;
        }
      }

      if (params.color) {
        if (cat.color !== params.color) {
          return false;
        }
      }

      return true;
    });
  }, [
    params.age,
    params.breed,
    params.color,
    params.price,
    params.quickSearch,
  ]);

  return useQuery(
    [...QUERY_KEY.listCat, params],
    async () => {
      const res = await mockResApi(filteredCats);
      const shuffledCats = shuffle(res.data.slice(0, params.limit));
      return {
        count: shuffledCats?.length || 0,
        cats: shuffledCats,
      };
    },
    {
      ...options,
    }
  );
}

export default useFetchListItem;
