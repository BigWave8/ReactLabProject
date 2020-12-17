import React, { useEffect, useState } from "react";
import { CardWrapper } from "../Home/Home.styles";
import CardItem from "../../components/CardItem/CardItem";
import { Menu, Input } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { executeFilters } from "./Utils";
import {
  CatalogSection,
  MenuView,
  SliderStyled,
  SliderContainer,
} from "./Catalog.styles";
import { fetchData, fetchWithFilters } from "../Utils/Api";
import RingLoader from "react-spinners/RingLoader";

const CatalogState = {
  sortType: "default",
  filterProducer: new Set(),
  filterPrice: [1, 9999],
  filterTargetAge: [1, 100],
  input: "",
};

const Catalog = () => {
  const [source, setSourceDate] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(Object.values(CatalogState));
  let [stationeries, setStationeries] = useState([]);

  useEffect(() => {
    if (source.length === 0) {
      fetchData().then((res) => setSourceDate(res));
      fetchData().then((res) => setStationeries(res));
    }
  });

  useEffect(() => {
    setSelectedKeys(
      Object.values({
        sortType: "default",
        filterProducer: new Set(),
      })
    );
    CatalogState.sortType = "default";
    CatalogState.filterProducer = new Set();
    CatalogState.filterPrice = [1, 9999];
    CatalogState.filterTargetAge = [1, 100];
  }, []);

  const searchInput = (sample) => {
    sample = sample.target.value.toLowerCase();
    CatalogState.input = sample;
    onAfterChange();
  };

  const search = (sample, res) => {
    let resultList = [];
    res.forEach((item) => {
      switch (true) {
        case item.priceInHryvnia.toString().includes(sample):
          resultList.push(item);
          break;
        case item.producer.toLowerCase().includes(sample):
          resultList.push(item);
          break;
        case item.targetAge.toString().includes(sample):
          resultList.push(item);
          break;
        case item.barCode.toLowerCase().includes(sample):
          resultList.push(item);
          break;
      }
    });
    if (sample === "") {
      resultList = res;
    }
    return resultList;
  };

  const handleClick = (e) => {
    switch (e.item.props.subMenuKey) {
      case "sort-menu-":
        CatalogState.sortType = e.key;
        break;
      case "filter-menu-":
        CatalogState.filterProducer.add(e.key);
        break;
    }
    setSelectedKeys(Object.values(CatalogState));
    onAfterChange();
  };

  const resetDefault = (e) => {
    switch (e.item.props.subMenuKey) {
      case "sort-menu-":
        CatalogState.sortType = "default";
        break;
      case "filter-menu-":
        CatalogState.filterProducer.delete(e.key);
        break;
    }
    setSelectedKeys(Object.values(CatalogState));
    onAfterChange();
  };

  const priceAfterChange = (value) => {
    CatalogState.filterPrice = value;
    onAfterChange();
  };

  const targetAgeAfterChange = (value) => {
    CatalogState.filterTargetAge = value;
    onAfterChange();
  };

  const onAfterChange = async () => {
    let res = await fetchWithFilters(
      CatalogState.filterPrice[0],
      CatalogState.filterPrice[1],
      CatalogState.filterTargetAge[0],
      CatalogState.filterTargetAge[1]
    );
    res = search(CatalogState.input, res);
    setStationeries(executeFilters(CatalogState, res));
  };

  return (
    <CatalogSection>
      <MenuView>
        <Menu
          multiple
          onSelect={handleClick}
          onDeselect={resetDefault}
          selectedKeys={selectedKeys}
          mode="horizontal"
        >
          <SubMenu key="sort" icon={<SettingOutlined />} title="Sorting">
            <Menu.ItemGroup title="Price">
              <Menu.Item key="sortingPriceAsc">Ascending Order</Menu.Item>
              <Menu.Item key="sortingPriceDesc">Descending Order</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Target Age">
              <Menu.Item key="sortingTargetAgeAsc">Ascending Order</Menu.Item>
              <Menu.Item key="sortingTargetAgeDesc">Descending Order</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        <Menu
          multiple
          onSelect={handleClick}
          onDeselect={resetDefault}
          mode="horizontal"
        >
          <SubMenu key="filter" icon={<AppstoreOutlined />} title="Filter">
            <Menu.ItemGroup title="Producer">
              <Menu.Item key="Ukraine">Ukraine</Menu.Item>
              <Menu.Item key="USA">USA</Menu.Item>
              <Menu.Item key="Poland">Poland</Menu.Item>
              <Menu.Item key="Spanish">Spanish</Menu.Item>
              <Menu.Item key="Japan">Japan</Menu.Item>
              <Menu.Item key="China">China</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        <SliderContainer>
          Price Filter
          <SliderStyled
            range
            step={0.01}
            max={9999}
            min={1}
            marks={marksPrice}
            defaultValue={[1, 9999]}
            onAfterChange={priceAfterChange}
          />
        </SliderContainer>
        <SliderContainer>
          Target Age Filter
          <SliderStyled
            range
            max={100}
            min={1}
            marks={marksAges}
            defaultValue={[1, 100]}
            onAfterChange={targetAgeAfterChange}
          />
        </SliderContainer>
        <Input
          placeholder="Input search text"
          allowClear
          style={{ width: 240, margin: "0 10px" }}
          onChange={searchInput}
        />
      </MenuView>
      {source.length === 0 ? (
        <RingLoader size={240} color={"#ff00ff"} />
      ) : (
        <CardWrapper>
          {stationeries.map(
            ({
              title,
              image,
              priceInHryvnia,
              producer,
              targetAge,
              barCode,
              id,
            }) => (
              <CardItem
                title={title}
                imageSrc={image}
                priceInHryvnia={priceInHryvnia}
                producer={producer}
                targetAge={targetAge}
                barCode={barCode}
                id={id}
              />
            )
          )}
        </CardWrapper>
      )}
    </CatalogSection>
  );
};

export default Catalog;

const { SubMenu } = Menu;

const marksAges = {
  0: {
    style: {
      color: "#f00",
    },
    label: 0,
  },
  100: "100",
};

const marksPrice = {
  0: {
    style: {
      color: "#f00",
    },
    label: 0,
  },
  9999: "9999",
};
