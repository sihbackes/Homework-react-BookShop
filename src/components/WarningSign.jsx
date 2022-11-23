import Alert from "react-bootstrap/Alert";

const WarningSign = (props) => {
  const { text } = props;
  return (
    <>
      <Alert className="d-flex justify-content-center" variant="danger">
        {text}
      </Alert>
    </>
  );
};

export default WarningSign;
