import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Email from "@mui/icons-material/Email";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;

`;

const List = styled.ul`
margin:0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 40%;
    margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
`

const Payment = styled.img`
padding-top: 10px;
width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>OPPAI.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          ab deleniti saepe doloremque adipisci sed facere, voluptates fugit
          amet est.
        </Desc>

        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>

        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
        </List>
      </Center>

      <Right>

         <Title>
            Contact
         </Title>

         <ContactItem>
            <RoomIcon style={{marginRight:"10px"}}/>
            622 DixiePath, South Tobinchester 98336
         </ContactItem>
         <ContactItem>
            <PhoneIcon style={{marginRight:"10px"}}/>
            +234 810 649 6629
         </ContactItem>
         <ContactItem>
            <Email style={{marginRight:"10px"}}/>
           @excelemma6@gmail.com
         </ContactItem>

         <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
