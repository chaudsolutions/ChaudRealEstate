import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { serVer } from "../../Hooks/useVariable";
import ButtonLoad from "../../Animations/ButtonLoad";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import "./forms.css";
import PropTypes from "prop-types";
import { IoIosSend } from "react-icons/io";

export const SearchFormComponent = ({ view }) => {
  SearchFormComponent.propTypes = {
    view: PropTypes.string.isRequired,
  };

  // states
  const [priceRange, setPriceRange] = useState([0, 2000000]); // Price range filter state
  const [value, setValue] = useState(priceRange);

  // use view prop to toggle sales and rentals properties

  // React Hook Form
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data) => {
    const { propertyCategory, propertyCity } = data;

    try {
      const res = await axios.post(`${serVer}/user/searchProperty`, {
        propertyCategory,
        propertyCity,
        value,
      });

      const { data } = res;

      toast.success("Property found");
      console.log(data); // display the data from the response
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const onError = () => {
    toast.error("Failed to submit, check inputs and try again");
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
    setPriceRange(newValue);
  };

  //   mock data
  const categories = [];
  const cities = [];

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
      className="searchForm">
      <div className="inputContainer">
        <label htmlFor="category">Categories</label>
        <select
          id="category"
          {...register("propertyCategory", {
            required: "Category is required",
          })}>
          <option value="">Select a category</option>
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
        <p>{errors.propertyCategory?.message}</p>
      </div>

      <div className="inputContainer">
        <label htmlFor="city">City</label>
        <select
          id="city"
          {...register("propertyCity", {
            required: "City is required",
          })}>
          <option value="">Select a city</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
        <p>{errors.propertyCity?.message}</p>
      </div>

      <div className="filterPrice">
        <label>Price</label>
        <div>
          <Slider
            value={value}
            onChange={handleChange}
            min={0}
            max={2000000}
            valueLabelDisplay="auto"
          />
        </div>
        <div>
          <TbCurrencyNaira />
          {value[0].toLocaleString()} - <TbCurrencyNaira />
          {value[1].toLocaleString()}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="submitBtn">
        {isSubmitting ? <ButtonLoad /> : <>Search</>}
      </button>
    </form>
  );
};

// contact us form
export const ContactForm = () => {
  // react form
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting } = formState;

  //  function to send a contact us message
  const onSubmit = async (data) => {
    return toast.error("feature coming soon");

    const { user_name, user_email, phone, subject, message } = data;
    // send the data to the server
    const url = `/auth/contact-message`;
    try {
      const res = await axios.post(url, {
        user_name,
        user_email,
        phone,
        subject,
        message,
      });

      const { data } = res;

      toast.success(data);

      reset();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const onError = () => {
    toast.error("Failed to submit, check inputs and try again");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
      className="contactForm">
      <div>
        <div className="inputBox">
          <input
            placeholder="Name"
            required
            type="text"
            {...register("user_name", { required: "Name is required" })}
          />
          <p>{errors.user_name?.message}</p>
        </div>
        <div className="inputBox">
          <input
            placeholder="Email"
            required
            type="email"
            {...register("user_email", { required: "Email is required" })}
          />
          <p>{errors.user_email?.message}</p>
        </div>
        <div className="inputBox">
          <input
            placeholder="Phone"
            required
            type="text"
            {...register("phone", { required: "Phone is required" })}
          />
          <p>{errors.phone?.message}</p>
        </div>
        <div className="inputBox">
          <input
            placeholder="Subject"
            required
            type="text"
            {...register("subject", { required: "Subject is required" })}
          />
          <p>{errors.subject?.message}</p>
        </div>
        <div className="inputBox">
          <textarea
            placeholder="Your Message"
            required
            type="text"
            {...register("message", {
              required: "Your Message is required",
            })}
          />
          <p>{errors.message?.message}</p>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>SEND</>
        ) : (
          <>
            SEND MESSAGE
            <IoIosSend size={30} />
          </>
        )}
      </button>
    </form>
  );
};
