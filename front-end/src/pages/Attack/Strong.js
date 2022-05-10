import { type, svgs } from "../../const";

const Strong = (props) => {
  let indices = [];
  var len = Array.isArray(props.effectiveAgainst)
    ? props.effectiveAgainst.length
    : 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < type.length; j++) {
      if (type[j].value === props.effectiveAgainst[i]) indices.push(j);
    }
  }
  return (
    <div style={{ float: "left", marginLeft: 40 }}>
      <h2>Effective against</h2>
      {props.effectiveAgainst &&
        indices.length &&
        props.effectiveAgainst.map((effective, i) => (
          <p key={i}>
            <label>
              {" "}
              <img
                src={svgs[indices[i]]}
                style={{
                  width: "40px",
                  height: "40px",
                  verticalAlign: "middle",
                  margin: 5,
                }}
              />
              {effective}
            </label>
          </p>
        ))}
    </div>
  );
};

export default Strong;
