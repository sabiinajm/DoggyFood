import blogsData from "./blogsData";
function createCard(blogsData) {
  return (
    <Card
      key={blogsData.id}
      imageURL={blogsData.Image}
      date={blogsData.dates}
      bHeading={blogsData.bHeading}
    />
  );
}
function Card(props) {
  return (
    <div className=" box">
      <img src={props.imageURL} height="300px" width="290px" />
      <h6 className="blog-dates">{props.date}</h6>
      <h4 className="blog-headings">{props.bHeading}</h4>
      <button className="blog-btn">Read more</button>
    </div>
  );
}
function App() {
  return <div className="blogBoxes">{blogsData.map(createCard)}</div>;
}
export default App;
