import React, { useState, useEffect, useRef } from "react";
import {
    ItemStyled,
    TopPart,
    ItemInfo,
    TagContainer,
    TitleStyled,
    DescriptionStyled,
    OptionTextStyled,
    SelectStyled,
    BottomPart,
    StyledPrice,
    ButtonItemStyled,
    ButtonItemStyledReverse
} from "./Item.styles";
import { data } from "../../Home/Source";
import { useLocation, Redirect } from "react-router-dom";
import { Image, Tag, InputNumber, Select } from "antd";
import { IconBase } from "../../Footer/Footer.styles";
import { ShoppingTwoTone } from "@ant-design/icons";
import {
    findPriceTag,
    findTargetAgeTag,
    findProducerTag,
    calculateAdditionPrice,
} from "./Utils";

const { Option } = Select;

const Item = () => {
    const [item, setItem] = useState({});
    const [addition, setAddition] = useState("default");
    const [redirect, setRedirect] = useState(false);
    const [penNumber, setPenNumber] = useState(0);

    const location = useLocation();
    const totalPrice = useRef(null);
    const tags = useRef({
        price: "findPriceTag(item)",
        targetAge: "findTargetAgeTag(item)",
        producer: "findProducerTag(item)",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const id = parseInt(location.search.split("=")[1]);
        const foundItem = data.find((element) => element.id === id);
        const priceTag = findPriceTag(foundItem);
        const targetAgeTag = findTargetAgeTag(foundItem);
        const procuderTag = findProducerTag(foundItem);
        tags.current = {
            price: priceTag,
            targetAge: targetAgeTag,
            producer: procuderTag,
        };
        setItem(foundItem);
        totalPrice.current = foundItem.price;
    }, []);

    const calculatePrice = (e) => {
        let localAddition = addition;
        let localPenNumber = penNumber;
        if (isNaN(e)) {
            localAddition = e.toLowerCase();
            setAddition(e.toLowerCase());
        } else {
            localPenNumber = e;
            setPenNumber(e);
        }
        totalPrice.current =
            item.price + calculateAdditionPrice(localAddition, localPenNumber);
    };

    return (
        <ItemStyled>
            <TopPart>
                <Image src={item.image} width={500}/>
                <ItemInfo>
                    <TagContainer>
                        <Tag color="blue">{tags.current.price}</Tag>
                        {tags.current.producer !== "" && (
                            <Tag color="green">{tags.current.producer}</Tag>
                        )}
                        {tags.current.targetAge !== "" && (
                            <Tag color="volcano">{tags.current.targetAge}</Tag>
                        )}
                    </TagContainer>
                    <TitleStyled>{item.title}</TitleStyled>
                    <DescriptionStyled>{item.text}</DescriptionStyled>
                    <OptionTextStyled>Additional Pans:</OptionTextStyled>
                    <InputNumber
                        min={0}
                        max={10}
                        defaultValue={0}
                        onChange={calculatePrice}
                    />
                    <br/>
                    <OptionTextStyled>Additional Options:</OptionTextStyled>
                    <SelectStyled onChange={calculatePrice}>
                        <Option value="default">Default</Option>
                        <Option value="cover">Cover</Option>
                        <Option value="sequins">Cover with Sequins</Option>
                        <Option value="gold">Cover with Gold</Option>
                        <Option value="sequinsAndGold">Cover with Sequins and Gold</Option>
                        <Option value="diamond">Mystical Cover with Diamond</Option>
                    </SelectStyled>
                </ItemInfo>
            </TopPart>
            <BottomPart>
                <StyledPrice>Price: {totalPrice.current} UAH</StyledPrice>
                <ButtonItemStyled onClick={() => setRedirect(true)}>
                    GO Back
                </ButtonItemStyled>
                {redirect && <Redirect push to="/catalog" />}
                <ButtonItemStyledReverse>
                    Add to Cart
                    <IconBase component={ShoppingTwoTone}/>
                </ButtonItemStyledReverse>
            </BottomPart>
        </ItemStyled>
    );
};
export default Item;