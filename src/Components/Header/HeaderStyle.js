import styled from "styled-components";
import React from "react";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Pushster&display=swap');
  font-family: 'Pushster', cursive;
  font-size: 2em;
  color: white;
  text-align: left;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 99%;
  padding: 0.4em;
  background: #8A2387;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const HeaderStyle = (props) => {
    return (
        <div>
            <Wrapper>
                <Title>
                    {props.headertitle}
                </Title>
            </Wrapper>
        </div>
    )
}

export default HeaderStyle
