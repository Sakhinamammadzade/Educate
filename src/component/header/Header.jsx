import React, { useEffect, useState } from 'react'
import '../header/header.scss';
import logo from '../../assets/comparlogo.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersByEmail } from '../../redux/actions/UserAction';
import { Avatar, Box, IconButton, Menu, MenuItem, Modal, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CoursesCreateModal from '../CoursesModal/CoursesCreateModal';


export default function Header() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [openCreate, setOpenCreate] = useState(false);
    const handleOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);



    // Create course state modal start
    const [courseCreateModal, setCourseCreateModal] = useState(false);
    const handleOpenCreateModal = () => setCourseCreateModal(true);
    const handleCloseCreateModal = () => setCourseCreateModal(false);
    // Create course state modal end
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
   
      const[isAuth,setAuth]=useState(false)
      const {user}=useSelector((state)=>state.user) 
      const dispatch=useDispatch()

      useEffect(()=>{
            dispatch(GetUsersByEmail())
      },[dispatch])

      console.log("Header",user);

  return (
    <div className="header">
          <div className="header__container">
                <div className="header__container__logo">
                      <img src={logo} alt="" />
                </div>
                <div className="header__container__nav">
                    <ul className='header__container__nav__navlist'>
                       <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li>Courses</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="header__container__auth">
                   {
                        user==undefined ?
                           <Link to="/auth">Login</Link>
                           :
                           <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Sekine" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                 
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                     
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center"><Link to="/createcourse">Add course</Link></Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Add blog</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Add category</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                           </Box>
                           
                   }
                </div>
          </div>
          <Modal
                open={openCreate}
                onClose={handleCloseCreate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Course create
                    </Typography>
                    <CoursesCreateModal />
                </Box>
            </Modal>

    </div>
  )
}
