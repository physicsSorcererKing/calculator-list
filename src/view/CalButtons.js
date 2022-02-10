import { Button, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const CalButtons = (props) => {
  const { value, extend = false, ...others } = props;

  return (
    <Col xs={extend ? 6 : 3} className={'pt-2'}>
      <Button color={'primary'} className="w-100" {...others}>
        {value}
      </Button>
    </Col>
  );
};

CalButtons.propTypes = {
  extend: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['AC', '-/+', '%', '÷', '+', '-', '×', '=', '.']),
  ]),
};

export default CalButtons;
