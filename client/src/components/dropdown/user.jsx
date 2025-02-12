import PropTypes from "prop-types";

const UserModal = ({ close }) => {
  return (
    <div className="shadow-md">
      <button
        className="block w-full  py-2 text-left hover:bg-gray-100"
        onClick={close}
      >
        Profile
      </button>
      <button
        className="block w-full  py-2 text-left hover:bg-gray-100"
        onClick={close}
      >
        Settings
      </button>
      <button
        className="block w-full  py-2 text-left text-red-500 hover:bg-gray-100"
        onClick={close}
      >
        Logout
      </button>
    </div>
  );
};

UserModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default UserModal;
