import styled from "styled-components";

const LoaderComponent = styled.div`
  margin: auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 5px solid darkviolet;
  border-right: 5px solid darkviolet;
  border-bottom: 5px solid darkviolet;
  border-left: 5px solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  border-radius: 50%;
  width: 30px;
  height: 30px;

  &:after {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export function Loader(): JSX.Element {
  return (
    <LoaderWrapper>
      <LoaderComponent />
    </LoaderWrapper>
  );
}
