export default function handler(req, res) {
  const coordinates = {
    budapest: { lat: "47.4986567", lng: "19.0532484" },
  };

  res.status(200).json(coordinates);
}
