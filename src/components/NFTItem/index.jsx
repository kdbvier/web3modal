import React from "react";
import {
  Container,
  Image,
  Info,
  Name,
  CollectionName,
  ImageDiv,
} from "./styles";

const NFTItem = ({ nftInfo }) => {
  return (
    <Container>
      <ImageDiv>
        <Image src={nftInfo.image_url} />
      </ImageDiv>
      <Info>
        <Name>{nftInfo.name || "Name is not defined"}</Name>
        <CollectionName>{nftInfo.collection.name}</CollectionName>
      </Info>
    </Container>
  );
};

export default NFTItem;
