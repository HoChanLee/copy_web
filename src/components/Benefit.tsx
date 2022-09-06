import styled from "styled-components";

interface Props {
  FrontBg: string;
}

const BenefitWrapper = styled.div`
  padding: 100px 0;
`;
const BenefitTxt = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h2 {
    font-size: 30px;
    font-weight: 400;
    color: #ff4d4c;
    margin-bottom: 20px;
    span {
      font-weight: 600;
    }
  }
  div {
    p {
      color: #000;
    }
  }
`;
const BenefitContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;
const BenefitBox = styled.div`
  width: 280px;
  height: 400px;
  text-align: center;
  position: relative;
  transition: transform 0.75s, box-shadow 1s;
  transform-style: preserve-3d;
  transform-origin: right center;
  &:hover {
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.16);
    transform: translateX(-100%) rotateY(-180deg);
  }
`;
const Front = styled.div<Props>`
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  padding: 30px 10px;
  background: ${(props) => props.FrontBg};
  position: relative;
  z-index: 2;
  color: #fff;
  div {
    em {
      display: inline-block;
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    p {
      font-size: 28px;
      font-weight: 800;
    }
  }
`;
const FrontImg = styled.div`
  margin-bottom: 20px;
`;
const Back = styled.div`
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  padding: 90px 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotateY(180deg);
  z-index: 1;
  h2 {
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
  p {
    color: #000;
    font-size: 12px;
  }
  a {
    color: #000;
    border: 1px solid #000;
    line-height: 40px;
    width: 150px;
  }
`;
const BackImg = styled.div``;

function Benefit() {
  return (
    <BenefitWrapper>
      <BenefitTxt>
        <h2>
          <span>24HOUR / 7DAY</span> 전지점 통합회원권
        </h2>
        <div>
          <p>Bodychannel is 24/7 open fitness club where you can use</p>
          <p>integrated membership of all branches anytime and anywere.</p>
        </div>
      </BenefitTxt>
      <BenefitContent>
        <BenefitBox className="BenefitBox1">
          <Front FrontBg="url(/img/benefit_Front_bg1.jpg) no-repeat center center/cover">
            <FrontImg>
              <img src="/img/FrontImg1.png" alt="" />
            </FrontImg>
            <div>
              <em>BENEFIT 01</em>
              <p>CONCEPT</p>
            </div>
          </Front>
          <Back>
            <h2>바디채널 CONCEPT</h2>
            <BackImg>
              <img src="/img/BackImg1.png" alt="" />
            </BackImg>
            <p>24시간 연중무휴 전지점 통합회원권</p>
            <a href="#none">바로가기</a>
          </Back>
        </BenefitBox>
        <BenefitBox className="BenefitBox2">
          <Front FrontBg="url(/img/benefit_Front_bg2.jpg) no-repeat center center/cover">
            <FrontImg>
              <img src="/img/FrontImg2.png" alt="" />
            </FrontImg>
            <div>
              <em>BENEFIT 01</em>
              <p>CONCEPT</p>
            </div>
          </Front>
          <Back>
            <h2>바디채널 CONCEPT</h2>
            <BackImg>
              <img src="/img/BackImg2.png" alt="" />
            </BackImg>
            <p>24시간 연중무휴 전지점 통합회원권</p>
            <a href="#none">바로가기</a>
          </Back>
        </BenefitBox>
        <BenefitBox className="BenefitBox3">
          <Front FrontBg="url(/img/benefit_Front_bg3.jpg) no-repeat center center/cover">
            <FrontImg>
              <img src="/img/FrontImg3.png" alt="" />
            </FrontImg>
            <div>
              <em>BENEFIT 01</em>
              <p>CONCEPT</p>
            </div>
          </Front>
          <Back>
            <h2>바디채널 CONCEPT</h2>
            <BackImg>
              <img src="/img/BackImg3.png" alt="" />
            </BackImg>
            <p>24시간 연중무휴 전지점 통합회원권</p>
            <a href="#none">바로가기</a>
          </Back>
        </BenefitBox>
        <BenefitBox className="BenefitBox4">
          <Front FrontBg="url(/img/benefit_Front_bg4.jpg) no-repeat center center/cover">
            <FrontImg>
              <img src="/img/FrontImg4.png" alt="" />
            </FrontImg>
            <div>
              <em>BENEFIT 01</em>
              <p>CONCEPT</p>
            </div>
          </Front>
          <Back>
            <h2>바디채널 CONCEPT</h2>
            <BackImg>
              <img src="/img/BackImg4.png" alt="" />
            </BackImg>
            <p>24시간 연중무휴 전지점 통합회원권</p>
            <a href="#none">바로가기</a>
          </Back>
        </BenefitBox>
      </BenefitContent>
    </BenefitWrapper>
  );
}

export default Benefit;
