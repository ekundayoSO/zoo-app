const About = () => {
  return (
    <>
      <div className="container">
        <div className="text-start">
          <h2>About React Zoo App</h2>
          <p>
            This application is designed to display list of cards for various
            animals, birds, insects and fishes available through animal list
            JavaScript file. Each card contains name, number of likes and
            dislikes of each animal as an object in the JS file.
          </p>
        </div>
        <div className="text-start">
          <h2>Features Implemented:</h2>
          <ul>
            <li>Pixabay images collection through its api</li>
            <li>
              Card feature to display each animal, bird, insect and fish details
            </li>
            <li>
              Likes and dislikes features to render number of likes and dislikes
              recorded for each animal, bird, insect and fish.
            </li>
            <li>Counter feature to display number of likes and dislikes.</li>
            <li>
              Home page feature with large four images to display each category
              available in animal list JS file.
            </li>
            <li>
              Search feature which helps to find and display card for each
              searched animal, bird, insect and fish.
            </li>
          </ul>
        </div>
        <div className="text-start">
          <h2>Knowledge Gained in the Project:</h2>
          <ul>
            <li>
              Application of fetching data from third-party APIs: Understanding
              how to integrate and manage data retrieval using Axios and Fetch
              API.
            </li>
            <li>
              State Management: Utilized React's useState and useEffect hooks to
              manage and update component state effectively.
            </li>
            <li>
              Handling Asynchronous Operations: Gained proficiency in handling
              asynchronous operations and promises to manage API calls and data
              fetching.
            </li>
            <li>
              Dynamic Rendering: Learned how to dynamically render components
              and lists based on the fetched data.
            </li>
            <li>
              Styling with CSS and bootstrap: Improved skills in styling React components
              using CSS and bootstrap through className for a responsive and user-friendly
              interface.
            </li>
            <li>
              Version Control: Improved knowledge of using Git for version
              control to track changes.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
