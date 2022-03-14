
import PropTypes from 'prop-types';

const Button = ({ type, version, isDisabled, children }) => {
    return (
        <button
            type={type || 'submit'}
            className={`btn btn-${version}`}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'submit',
    version: 'primary',
    isDisabled: false,
}

Button.propTypes = {
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Button;