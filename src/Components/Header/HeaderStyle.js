import styled from "styled-components";
import React from "react";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
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
  background: lightblue;
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
