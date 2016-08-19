import 'react-toolbox/lib/commons.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import Logo from './Logo/index.js';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';

import theme from './client.scss';

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

  render() {
    return (
      <Layout>
        <NavDrawer
          active={this.state.drawerActive}
          pinned={this.state.drawerPinned} permanentAt='xxxl'
          onOverlayClick={ this.toggleDrawerActive }>
          <p>Navigation, account switcher, etc. go here.</p>
        </NavDrawer>

        <Panel>
          <AppBar className={theme.appBar}>
            <IconButton icon='menu' inverse={ true } onClick={ this.toggleDrawerActive }/>
            <section>
              <Logo />
              <span>React Toolbox Example</span>
            </section>
            <IconButton icon='add' inverse={ true } onClick={ this.toggleSidebar }/>
          </AppBar>

          <section style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            <h1>Main Content</h1>
            <p>Main content goes here.</p>
            <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
            <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
          </section>
        </Panel>

        <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
          <header><IconButton icon='close' onClick={ this.toggleSidebar }/></header>
          <section style={{ flex: 1 }}>
            <p>Supplemental content goes here.</p>
          </section>
        </Sidebar>
      </Layout>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))
