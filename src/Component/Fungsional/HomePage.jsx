import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { UncontrolledCarousel } from 'reactstrap';


const items = [

  {
    src: 'https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-header-1440x400.png',

    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'JAWA TENGAH',
    key: '1'
  },
  {
    src: 'https://cf.shopee.co.id/file/fb4f1f1ab0c6bb8754dc4884d0b36dfa',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: 'https://cf.shopee.co.id/file/fb4f1f1ab0c6bb8754dc4884d0b36dfa',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3'
  }
];

const Home = () => <UncontrolledCarousel items={items} />;

function HomePage() {

  return (
    <div>

      <Jumbotron>
      <div className="imageatas">
         <center><img src="https://cf.shopee.co.id/file/fb4f1f1ab0c6bb8754dc4884d0b36dfa" alt="logo2" /></center> 
        </div>
        <h1 className="display-3 text-center">Brand yang tergabung dengan LGN Purwokerto</h1>

        <p className="lead text-center">Desain Terbaik ada pada kami</p>
        <hr className="my-2" />
    
      <center><Button color="success" >CONTACT</Button></center>    
    
      </Jumbotron>

    </div>
  )
}
export default HomePage