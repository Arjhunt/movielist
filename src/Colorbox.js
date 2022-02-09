export function Colorbox({ color }) {
  const colorboxstyle = {
    width: "200px",
    height: "30px",
    margin: "10px",
    backgroundColor: color,
  };
  return (
    <div style={colorboxstyle}>
    </div>

  );
}
