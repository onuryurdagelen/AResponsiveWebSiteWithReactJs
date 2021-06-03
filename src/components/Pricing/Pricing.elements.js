import styled from 'styled-components'

export const PricingContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #4b59f7;
  height: 45rem;

  @media screen and (max-width: 820px) {
    text-align: center;
    flex-direction: column;
    height: 100rem;
  }
`
export const PricingPrimaryHeading = styled.h1`
  font-size: 4rem;
  color: #fff;
  text-align: center;
  width: 30%;
  // background-color:orange;
  align-self: center;

  @media screen and (max-width: 480px) {
    text-align: center;
    width: 90%;
    /* color: blue; */
    /* background-color: red; */
    margin-top: 3rem;
  }
`
export const PricingRow = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color:red;
  height: 50rem;
  transition: transform;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    // background-color:red;
    justify-content: space-around;
    height: 90%;
  }
`
export const PricingColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 28%;
  align-items: center;
  justify-content: space-around;
  background-color: #002533;
  height: 90%;
  cursor: pointer;
  border-radius: 10px 10px 0 0;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 820px) {
    flex: 0 0 30%;
    width: 60%;
  }
  @media screen and (max-width:480px) {
      
  }
`
export const PricingSecondaryHeading = styled.h3`
  text-align: center;
  color: #fff;
  font-size: 2rem;
`
export const CostField = styled.p`
  color: #fff;
  font-size: 3rem;
  text-align: center;
`
export const SubCostField = styled.span`
  display: inline-block;
  color: #fff;
  text-align: center;
  font-size: 1.1rem;
`
export const PropertiesList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  height: 30%;

  // background-color:aqua;
`
export const Property = styled.li`
  color: #ffdddd;
  font-size: 1.2rem;
`
