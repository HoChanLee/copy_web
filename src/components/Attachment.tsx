import styled from "styled-components";

const ACWrapper = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(/img/attachment_bg.png);
  background-attachment: fixed;
  background-size: cover;
`;
const ACInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
`;
const ACTit = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 200;
  color: #fff;
  margin-bottom: 40px;
  span {
    font-weight: 600;
  }
`;
const ACContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
const ACCBox = styled.div`
  width: 25%;
  text-align: center;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Num = styled.strong`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  color: #fff;
  &::after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 2px;
    background-color: #f0cf18;
    margin: 20px 0 15px;
  }
`;
const Txt = styled.p`
  font-size: 20px;
  color: #fff;
`;

function Attachment() {
  return (
    <ACWrapper>
      <ACInner>
        <ACTit>
          <span>BODY</span>CHANNEL
        </ACTit>
        <ACContent>
          <ACCBox>
            <Num>31</Num>
            <Txt>총 매장 수</Txt>
          </ACCBox>
          <ACCBox>
            <Num>175,771</Num>
            <Txt>누적 회원 수</Txt>
          </ACCBox>
          <ACCBox>
            <Num>974</Num>
            <Txt>당일 운동 예약 현황</Txt>
          </ACCBox>
          <ACCBox>
            <Num>6,634,977</Num>
            <Txt>총 소모 칼로리</Txt>
          </ACCBox>
        </ACContent>
      </ACInner>
    </ACWrapper>
  );
}

export default Attachment;
