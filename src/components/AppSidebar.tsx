import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CImage,
  CNavLink,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'

import { useTypedSelector } from '../store'

import { AppSidebarNav } from './AppSidebarNav'

import logoTransparent from '../assets/images/transparent-logo-symbol.png'
import logoText from '../assets/images/logo-text-transparent.png'

import SimpleBar from 'simplebar-react'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useTypedSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useTypedSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CNavLink to="/">
        <CSidebarBrand className="d-none d-md-flex sidebar-brand">
          <CImage src={logoTransparent} height={28} alt="SoundStorm Logo" />
          <CImage src={logoText} height={28} alt="SoundStorm Logo Text" />
        </CSidebarBrand>
      </CNavLink>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
