import React from "react";
import { Link } from "react-router-dom";
import { routes as rt } from "../../routes/Routes";
import {
  FaCar,
  FaUsers,
  FaLaptop,
  FaCreditCard,
  FaWhatsapp,
  FaSignInAlt,
  FaAngleUp,
  FaAngleDown,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  MenuList,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@material-ui/core";
import { MdMenu } from "react-icons/md";

export default function Header(props) {
  const [state, setState] = React.useState({ open: false });
  const [collapse, setCollapse] = React.useState({
    site: false,
    financeiro: false,
  });

  return (
    <>
      {window.innerWidth < 577 ? (
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setState({ open: true })}
            >
              <MdMenu />
            </IconButton>
            <Typography variant="h6">{props.title}</Typography>
          </Toolbar>
        </AppBar>
      ) : (
        <nav className="header navbar navbar-expand-lg navbar-light bg-white p-0">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" alt="CAR CRM" height={40} />
            </Link>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={rt.vehicles}>
                  <FaCar className="icon-lg mr-2" />
                  Veiculos
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link bg-white " to={rt.vehicles}>
                  <FaUsers className="icon-lg mr-2" />
                  Propietários
                </button>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-toggle="dropdown"
                >
                  <FaLaptop className="icon-lg mr-2" />
                  Site
                </Link>
                <MenuList className="dropdown-menu">
                  <MenuItem className="dropdown-item">
                    Otimização para o Google
                  </MenuItem>
                  <MenuItem className="dropdown-item">
                    Unidades e Telefones
                  </MenuItem>
                  <MenuItem className="dropdown-item">Minha Logo</MenuItem>
                  <MenuItem className="dropdown-item">Dominio</MenuItem>
                  <MenuItem className="dropdown-item">Configurações</MenuItem>
                </MenuList>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-toggle="dropdown"
                >
                  <FaCreditCard className="icon-lg mr-2" />
                  Financeiro
                </Link>
                <MenuList className="dropdown-menu">
                  <MenuItem className="dropdown-item">Meu Plano</MenuItem>
                  <MenuItem className="dropdown-item">
                    Minhas transações
                  </MenuItem>
                </MenuList>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FaWhatsapp className="icon-lg mr-2" />
                  Ajuda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FaSignInAlt className="icon-lg mr-2" />
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <Drawer
        anchor="left"
        open={state.open}
        onClose={() => setState({ open: false })}
      >
        <div style={{ width: 320, maxWidth: window.innerWidth - 70 }}>
          <List component="nav" className="menu-mobile">
            <ListItem>
              <img
                src="/logo.png"
                alt="CAR CRM"
                height={40}
                className="img-fluid logo-mobile"
              />
            </ListItem>

            <ListItem>test@gmail.com</ListItem>
            <Divider className="mt-2 mb-3" />

            <ListItem>
              <ListItemIcon>
                <FaCar />
              </ListItemIcon>
              <ListItemText primary="Veiculos" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <FaUsers />
              </ListItemIcon>
              <ListItemText primary="Proprietários" />
            </ListItem>

            <ListItem
              button
              onClick={() =>
                setCollapse({ site: collapse.site ? false : true })
              }
            >
              <ListItemIcon>
                <FaLaptop />
              </ListItemIcon>
              <ListItemText primary="Site" />
              {collapse.site ? <FaAngleUp /> : <FaAngleDown />}
            </ListItem>

            <Collapse in={collapse.site} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText
                    primary="Otimização para o Google"
                    className="pl-5"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Unidades e Telefones"
                    className="pl-5"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Minha Logo" className="pl-5" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Dominio" className="pl-5" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Configurações" className="pl-5" />
                </ListItem>
              </List>
            </Collapse>

            <Divider className="mt-2 mb-2" />

            <ListItem
              button
              onClick={() =>
                setCollapse({ financeiro: collapse.financeiro ? false : true })
              }
            >
              <ListItemIcon>
                <FaCreditCard />
              </ListItemIcon>
              <ListItemText primary="Financeiro" />
              {collapse.financeiro ? <FaAngleUp /> : <FaAngleDown />}
            </ListItem>
            <Collapse in={collapse.financeiro} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText primary="Meu Plano" className="pl-5" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Minhas Transações" className="pl-5" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem>
              <ListItemIcon>
                <FaWhatsapp />
              </ListItemIcon>
              <ListItemText primary="Ajuda" />
            </ListItem>

            <Divider className="mt-2 mb-2" />

            <ListItem>
              <ListItemIcon>
                <FaSignOutAlt />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
