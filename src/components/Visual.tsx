import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";

const SlideWrap = styled.div`
  position: relative;
`;
const SlideBox = styled.div`
  width: 100%;
  height: 920px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
const SearchWrap = styled.form`
  position: absolute;
  left: 0;
  bottom: 60px;
  z-index: 10;
  width: 100%;
  padding: 0 20px;
`;
const SearchInner = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
`;
const SearchTxt = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 25px;
`;
const SearchBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff4d4c;
  padding: 0 30px;
  border-radius: 35px;
  margin-bottom: 40px;
  input {
    background: none;
    border: none;
    font-size: 18px;
    line-height: 70px;
    width: 100%;
    caret-color: #fff;
  }
  input:focus {
    outline: none;
  }
  input::selection {
    color: #fff;
  }
  input::placeholder {
    color: #fff;
  }
  button {
    background: none;
    border: none;
  }
`;
const SearchVideoBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #ff4d4c;
`;
const SearchVideoTxt = styled.div`
  text-align: left;
  color: #fff;
  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  strong {
    font-size: 26px;
    span {
      font-weight: 600;
    }
  }
`;
const SearchVideo = styled.div`
  padding: 15px;
`;

function Visual() {
  return (
    <SlideWrap>
      <Swiper spaceBetween={0} slidesPerView={1} loop={true}>
        <SwiperSlide>
          <SlideBox>
            <img src="/img/slide_bg_1.jpg" alt="" />
          </SlideBox>
        </SwiperSlide>
        <SwiperSlide>
          <SlideBox>
            <img src="/img/slide_bg_2.jpg" alt="" />
          </SlideBox>
        </SwiperSlide>
        <SwiperSlide>
          <SlideBox>
            <img src="/img/slide_bg_3.jpg" alt="" />
          </SlideBox>
        </SwiperSlide>
      </Swiper>
      <SearchWrap>
        <SearchInner>
          <SearchTxt>가까운 지점 찾기</SearchTxt>
          <SearchBox>
            <input type="text" placeholder="지점명, 주소를 검색하세요." />
            <button>
              <img src="/img/search_bt.png" alt="" />
            </button>
          </SearchBox>
          <SearchVideoBox>
            <SearchVideoTxt>
              <p>바디채널은</p>
              <strong>
                <span>당신과 함께</span>합니다.
              </strong>
            </SearchVideoTxt>
            <SearchVideo>
              <img src="/img/play_bt.png" alt="" />
            </SearchVideo>
          </SearchVideoBox>
        </SearchInner>
      </SearchWrap>
    </SlideWrap>
  );
}

export default Visual;
