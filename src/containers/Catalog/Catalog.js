import React, { useState } from 'react';
import { data as sourceData } from "../../containers/Home/Source";
import { CardWrapper } from "../Home/Home.styles";
import CardItem from "../../components/CardItem/CardItem";
import { Menu, Input } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { executeFilters } from "./Utils";
import {
    CatalogSection,
    MenuView,
    SliderStyled,
    SliderContainer
} from "./Catalog.styles";

let data = sourceData;

const CatalogState = {
    currentView: "card",
    sortType: "default",
    filterProducer: "default",
    filterPrice: "default",
    filterTargetAge: "default",
};

const Catalog = () => {
    const [selectedKeys, setSelectedKeys] = useState(Object.values(CatalogState));
    const [stationeries, setStationeries] = useState([...data]);

    const search = (sample) => {
        sample = sample.target.value.toLowerCase();
        let resultList = [];
        sourceData.forEach((item) => {
            switch (true) {
                case item.price.toString().includes(sample):
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
        data = resultList;
        if (sample == "") {
            data = sourceData;
        }
        setStationeries(executeFilters(CatalogState, data));
    };

    const handleClick = (e) => {
        switch (e.item.props.subMenuKey) {
            case "sort-menu-":
                CatalogState.sortType = e.key;
                break;
            case "filter-menu-":
                CatalogState.filterProducer = e.key;
                break;
        }
        setSelectedKeys(Object.values(CatalogState));
        setStationeries(executeFilters(CatalogState, data));
    };

    const resetDefault = (e) => {
        let props = {};
        props = {
            key: "default",
            item: { props: { subMenuKey: e.item.props.subMenuKey } },
        }
        handleClick(props);
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
                    <p>Price Filter</p>
                    <SliderStyled
                        range
                        step={.01}
                        max = {9999}
                        min = {.01}
                        marks = {marksPrice}
                        defaultValue={[1, 9999]}
                        //onAfterChange={}
                    />
                </SliderContainer>
                <SliderContainer>
                    <p>Target Age Filter</p>
                    <SliderStyled
                        range
                        max = {100}
                        min = {1}
                        marks = {marksAges}
                        defaultValue={[1, 100]}
                        //onAfterChange={}
                    />
                </SliderContainer>
                <Input 
                    placeholder="Input search text"
                    allowClear
                    style={{ width: 240, margin: '0 10px' }}
                    onChange={search}
                />
            </MenuView>
            <CardWrapper>
            {stationeries.map(({ title, text, image, price, producer, targetAge, barCode }, idx) => (
                <CardItem
                    title={title}
                    text={text}
                    imageSrc={image}
                    price={price}
                    producer={producer}
                    targetAge={targetAge}
                    barCode={barCode}
                    id={idx}
                />
            ))}
            </CardWrapper>
        </CatalogSection>
    );
};

export default Catalog;

const { SubMenu } = Menu;

const marksAges = {
    0: {
        style: {
            color: '#f00',
        },
        label: 0,
    },
    100: '100'
};

const marksPrice = {
    0: {
        style: {
            color: '#f00',
        },
        label: 0,
    },
    9999: '9999'
};