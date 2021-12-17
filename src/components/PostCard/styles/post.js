import styled from "styled-components";

export const PostHeading = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #000000;
    flex-basis: 70%;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    text-align: left;
`;

export const Container = styled.div`
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 440px;
    border-radius: 8px;
    padding : 20px 0;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

`;

export const ImageGrid = styled.div`
    width: 100%;
    height: 200px;
    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }    
`;

export const Image = styled.img`
    object-fit: cover;
    border-radius: 4px;
`;

export const PostDescription = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #1E1E1E;
    padding-top: 20px;
    margin: 0px 20px;
    text-align: left;
`;

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items:center;
    width: 90%;
    padding-top: ${({padding}) => padding || 0}px;
`;

export const Price = styled.div`
    font-size: 12px;
    font-weight: 700;
    color: #1BA398;
    flex-basis:30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const CallButton = styled.a`
    display: flex;
    width: 100px;
    justify-content : flex-end;
    align-items: center;
    text-decoration: none;
`;

export const CallButtonImage = styled.img`
    max-width: 100%;
    height: 40px; 
`;

export const Date = styled.div`
    padding-top: 5px;
    font-size: 8px;
    font-weight: 400;
    color: #000000;
    flex-basis:55%;
    text-align: left;
`;

export const Location = styled.div`
    padding-top: 5px;
    font-size: 10px;
    font-weight: 500;
    color: #1E1E1E;
    flex-basis:55%;
    display: flex;
    justify-content: flex-end;
`;

