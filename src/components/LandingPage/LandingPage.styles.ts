import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  `;

  export const Left = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.Primary};
    `;
    
  export const Title = styled.div`
    font-size: 4rem;
    font-family: ${Fonts.CAVEAT};
    color: ${Colors.Secondary};
    overflow: hidden;
  `;
  
  export const Right = styled.div`
    flex: 2;
    background-color: ${Colors.White};
  `;

    /*
    export const Background = styled.div`
    position: relative;
    top: 20%;
    left: 7%;
    background-color: ${Colors.Primary};
    width: 70%;
    height: 50%;
  `;

    export const Image = styled.img`
    position: absolute;
    top: 25%;
    right: 5%;
    width: 30%;
    // border: 0.75rem solid ${Colors.Secondary};
  `; 
  */

  export const Background = styled.div`
    position: relative;
    top: 25%;
    left: 20%;
    background-color: ${Colors.Primary};
    width: 60%;
    height: 45%;
  `;

  export const Image = styled.img`
    position: absolute;
    top: 30%;
    right: 5%;
    width: 25%;
    // border: 0.75rem solid ${Colors.Secondary};
  `;