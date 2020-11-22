import React from 'react';
import { data as receivedData} from "../Data";
import { CardWrapper } from "../Home/Home.styles";
import CardItem from "../../components/CardItem/CardItem";
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import {
    CatalogSection,
    MenuView,
    SliderStyled,
} from "./Catalog.styles";

const { SubMenu } = Menu;
const { Search } = Input;
const onSearch = value => console.log(value);

const Catalog = () => {
    return (
        <CatalogSection>
            <MenuView>
            <Menu multiple mode="horizontal">
            <SubMenu key="Sorting" icon={<SettingOutlined />} title="Sorting">
                <Menu.ItemGroup title="Target Age">
                    <Menu.Item key="sorting:1">Ascending Order</Menu.Item>
                    <Menu.Item key="sorting:2">Descending Order</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Price">
                    <Menu.Item key="sorting:3">Ascending Order</Menu.Item>
                    <Menu.Item key="sorting:4">Descending Order</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="Filter" icon={<AppstoreOutlined />} title="Filter">
                <Menu.Item key="filter_target_age:5">Target Age</Menu.Item>
                <SubMenu key="filter_producer:2" title="Producer">
                    <Menu.Item key="filter:1">Ukraine</Menu.Item>
                    <Menu.Item key="filter:2">U.S.A.</Menu.Item>
                    <Menu.Item key="filter:3">Poland</Menu.Item>
                    <Menu.Item key="filter:4">Japan</Menu.Item>
                    <Menu.Item key="filter:5">China</Menu.Item>
                </SubMenu>
                <Menu.Item key="filter_price:5">Price</Menu.Item>
            </SubMenu>
            </Menu>
            <SliderStyled
                range
                step={.01}
                max = {9999}
                min = {.01}
                marks = {marksPrice}
                defaultValue={[1, 9999]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
            <SliderStyled
                range
                max = {100}
                min = {1}
                marks = {marksAges}
                defaultValue={[1, 100]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
            <Search
                placeholder="Input search text"
                allowClear
                onSearch={onSearch}
                style={{ width: 240, margin: '0 10px' }}
            />
            </MenuView>
            <CardWrapper>
            {receivedData.map(({ title, text, image, price }, idx) => (
                <CardItem
                    title={title}
                    text={text}
                    imageSrc={image}
                    price={price}
                    id={idx}
                />
            ))}
            </CardWrapper>
        </CatalogSection>
    );
};

export default Catalog;

function onChange(value) {
    console.log('onChange: ', value);
}

function onAfterChange(value) {
    console.log('onAfterChange: ', value);
}

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