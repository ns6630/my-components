import styled from "styled-components";
import loader from "../static/img/loading.svg";

const Loader = styled.img.attrs(props => ({src: loader}))`
  display: block;
  width: ${props => props.width ? props.width : "50px"}};
  
  @media (prefers-reduced-motion: no-preference) {
    animation: loading infinite 1s linear;
  }
  
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
