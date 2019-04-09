import React, { Component } from 'react';
import './index.css';
import { Divider, Avatar, Card, Drawer, Button, Icon, Layout, Menu, Input } from 'antd';
import logo from '../../assets/img/logo.jpeg';
import defaultImage from '../../assets/img/default_image.png';
import Home from '../Home';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarService from './NavbarService';
import NumberFormat from 'react-number-format';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;
const { Search} = Input;
const { Meta } = Card;

const {getProfile} = new NavbarService();

class Navbar extends Component {

  constructor(props){
      super(props);
      this.state = {
        profileImage : '',
        fullname : '',
        username : '',
        isLogin : false,
        isLogout : false,
        generatedMenu:'',
        visible: false, 
        placement: 'right'
    }
  }

  componentDidMount(){
    this.getProfile();
    this.generateMenu();
  }

  getProfile(){
    getProfile().then(response =>{
      this.setState(
          {
            isLogin: true, 
            profileImage: response.data.result.profile_image,
            fullname: response.data.result.fullname,
            username: response.data.result.username
          }, ()=> this.generateMenu()
        );
    });
  }

  generateMenu(){
    let menuAfterLogin = 
      <Menu
        theme="light"
        mode="horizontal"
        style={{ lineHeight: '63px' }}
      >
        <SubMenu title={<span>Kategori</span>}>
          <MenuItemGroup title="Fashion">
            <Menu.Item key="setting:1">Fashion Pria</Menu.Item>
            <Menu.Item key="setting:2">Fashion Wanita</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Search
          placeholder="Cari produk"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <Menu.Item onClick={this.showDrawer} className="rightMenuItem" key="3">
          <Avatar>{this.state.fullname.substring(0,1)}</Avatar>
          <span style={{marginLeft:10}} >{this.state.fullname}</span>
        </Menu.Item>
        <Menu.Item className="rightMenuItem" key="2">
          <Icon type="shopping-cart" style={{ fontSize: 20, color: '#000' }} />
        </Menu.Item>
      </Menu>
    
    let menuBeforeLogin = 
      <Menu
        theme="light"
        mode="horizontal"
        style={{ lineHeight: '63px' }}
      >
        <SubMenu title={<span>Kategori</span>}>
          <MenuItemGroup title="Fashion">
            <Menu.Item key="setting:1">Fashion Pria</Menu.Item>
            <Menu.Item key="setting:2">Fashion Wanita</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Search
          placeholder="Cari produk"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <Menu.Item className="rightMenuItem" key="4">
          <a href="/sign-up">
              <Button>Sign Up</Button>
          </a>
        </Menu.Item>
        <Menu.Item className="rightMenuItem" key="3">
          <a href="/sign-in">
              <Button>Sign In</Button>
          </a>
        </Menu.Item>
      </Menu>
    if(localStorage.getItem('access_token') == null){
      this.setState({
          generatedMenu:menuBeforeLogin
      })
    } else {
      if(this.state.isLogin == true){
        this.setState({
            generatedMenu:menuAfterLogin
        })
      } else {
        this.setState({
            generatedMenu:menuBeforeLogin
        })
      }
    }
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  signOut = () => {
    localStorage.setItem('access_token', null);
    this.setState({isLogout:true})
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  }

  render() {
    if(this.state.isLogout){
      return <Redirect to="/sign-in" />
    } else {
      return <div>
              <Layout>
                <Header className="header">
                  <div className="logo" >
                    <img alt="" src={logo} width="80px" />
                  </div>
                  {this.state.generatedMenu}
                </Header>
                <Layout style={{background:'#fff'}}>
                  <Content className="content" style={{marginTop:20,marginBottom:20}}>
                      <BrowserRouter>
                        <Switch>
                          <Route path="/" component={Home} /> 
                        </Switch>
                      </BrowserRouter>
                  </Content>
                </Layout>
                <Footer className="footer" >
                  <h3>&copy; 2019, PT. KodaSkrip</h3>
                </Footer>
              </Layout>
              <Drawer
                title="Profile"
                placement={this.state.placement}
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <div >
                  <div style={{width: '100%'}}>
                    <Avatar style={{display: 'table', margin: '0 auto'}} size={64}>
                      {this.state.fullname.substring(0,1)}
                    </Avatar>
                  </div>
                  <div style={{width: '100%', marginTop:10}}>
                    <span style={{display: 'table', margin: '0 auto'}}>
                      <b>{this.state.fullname}</b>
                    </span>
                  </div>
                  <div style={{width: '100%'}}>
                    <span style={{display: 'table', margin: '0 auto'}}>
                      <h5>({this.state.username})</h5>
                    </span>
                  </div>
                  <div>
                    <Divider />
                    <p>Saldo : <NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'IDR '} renderText={value => value} /></p>
                    <Divider />
                  </div>
                  <div style={{width: '100%'}}>
                    <Button style={{display: 'table', margin: '0 auto'}} onClick={this.signOut}>Keluar</Button>
                  </div>
                </div>
              </Drawer>
            </div>
    }
  }
}

export default Navbar;
