const coordinates = {
    budapest: { lat: "47.4986567", lng: "19.0532484" }
  };
  
  export default function handler(req, res) {
    res.status(200).json(coordinates);
  }
  