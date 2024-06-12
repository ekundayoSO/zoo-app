import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePage = ({ ...rest }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [animalData, setAnimalData] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const categoryItems = rest[params.category];
  const data = categoryItems?.find((el) => el.name === params.name);
  const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

  useEffect(() => {
    if (data) {
      axios
        .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${data.name}`)
        .then((response) => setAnimalData(response.data))
        .catch((error) =>
          console.error("Error fetching Wikipedia data", error)
        );
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const fetchImage = async () => {
        try {
          const response = await axios.get(
            `https://pixabay.com/api/?key=${apiKey}&q=${data.name}`
          );
          const imageUrl = response.data.hits[0]?.webformatURL || "";
          setImageUrl(imageUrl);
        } catch (error) {
          console.error("Error fetching image from Pixabay API", error);
        }
      };

      fetchImage();
    }
  }, [data, apiKey]);

  if (!data) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container">
      <div>
        <h2>{data.name}</h2>
        <img
          src={imageUrl}
          alt={data.name}
          style={{ width: "500px", height: "500px", borderRadius: "10px" }}
        />
        <p className="mt-2">Likes: {data.likes}</p>
        <button className="btn btn-primary btn-sm mb-4" onClick={() => navigate(-1)}>Back</button>
      </div>
      <div>
        <p>Description:</p>
        <p>{animalData.extract}</p>
      </div>
    </div>
  );
};

export default SinglePage;
