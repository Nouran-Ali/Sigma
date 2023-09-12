import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/router';
import styles from "../styles/navbar.module.css";
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import { Select } from 'antd';

const pages = [
  {
    title: 'Home',
    title_ar: 'الرئيسيه',
    href: '/',
  },
  {
    title: 'About us',
    title_ar: 'عنا',
    href: '/about',
  },
  {
    title: 'Services',
    title_ar: 'خدماتنا',
    href: '/services',
  },
  {
    title: 'Our work',
    title_ar: 'اعمالنا',
    href: '/our_work',
  },
  {
    title: 'Contact',
    title_ar: "تواصل معنا",
    href: '/contact',
  },
];

function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [active, setActive] = useState()
  const router = useRouter();

  const { pathname } = router;

  const [t, i18n] = useTranslation();
  // const { language, changeLanguage } = i18n;
  const { language } = i18n;

  const handleActiveLink = (href) => {
    if (pathname == '/' && href == '/') {
      return true;
    } else if (pathname.includes(href) && href !== '/') {
      return true;
    } else {
      return false;
    }
  }

  const changeLanguage = (language) => {
    i18next.changeLanguage(language, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
  };

  const handleLanguageChange = (value) => {
    const selectedLanguage = value;
    changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    } else {
      changeLanguage(navigator.language);
    }
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #283c3a1c", width: "100%" }} className='navbar pr-3' dir={language == "ar" ? "rtl" : "ltr"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={
              language == "ar" ?
                {
                  mr: 10,
                  ml: 9,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }
                :
                {
                  mr: 15,
                  ml: 9,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }
            }
          >
            <img src='../logo.png' width="50px" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className="ml-5">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ title, title_ar, href }, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link href={href} className={`${styles.link} ${handleActiveLink(href) ? styles.active : ' '}`}>
                    {i18n.language == "ar" ? title_ar : title}
                  </Link>
                </MenuItem>
              ))}
              <Select
                id="language-selector"
                defaultValue={localStorage.getItem('selectedLanguage')}
                onChange={handleLanguageChange}
                className='ml-12 mx-auto'
                options={[
                  {
                    value: 'en',
                    label: 'EN',
                  },
                  {
                    value: 'ar',
                    label: 'AR',
                  },
                ]}
                style={{ color: "#304644", backgroundColor: "#f1f2f3", fontWeight: "600" }}
              />

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              // mr: 2,
              // ml: "auto",
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'flex-end',
            }}
          >
            <img src='../logo.png' width="50px" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textAlign: 'center' }}>
            {pages.map(({ title, title_ar, href }, index) => (
              <Link key={index} href={href} className={`${styles.link} ${handleActiveLink(href) ? styles.active : ' '}`}>
                {i18n.language == "ar" ? title_ar : title}
              </Link>
            ))}
            <Select
              id="language-selector"
              defaultValue={localStorage.getItem('selectedLanguage')}
              onChange={handleLanguageChange}
              className='mt-1'
              options={[
                {
                  value: 'en',
                  label: 'EN',
                },
                {
                  value: 'ar',
                  label: 'AR',
                },
              ]}
              style={{ color: "#304644", backgroundColor: "#f1f2f3", fontWeight: "600" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Navbar;