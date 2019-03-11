import React from "react";
import PropTypes from "prop-types"
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { connect } from "react-redux";



const DashboardPage = ({ isConfirmed }) => (
  <div>
        {!isConfirmed && <ConfirmEmailMessage />}
      </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return{
    isConfirmed: !!state.user.confirmed   // since confirm is not decleared, we use the exclamation mark to make it boolean and declear it above
  }
}
export default connect(mapStateToProps)(DashboardPage);
