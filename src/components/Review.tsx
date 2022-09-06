import styled from "styled-components";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const ReviewWrapper = styled.div`
  padding: 80px 0;
`;
const ReviewInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;
const ReviewTit = styled.h2`
  font-size: 40px;
  color: #ff4c4c;
`;
const SlideBox = styled.div`
  max-width: 740px;
  padding: 40px 20px;
  margin: 0 auto;
  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  em {
    font-size: 14px;
  }
`;
const SlideNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SlidePrevBtn = styled.div`
  width: 36px;
  height: 36px;
  background-color: #f0cf18;
  border-radius: 18px;
  position: relative;
  margin: 0 10px;
  &:after {
    position: absolute;
    left: 12px;
    top: 12px;
    content: "";
    width: 10px; /* 사이즈 */
    height: 10px; /* 사이즈 */
    border-top: 2px solid #fff; /* 선 두께 */
    border-right: 2px solid #fff; /* 선 두께 */
    transform: rotate(225deg); /* 각도 */
  }
`;
const SlideNextBtn = styled.div`
  width: 36px;
  height: 36px;
  background-color: #f0cf18;
  border-radius: 18px;
  position: relative;
  margin: 0 10px;
  &:after {
    position: absolute;
    left: 8px;
    top: 12px;
    content: "";
    width: 10px; /* 사이즈 */
    height: 10px; /* 사이즈 */
    border-top: 2px solid #fff; /* 선 두께 */
    border-right: 2px solid #fff; /* 선 두께 */
    transform: rotate(45deg); /* 각도 */
  }
`;

function Review() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <ReviewWrapper>
      <ReviewInner>
        <ReviewTit>운동 성공후기</ReviewTit>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <SlideBox>
              <p>
                건강하게 운동을 하기 위해서는 운동의 순서를 제대로 알고 올바르게
                트레이닝 하는 방법을 배우셔야 할 것 같아요 건강한 트레이닝을
                한다면 일과 함께 행복한 일상생활이 될 것이라 생각합니다. 모두
                평생 운동과 함께하는 건강한 삶을 사셨으면 좋겠어요 요즘 코로나로
                운동을 쉬시는 분들도 많으실 거라 생각됩니다만 면역력을 올리기
                위해서는 짧게라도 규칙적인 운동을 하는게 좋을 것 같습니다
              </p>
              <em>바디채널 중동점_김주은 회원님</em>
            </SlideBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox>
              <p>
                건강하게 운동을 하기 위해서는 운동의 순서를 제대로 알고 올바르게
                트레이닝 하는 방법을 배우셔야 할 것 같아요 건강한 트레이닝을
                한다면 일과 함께 행복한 일상생활이 될 것이라 생각합니다. 모두
                평생 운동과 함께하는 건강한 삶을 사셨으면 좋겠어요 요즘 코로나로
                운동을 쉬시는 분들도 많으실 거라 생각됩니다만 면역력을 올리기
                위해서는 짧게라도 규칙적인 운동을 하는게 좋을 것 같습니다
              </p>
              <em>바디채널 중동점_김주은 회원님</em>
            </SlideBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox>
              <p>
                건강하게 운동을 하기 위해서는 운동의 순서를 제대로 알고 올바르게
                트레이닝 하는 방법을 배우셔야 할 것 같아요 건강한 트레이닝을
                한다면 일과 함께 행복한 일상생활이 될 것이라 생각합니다. 모두
                평생 운동과 함께하는 건강한 삶을 사셨으면 좋겠어요 요즘 코로나로
                운동을 쉬시는 분들도 많으실 거라 생각됩니다만 면역력을 올리기
                위해서는 짧게라도 규칙적인 운동을 하는게 좋을 것 같습니다
              </p>
              <em>바디채널 중동점_김주은 회원님</em>
            </SlideBox>
          </SwiperSlide>
          <SlideNav>
            <SlidePrevBtn ref={navigationPrevRef} />
            <SlideNextBtn ref={navigationNextRef} />
          </SlideNav>
        </Swiper>
      </ReviewInner>
    </ReviewWrapper>
  );
}

export default Review;
