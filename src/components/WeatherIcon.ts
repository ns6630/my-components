import styled from "styled-components";

const WeatherIcon = styled.img.attrs(props => ({src: props.src ? `http://openweathermap.org/img/wn/${props.src}@2x.png` : ""}))`

`;

export default WeatherIcon;