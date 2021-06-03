import React from 'react'
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter } from 'react-icons/fa';
import { Button } from '../../globalStyles.js';
import { FooterContainer,
    FooterSubscription,
    FooterSubHeading,
FooterSubText,
Form,
FormInput,
FooterLinksContainer,
LinkColumn,
LinkHeading,
LinkList,
LinkItem,
Links,SocialMedia,
SocialMediaWrap,
SocialLogo,
SocialIcon,
WebsiteRights,
SocialIcons,
SocialIconLink } from './Footer.elements.js';

const Footer = () => {
    return (
        <>
         <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends.
                </FooterSubHeading>
            <FooterSubText>You can unsubscribe anytime.

            </FooterSubText>
            <Form>
                <FormInput name="email" type="email" placeholder="Your email..."/>
                <Button fontBig>Subscribe</Button>
               
            </Form>
                </FooterSubscription> 
                <FooterLinksContainer>
                        <LinkColumn>
                    <LinkHeading>About us</LinkHeading>
                        <LinkList>
                            <LinkItem>
                                <Links to="/sign-u">How it works</Links>
                                <Links to="/sign-u">Testimonials</Links>
                                <Links to="/sign-u">Careers</Links>
                                <Links to="/sign-u">Investors</Links>
                                <Links to="/sign-u">Terms of Service</Links>
                            </LinkItem>
                         </LinkList>
                            </LinkColumn>
                    <LinkColumn>
                    <LinkHeading>Contact us</LinkHeading>
                        <LinkList>
                            <LinkItem>
                                <Links>Contact</Links>
                                <Links>Support</Links>
                                <Links>Destinations</Links>
                                <Links>Sponsorships</Links>
                            </LinkItem>
                         </LinkList>
                         </LinkColumn>
                    <LinkColumn>
                    <LinkHeading>Videos</LinkHeading>
                        <LinkList>
                            <LinkItem>
                                <Links>Submit Video</Links>
                                <Links>Ambassadors</Links>
                                <Links>Agency</Links>
                                <Links>Influencer</Links>
                            </LinkItem>
                         </LinkList>
                         </LinkColumn>
                         <LinkColumn>
                    <LinkHeading>Social Media</LinkHeading>
                        <LinkList>
                            <LinkItem>
                                <Links>Instagram</Links>
                                <Links>Facebook</Links>
                                <Links>Youtube</Links>
                                <Links>Twitter</Links>
                            </LinkItem>
                         </LinkList>
                         </LinkColumn>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                        <SocialIcon/>
                        ULTRA
                        </SocialLogo>
                        <WebsiteRights>ULTRA © 2020</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>

                </SocialMedia>
             </FooterContainer>   
        </>
    )
}

export default Footer;
