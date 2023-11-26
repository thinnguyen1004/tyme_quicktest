import { Button, Col, Form, Row } from "antd";
import { intersection, map } from "lodash";
import Banner from "../components/Banner";
import FilterBar from "../components/FilterBar";
import ListView from "../components/ListView";
import useFetchListItem from "../services/useFetchListItem";
import { useCallback, useState } from "react";
import { DUMMY_CAT_VALUE, initSearchValue } from "../../../constants/constant";
import LoadingSkeleton from "../components/LoadingSkeleton";

function HomePage() {
  const [payload, setPayload] = useState(initSearchValue);
  console.log("🚀 ~ file: index.jsx:13 ~ HomePage ~ payload:", payload);

  const { data: listCat, isLoading } = useFetchListItem(payload, {
    onSuccess: (rs) => {
      console.log(rs);
    },
  });
  const [form] = Form.useForm();

  const listOptions = useCallback(
    (field) => {
      return intersection(
        map(DUMMY_CAT_VALUE, (i) => {
          return {
            value: i[field],
            label: i[field],
          };
        })
      );
    },
    [listCat?.cats]
  );

  const handleSearch = useCallback(() => {
    const value = form.getFieldValue();
    setPayload({
      ...initSearchValue,
      ...value,
    });
  }, [form]);

  const handleLoadMore = () => {
    setPayload({
      ...payload,
      limit: payload.limit + 10,
    });
  };

  return (
    <Row>
      <Col className="w-full">
        <Banner />
      </Col>
      <Col className="w-full p-[100px]">
        <Row gutter={[40, 40]}>
          <Col xl={4} md={6}>
            <FilterBar
              form={form}
              handleSearch={handleSearch}
              breedOptions={listOptions("breed") || []}
              colorOptions={listOptions("color") || []}
            />
          </Col>
          <Col xl={20} md={18}>
            {!isLoading ? (
              <Row gutter={[0, 40]}>
                <Col>
                  <ListView data={listCat?.cats} />
                </Col>
                <Col
                  className="w-full"
                  style={{
                    textAlign: "center",
                  }}
                >
                  {listCat.cats?.length === listCat.count ||
                  listCat.cats?.length === 0 ? null : (
                    <Button className="bg-[#1677ff]" onClick={handleLoadMore}>
                      Load more
                    </Button>
                  )}
                </Col>
              </Row>
            ) : (
              <LoadingSkeleton />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default HomePage;
