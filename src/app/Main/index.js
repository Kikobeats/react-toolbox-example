import { AppBar, Checkbox, IconButton, Layout, NavDrawer, Panel, Sidebar, Button } from 'react-toolbox'
import React from 'react'
import style from './style'
import Logo from '../Logo'
import BottomNavigation from '../BottomNavigation'
import BottomNavigationItem from '../BottomNavigationItem'

class Main extends React.Component {
  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  }

  toggleSidebar = () => {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  render () {
    return (
      <Layout className={style.app}>
        <NavDrawer
          active={this.state.drawerActive}
          pinned={this.state.drawerPinned} permanentAt='xxxl'
          onOverlayClick={ this.toggleDrawerActive }>
          <p>Navigation, account switcher, etc. go here.</p>
        </NavDrawer>

        <Panel>
          <AppBar className={style.appbar} fixed flat>
            <IconButton icon='menu' inverse={ true } onClick={ this.toggleDrawerActive }/>
            <section className={style.header}>
              <Logo />
              <span>React Toolbox Example</span>
            </section>
            <IconButton icon='filter_list' inverse={ true } onClick={ this.toggleSidebar }/>
          </AppBar>

          <article className={style.article}>
            <section >
              <h1>Main Content</h1>
              <p>Main content goes here.</p>
              <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
              <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
            </section>
            <section>
              <h1>Main Content</h1>
              <p>Main content goes here.</p>
              <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
              <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
            </section>
          </article>
        </Panel>

        <BottomNavigation active={1}>
          <BottomNavigationItem icon='home' label='Home'/>
          <BottomNavigationItem icon='announcement' label='Messages'/>
          <BottomNavigationItem icon='account_box' label='Me'/>
        </BottomNavigation >

        <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
          <header><IconButton icon='close' onClick={ this.toggleSidebar }/></header>
          <section style={{ flex: 1 }}>
            <p>Supplemental content goes here.</p>
          </section>
        </Sidebar>

      </Layout>
    )
  }
}

export default Main
