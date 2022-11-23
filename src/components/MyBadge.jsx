import Badge from "react-bootstrap/Badge";

const MyBadge = ({ color, text }) => {
  return (
    <div className="d-flex justify-content-center">
      <Badge pill variant={color}>
        {text}
      </Badge>
    </div>
  );
};

export default MyBadge;
