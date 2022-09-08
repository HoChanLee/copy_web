import styled from "styled-components";

const BodyAppWrapper = styled.div`
  background-color: #3e3d3d;
  padding: 40px 0;
`;
const BodyAppInner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
const BodyAppLevel = styled.div`
  margin-bottom: 20px;
`;
const BodyAppBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BodyAppOne = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-right: 10%;
`;
const BodyAppTxt = styled.div`
  width: 100%;
  text-align: left;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 40px;
  p {
    font-size: 26px;
    color: #fff;
  }
  span {
    font-size: 22px;
    color: #fff;
  }
`;
const WatchVideoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WatchVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 24px;
    font-weight: 200;
    color: #fff;
  }
`;
const WatchVideoGraph = styled.div``;
const BodyAppPhone = styled.div`
  width: 40%;
  position: relative;
  top: 40px;
`;
function BodyApp() {
  return (
    <BodyAppWrapper>
      <BodyAppInner>
        <BodyAppLevel>
          <img src="/img/body_app_level.png" alt="" />
        </BodyAppLevel>
        <BodyAppBox>
          <BodyAppOne>
            <BodyAppTxt>
              <p>웨어러블을 착용하고 주 3회 이상 출석,</p>
              <p>일일 500 kcal 소모 목표를 달성해보세요!</p>
              <span>
                바디채널 APP을 통해 나의 운동 이력을 확인할 수 있습니다.
              </span>
            </BodyAppTxt>
            <WatchVideoBox>
              <WatchVideo>
                <img src="/img/watch_video.png" alt="" />
                <p>watch video</p>
              </WatchVideo>
              <WatchVideoGraph>
                <img src="/img/body_app_graph.png" alt="" />
              </WatchVideoGraph>
            </WatchVideoBox>
          </BodyAppOne>
          <BodyAppPhone>
            <img src="/img/body_app_phone.png" alt="" />
          </BodyAppPhone>
        </BodyAppBox>
      </BodyAppInner>
    </BodyAppWrapper>
  );
}

export default BodyApp;
