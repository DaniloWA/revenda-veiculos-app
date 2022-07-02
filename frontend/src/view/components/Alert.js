import React from "react";
import { changeAlert } from "../../store/actions/alert.action";
import { Modal, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { MdError, MdCheckCircle } from "react-icons/md";

export default function Alert() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alertReducer);

  if (alert.open) {
    setTimeout(() => {
      dispatch(changeAlert({ open: false }));
    }, alert.time);
  }

  return (
    <Modal
      open={alert.open}
      onClose={() => dispatch(changeAlert({ open: false }))}
      className="d-flex flex-column align-items-center justify-content-center h-100"
    >
      <div className="bg-white rounded-2 d-flex align-items-center outline-none p-3">
        {alert.class === "success" && (
          <MdCheckCircle
            style={{ fontSize: "2.5rem" }}
            className="me-3 text-success"
          ></MdCheckCircle>
        )}

        {alert.class === "error" && (
          <MdError
            style={{ fontSize: "2.5rem" }}
            className="me-3 text-danger"
          ></MdError>
        )}
        <Typography variant="subtitle2" className="font-weight-bold">
          {alert.msg}
        </Typography>
      </div>
    </Modal>
  );
}
