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
} from "react-icons/fa";
import { MenuList, MenuItem } from "@material-ui/core";

export default function Header() {
  return (
    <>
      {window.innerWidth < 577 ? (
        <div></div>
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
    </>
  );
}
