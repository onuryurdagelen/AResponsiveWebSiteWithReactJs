import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMagento } from 'react-icons/fa'

export const FooterContainer = styled.div`
  background-color: #101522;
  display: flex;
  flex-direction: column;
  padding: 4rem 0 2rem 0;
  justify-content: center;
  align-items: center;
`

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans serif;
  margin-bottom: 24px;
  font-size: 1.5rem;
`

export const FooterSubText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`
export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 1rem;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`
export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  // background-color:red;
  height: 15rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    flex-wrap: nowrap;
    /* background-color: orange; */
    min-height: 60rem;
  }
`

export const LinkColumn = styled.div`
  flex: 0 0 22%;
  // background-color:blue;
  height: 100%;
  margin: 1rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 480px) {
    width: 80%;
    /* background-color: blue; */
  }
`
export const LinkHeading = styled.h3`
  font-size: 2rem;
  text-align: center;
  color: #fff;
`
export const LinkList = styled.ul`
  width: 100%;
  text-decoration: none;
  // background-color:orange;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LinkItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Links = styled(Link)`
  text-decoration: none;
  display: inline-block;
  //  background-color: green;
  font-size: 1.3rem;
  margin: 0.2rem 0;
  color: #fff;
  cursor: pointer;
  text-align: center;
`
export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;
`
export const SocialMediaWrap = styled.div`
  display: fleX;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`
export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 1rem;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
`
