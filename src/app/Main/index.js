import { AppBar, Checkbox, IconButton, Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox'
import React from 'react'
import style from './style'
import Logo from '../Logo'

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

          <footer class="Site-footer"><div class="Footer"><span class="Footer-social"><iframe class="github-btn" src="https://ghbtns.com/github-btn.html?user=philipwalton&amp;repo=solved-by-flexbox&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="106px" height="20px"></iframe><a href="https://twitter.com/philwalton" class="twitter-follow-button" data-show-count="true" data-lang="en">@philwalton</a> <a href="https://twitter.com/share" class="twitter-share-button" data-text="A showcase of traditionally hard CSS problems, easily solved using flexbox." data-url="https://philipwalton.github.io/solved-by-flexbox/" data-count="horizontal" data-via="philwalton" data-related="philwalton:Creator of Solved by Flexbox">Tweet</a></span><div class="Footer-credits"><span class="Footer-credit">Created and maintained by <a href="https://philipwalton.com">Philip Walton</a>.</span> <span class="Footer-credit">Source code and examples released under the <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/LICENSE">MIT</a> license.</span> <span class="Footer-credit">Website and documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</span></div></div></footer>
        </Panel>

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
