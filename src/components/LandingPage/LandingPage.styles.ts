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
    color: ${Colors.PrimaryLight};
    overflow: hidden;
  `;
  
  export const Right = styled.div`
    flex: 2;
    background-color: ${Colors.White};
  `;

  export const Image = styled.img`
    position: absolute;
    top: 30%;
    right: 5%;
    width: 25%;
    box-shadow: -3rem -3rem 0px 0 ${Colors.PrimaryLight};
  `;