import "./maps.css";

const Maps = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6065623628!2d-0.43125445049699135!3d51.52860699734387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1734771255299!5m2!1sen!2sng"
      allowFullScreen=""
      loading="lazy"
      title="company location"
      className="maps"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default Maps;