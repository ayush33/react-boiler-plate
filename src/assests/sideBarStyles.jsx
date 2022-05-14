//**********************************************************************
//    Purpose: <CSS Classes for header style>
//   SN  Date       Change Description      Modified By
//   1   04/07/2019     Base Version        Mukesh Nagar
//**********************************************************************
/* jshint esversion: 6 */
const drawerWidth = 250;
const SidebarStyle = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        '& > div':{
          top:60,
          borderRight:0,
          height:'calc(100vh - 60px)'
        },
        '& .menuList':{
            fontSize:'14px',
            whiteSpace:'normal',
            fontWeight:400
        },
        '& .leftAuto': {
            marginLeft: 'auto',
            position:'absolute',
            left:0,
            transform:'rotate(-90deg)',
            '& svg': {
                marginRight: '0 !important',
                width:20,
                marginLeft:'0 !important',
            },
            '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)':{
                float:'right',
                marginTop:-10
            }
        },
        '@media (max-width:1024px)':{
            width:'250px',
            left:0,
            right:0,
            position:'fixed',
            zIndex:999,
            top:60,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
        },
        '&::-webkit-scrollbar': {
            width: 5
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor:'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.sidebarScrollBg.color,
        },
        '& li': {
            minHeight: 50,
            width: '95%',
            display: 'inline-flex',
            alignItems: 'center',
            transition:'max-height 0.6s linear !important',
            borderTopRightRadius:33,
            borderBottomRightRadius:33,
            borderLeft:'3px solid transparent',
            padding:'6px 25px 6px 20px',
            '&:hover':{
                borderLeft: '3px solid #0065f7',
            },
            '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)':{
                height:'61px'
            }
        },
        '& a': {
            color: theme.palette.sidebarText.color + '!important',
            textDecoration: 'none !important',
            '& svg': {
                marginRight: 15,
                marginLeft:7,
                minWidth: 24,
                height: 24,
                minWidth: 24,
                fill: theme.palette.sidebarText.color,
                float: 'right'
            }
        },
        '& div': {
            '& ul': {
                '& li': {
                    color: theme.palette.sidebarText.color,
                    textDecoration: 'none',
                    padding: '0 15px 0 20px',
                    height: 50,
                    '& svg': {
                        marginRight: 15,
                        width: 24,
                        height: 24,
                        fill: theme.palette.sidebarText.color,
                        float: 'right'
                    },
                    '& span':{
                        whiteSpace:'normal',
                    }
                }
            }
        }
    },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: 2,
        }),
      },
      drawerClose: {
        width: 60,
        overflow:'inherit',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: 2,
        }),
        '& .menuList':{
            whiteSpace:'unset',
            left: 57,
            position: 'absolute'
        },
        '& .leftAuto': {
            marginLeft: 'auto',
            position: 'absolute',
            right: 'inherit',
            '& svg': {
                marginRight: '0 !important',
                marginLeft:'0 !important',
            }
        },
        '@media (max-width:1024px)':{
            display:'none'
        },
        '& svg': {
            marginRight: '2px !important',
            marginLeft:'2px !important',
            minWidth: 24,
            minHeight: 24,
            maxWidth: 24,
            maxHeight: 24
        },
        '& button': {
            padding: '0 !important',
            justifyContent: 'center !important',
            minWidth: 60,
        },
        '& li': {
            padding: '6px 0 !important',
            justifyContent: 'center !important',
            display: 'flex',
            borderRadius: 0,
            width:'100%'
        },
        '& > ul': {
            '& ul': {
                '& li': {
                    transition:'max-height 0.6s linear !important',
                    borderTopRightRadius:33,
                    borderBottomRightRadius:33,
                    minHeight:40,
                    height:40,
                    padding: '6px 16px !important',
                    justifyContent: 'flex-start !important',
                    '& svg': {
                        marginRight: '10px !important'
                    }
                }
            }
        },
        '& div': {
            '& ul': {
                '& li': {
                    '& svg': {
                       minWidth:56 
                    },
                }
            }
        }
      },
    links:{
        textDecoration:'none'
    },
   
    buttonBg: {
        position: 'relative',
        zIndex: 1,
        fontSize: 16,
        borderTopRightRadius:33,
        borderBottomRightRadius:33,
        '& button': {
            borderLeft:'3px solid transparent',
            width: '100%',
            justifyContent: 'flex-start',
            overflow:'hidden',
            color: theme.palette.sidebarText.color,
            zIndex: '1101',
            padding: 0,
            fontSize: 16,
            fontWeight: '400',
            height: 50,
            display: 'flex',
            alignItems: 'center',
            textTransform: 'capitalize',
            borderRadius: 0,
            backgroundColor:'transparent !important',
            '& span':{
                height:'100%',
                display:'flex',
                alignItems:'center'
            },
            '&:hover':{
                backgroundColor:'transparent !important'
            },
            '& svg': {
                marginRight: 15,
                marginLeft:12,
                width: 24,
                height: 44,
                fill: theme.palette.sidebarText.color,
                lineHeight: '33px',
                float: 'right',
                '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)':{
                    float: 'left',
                }
            }
        }
    },
    openDropDown: {
        position: 'static !important',
        transform: 'translate3d(0px, 0px, 0px) !important',
        transition:'max-height 0.6s linear !important',
        outline:0,
        '& ul':{
            outline: 0,
            padding: 0,
            display:'flex',
            flexDirection:'column',
            '& li':{
                borderBottom:'0 !important',
                '& span':{
                    fontSize:'14px !important'
                }
            } 
            
        }
    },
    removeBoxShadow: {
        transition:'max-height 0.6s linear !important',
        width:'95%',
        float:'left',
        maxHeight:50,
        overflow:'hidden',
        '&.dropdownVisible':{
          overflow:'visible',
        },
        '& div': {
            '& div': {
                boxShadow: 'none',
                background: 'none',
                transition:'all 0.6s linear !important',
                transform:'scale(1) !important',
                visibility:'visible !important',
                opacity:'1 !important',
                transformOrigin:'unset !important'
            }
        },
        '&:hover':{
            backgroundColor:theme.palette.activeMenuBarBg.color
        }
    },
    activeMenuBar: {
        background:'none',
        maxHeight:1000,
        '& button': {
            height: 50,
            backgroundColor:theme.palette.activeMenuBarButton.color,
            transition: 'unset',
            '& div':{
                padding:'0 16px',
                '&:hover':{
                    background:theme.palette.activeMenuBarButton.color,
                }
            },
            '& span': {
                '& span': {
                    '& svg': {
                        transform: 'rotate(90deg)'
                    }
                }
            },
            '&:hover':{
                backgroundColor:theme.palette.activeMenuBarButton.color,
                '&:before': {
                    backgroundColor: '#0065f7',
                  },
                '&:after': {
                    backgroundColor: theme.palette.activeMenu.color,
                },
            }
        },
        '&:hover':{
            backgroundColor:'transparent'
        }
    },

    activeMenuButton: {
        background: theme.palette.activeMenu.color,
        borderLeft: '3px solid #0065f7 !important',
        '& svg':{
            fill:'#0065f7 !important',
        },
        '& span':{
            color:theme.palette.modalTextColor.color,
            fontWeight:'bold',
        },
        '&:hover':{
            background: theme.palette.activeMenu.color,
            borderLeft: '3px solid #0065f7',
            '&:before': {
                backgroundColor: '#0065f7',
              },
            '&:after': {
                backgroundColor: theme.palette.activeMenu.color,
            },
        },
    },
    logo: {
        width: 270,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: '600',
        position:'fixed',
        left:87,
        top:-18,
        zIndex:1101,
        '& img': {
            marginRight: 0,
            width:'100%',
            height:'100%',
        },
        '@media (max-width:767px)':{
            left:50,
            width:'200px',
            '& img':{
            }
        },
        '@media (min-width:320px) and (max-width:400px)':{
            left: 40,
            width: 140,
            top: 4,
            '& img':{
                width:'100%',
            }
        },
    },
    moveSideBar: {
        position: 'absolute',
        left: 0,
        top: 0,
        marginRight: 'auto',
        minHeight: 60,
        borderRadius: 0,
        color: theme.palette.modalTextColor.color,
        background:theme.palette.secondary.main,
        '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)':{
            '& > span':{
                lineHeight:'60px',
                display:'block'
            }
        }
    },
    shrinkLogo: {
        width: 250,
        '& img': {
            marginRight: 0,
            padding: '10px 15px',
            backgroundColor:'#fff'
        }
    },
    changeDropDownPosition: {
        left: '107% !important',
        top: '1px !important',
        outline:0,
        position: 'absolute !important',
        background: theme.palette.openDropdownBg.color,
        zIndex: 9,
        '@media (min-width:1100px) and (max-width:1500px)':{
            maxHeight:240,
            overflow:'auto',
        },
        '& ul':{
            '& a':{
                '& li':{
                    '& span':{
                        whiteSpace:'unset !important',
                        fontSize:'12px !important',
                        fontWeight:300,
                        opacity:'1 !important',
                        position:'static !important',
                        minWidth:'inherit !important'
                    },
                    '& svg':{
                        minWidth:'24px !important'
                    }
                }
            }
        }
    },
    shrinkMoveSdiebar: {
        left: 0,
        top: -60
    },
    projectName:{
        color:'#fff',
        padding:'0 5px',
        display:'inline-block',
        textAlign:'center'
    },

    sidebarMenus:{
        padding:0,
        display:'flex',
        flexDirection:'column',
        outline:0,
    },
    mobileClose:{
        position:'relative'
    },
    activeDropdown:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent: 'flex-start',
        background:'none',
        height:'100%',
        padding: '6px 16px',
        borderLeft:'0 !important',
        '&:hover':{
           backgroundColor:'transparent !important',
           borderLeft: 0,
        },
        '& svg':{
            fill:theme.palette.sidebarText.color + '!important'
        },
        '& span':{
            color:theme.palette.sidebarText.color,
            fontWeight:'normal',

        },
        '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)':{
            display:'inline-block',
            '& span':{
                paddingTop:8,
                float:'left'
            }
        },
    },
    activeMenubarBg:{
        borderBottom:0,
       '& button':{
           background:theme.palette.activeMenuBarButton.color,
            '& span div':{
            //    background:theme.palette.activeMenuBarButton.color,
               padding: '3px 16px',
               boxSizing: 'border-box',
                '&:hover':{
                    backgroundColor:theme.palette.activeMenuBarButton.color,
                }
            },
           '&:hover':{
               backgroundColor:theme.palette.activeMenuBarButton.color,
           },
       }
    }
});

export default SidebarStyle;
