import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface props {
  top: string;
}

const NewsWrapper = styled.div`
  padding: 120px 0;
`;
const NewsInner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;
const NewsTit = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: #4e4e4e;
  margin-bottom: 80px;
`;
const NewsContent = styled.div`
  position: relative;
`;
const NewsCenter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Date = styled.p`
  font-size: 18px;
  line-height: 50px;
  color: #6e6e6e;
  display: inline-block;
  background-color: #f5f5f5;
  width: 200px;
  border-radius: 8px;
`;
const Line = styled.span`
  display: inline-block;
  width: 5px;
  height: 1800px;
  background-color: #f5f5f5;
`;
const Point = styled.span<props>`
  width: 12px;
  height: 12px;
  background-color: #dbdbdb;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  top: ${(prop) => prop.top};
  margin: 0 auto;
  z-index: 2;
  &:after {
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
    background: transparent;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    position: absolute;
    left: -6px;
    top: -6px;
    z-index: 1;
  }
`;
const NewsPosterLeft = styled.div<props>`
  position: absolute;
  left: 0;
  top: ${(prop) => prop.top};
  width: 510px;
  img {
    width: 100%;
  }
`;
const NewsPosterRight = styled.div<props>`
  position: absolute;
  right: 0;
  top: ${(prop) => prop.top};
  width: 510px;
  img {
    width: 100%;
  }
`;

function News() {
  return (
    <NewsWrapper>
      <NewsInner>
        <NewsTit>바디채널 뉴스</NewsTit>
        <NewsContent>
          <NewsCenter>
            <Date>2022년 09월</Date>
            <Line></Line>
            <Point top={"300px"}></Point>
            <Point top={"400px"}></Point>
            <Point top={"1350px"}></Point>
          </NewsCenter>
          <NewsPosterLeft top={"250px"}>
            <img src="/img/news_poster1.jpg" alt="" />
          </NewsPosterLeft>
          <NewsPosterRight top={"180px"}>
            <img src="/img/news_poster2.jpg" alt="" />
          </NewsPosterRight>
          <NewsPosterLeft top={"1050px"}>
            <img src="/img/news_poster3.jpg" alt="" />
          </NewsPosterLeft>
          <NewsPosterRight top={"1050px"}>
            <img src="/img/news_poster4.jpg" alt="" />
          </NewsPosterRight>
        </NewsContent>
      </NewsInner>
    </NewsWrapper>
  );
}

export default News;
