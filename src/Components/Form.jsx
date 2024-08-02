import React, { useEffect, useState } from "react";
import TooltipButton from "./ToolTipButton";
import PhoneInput from "react-phone-input-2";
import { FaRegUser } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import logo from "../images/Logo-TL.png";
import { IoBriefcase } from "react-icons/io5";
import CountryStates from "./countryState";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";

function Form() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [items, setItems] = useState([]);
  const [businessModal, setbusinessModal] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [location, setlocation] = useState([]);
  useEffect(() => {
    // Update location state whenever selectedCountry, selectedState, or selectedCity changes
    setlocation([
      selectedCountry && selectedCountry.name,
      selectedState && selectedState.name,
      selectedCity && selectedCity.name,
    ]);
    console.log("Updated Location:", [
      selectedCountry,
      selectedState,
      selectedCity,
    ]);
  }, [selectedCountry, selectedState, selectedCity]);

  const handleBlur = () => {
    const namePattern = /^[A-Za-z\s]{3,}$/; // Regex for letters and spaces only, minimum 3 characters

    if (name.trim() === "") {
      setError("Name is required");
    } else if (!namePattern.test(name.trim())) {
      setError(
        "Name must be at least 3 characters long and contain only letters and spaces"
      );
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "black" : "black", // Hover background color
    color: isHovered ? "#fff" : "black", // Hover text color
    borderRadius: "12px",
    transition: "background-color 0.3s, color 0.3s", // Optional: Smooth transition
  };

  const handleService = (item) => {
    if (item) {
      setItems((prevItems) => {
        if (prevItems.includes(item)) {
          console.log("error");
          return prevItems; // No change if item already exists
        } else {
          const updatedItems = [...prevItems, item];
          console.log(updatedItems);
          return updatedItems; // Update state with new item
        }
      });
    }
  };
  const [email, setEmail] = useState("");
  const [emailerror, setemailError] = useState("");

  const handleChangeemail = (e) => {
    setEmail(e.target.value);
  };

  const handleBluremail = () => {
    // Simple regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setemailError("Please enter a valid email address.");
    } else {
      setemailError("");
    }
  };
  const [phoneError, setPhoneError] = useState("");
  const handlePhonumber = () => {
    // Normalize phone number input (remove non-numeric characters)
    const normalizedPhoneNumber = phoneNumber.replace(/\D/g, "");

    // Regex for phone number validation with and without country code
    const phonePattern = /^(\d{2})?\d{10}$/;

    console.log(normalizedPhoneNumber);

    if (!phonePattern.test(normalizedPhoneNumber)) {
      setPhoneError("Please enter a valid phone number, e.g., +91 xxxxxxxx");
    } else {
      setPhoneError("");
    }
  };
  const [selectError, setSelctError] = useState("");
  const handleSelect = () => {
    if (!items.length > 0) {
      setSelctError("select atleast one service");
    }
  };
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPhoneNumber = `+${phoneNumber}`;
    if (
      fullPhoneNumber.length > 0 &&
      name.length > 0 &&
      items.length > 0 &&
      message.length > 0
    ) {
      const wholeMessage = `Name: ${name}%0AEmail: ${email}%0APhone Number: ${fullPhoneNumber}%0ABusiness modal :${businessModal} %0ASerives: ${items.join(
        ","
      )} %0Alocation : ${location.join(",")}%0Amessage: ${message} `;
      console.log(wholeMessage);
      const whatsappUrl = `https://wa.me/919061432814?text=${wholeMessage}`;
      window.open(whatsappUrl, "_blank");
    }
    console.log("submitting");
  };
  return (
    <form
      className="md:h-fit font-bold z-10 relative  text-black lg:h-[550px] backdrop-blur-xl overflow-x-hidden    shadow-black bg-stone-100  overflow-y-auto  bg-opacity-70 px-6  h-fit text-sm   w-full flex flex-col justify-between py-2 gap-4 max-w-[500px]"
      onSubmit={handleSubmit}
    >
      {/* <h1 className="text-red-600 absolute top-[200px] opacity-10 -rotate-45 z-1 right-[200px]  font-sans text-[200px]">TL</h1> */}
      <img
        src={logo}
        className="w-72 h-auto opacity-10 transition-all transition-scale  rotate-180 absolute top-[-100px] right-[-100px]"
        alt=""
      />
      <h1 className="text-4xl font-extrabold transition-all duration-300 ease-in-out font-sans">
        Get in touch
      </h1>
      <p className="h-fit text-md text-stone-800   text-opacity-90">
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; In today’s digital age, a
        well-designed contact page is indispensable for any business aiming to
        maintain strong relationships with its clients.
      </p>
      <div className="flex w-fit items-center md:gap-6 gap-2 flex-wrap ">
        <FaRegUser />
        <input
          id="name"
          name="name"
          value={name}
          style={{
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
          onChange={handleChange}
          // style={{ boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}
          onBlur={handleBlur}
          type="text"
          className=" w-[300px]   bg-stone-100 h-10 rounded- outline-none px-4 bg-opacity-90 placeholder:text-stone-900 placeholder:text-opacity-50"
          placeholder="name"
        />
        <TooltipButton
          content={
            <p>
              • Please enter your full name.
              <br />
              • Use your first name and last name.
              <br />
              • Ensure there are no numbers.
              <br />• Only use alphabetic characters. eg: "John Doe"
            </p>
          }
        />
        {error && <p className="text-red-500 text-[10px]">{error}</p>}
      </div>

      <div className="flex w-full items-center md:gap-6 gap-2 flex-wrap">
        <MdAlternateEmail />
        <input
          type="email"
          id="email"
          className="  w-[300px] bg-stone-100 h-10   rounded- outline-none px-4 bg-opacity-90 placeholder:text-stone-900 placeholder:text-opacity-50"
          placeholder="xxxGgmail.com"
          value={email}
          style={{
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
          onChange={handleChangeemail}
          onBlur={handleBluremail}
          aria-invalid={!!error}
          aria-describedby="email-error"
        />
        <TooltipButton
          content={
            <p>
              Enter your email address.
              <br />
              • Do not include spaces or special characters outside of the
              standard email format.
              <br />
              • Only use alphanumeric characters, periods, hyphens, and the @
              symbol.
              <br />• eg: example@example.com
            </p>
          }
        />
        {emailerror && (
          <p id="email-error" className="text-red-500 text-[10px]">
            {emailerror}
          </p>
        )}
      </div>

      <div className="flex-wrap max-w-[200px] flex items-center justify-start gap-3">
        <div
          className="flex items-center justify-start md:gap-6 gap-2"
          style={{}}
        >
          <FaPhoneFlip />
          <PhoneInput
            country={"eg"}
            enableSearch={true}
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone)}
            inputStyle={{
              backgroundColor: "transparent",
              border: "none", // Remove border from input
              boxShadow: "none", // Remove any box shadow
            }}
            onBlur={handlePhonumber}
            containerStyle={{
              border: "none", // Remove border from container
              height: "30px",
              borderRadius: "",
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              backgroundColor: " rgba(245, 245, 244, 0.9)",
              width: "220px",
            }}
          />
          <TooltipButton
            content={
              <p>
                Enter your phone number with the country code.
                <br />
                • Do not include spaces or special characters within the number.
                <br />
                • Only use numeric characters.
                <br />• eg: +1 8547854785
              </p>
            }
          />
        </div>
        {phoneError && (
          <p className="w-fit text-red-500 text-[10px]">{phoneError}</p>
        )}
      </div>
      <div className="flex w-fit flex-wrap justify-start items-center gap-2">
        <div className="flex w-fit flex-wrap justify-start items-center md:gap-6 gap-2">
          <IoBriefcase />
          <select
            onChange={(e) => setbusinessModal(e.target.value)}
            id="business-industries"
            name="business-industries"
            placeholder="Business Model:"
            style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
            className="md:w-[160px]  w-[120px] max-h-10  text-sm  bg-stone-100 h-10 rounded- outline-none px-4 bg-opacity-90  placeholder:text-opacity-90 placeholder:text-stone-800  text-stone-800"
          >
            <option value="agriculture">Business Model:</option>
            <option value="agriculture">Agriculture</option>
            <option value="automotive">Automotive</option>
            <option value="banking-finance">Banking & Finance</option>
            <option value="construction">Construction</option>
            <option value="education">Education</option>
            <option value="energy">Energy</option>
            <option value="entertainment">Entertainment</option>
            <option value="food-beverage">Food & Beverage</option>
            <option value="healthcare">Healthcare</option>
            <option value="hospitality">Hospitality</option>
            <option value="information-technology">
              Information Technology
            </option>
            <option value="insurance">Insurance</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="media">Media</option>
            <option value="pharmaceuticals">Pharmaceuticals</option>
            <option value="real-estate">Real Estate</option>
            <option value="retail">Retail</option>
            <option value="telecommunications">Telecommunications</option>
            <option value="transportation">Transportation</option>
            <option value="travel-tourism">Travel & Tourism</option>
          </select>
        </div>

        <select
          className="md:w-[160px]  w-[120px] bg-stone-100 h-10 rounded- outline-none px-4 bg-opacity-90  text-sm   placeholder:text-opacity-90 placeholder:text-stone-800  text-stone-800"
          placeholder="Select our service"
          style={{
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
          onChange={(e) => handleService(e.target.value)}
          onBlur={handleSelect}
        >
          <option
            value=""
            className="font-bold w-fit text-stone-800"
            disabled
            selected
          >
            Select a service
          </option>
          <option
            value="Branding (Logo,Packaging,Label,Letterhead)"
            className="text-red-400"
          >
            Branding (Logo,Packaging,Label,Letterhead)
          </option>
          <option value="cyber-security" className="text-red-400">
            Cloud Services (Aws,Azure)
          </option>
          <option
            value="Digital Marketing (FB,GOOGLE,INTAGRAM,YOUTUBE,LINKEDIN)"
            className="text-red-400"
          >
            Digital Marketing (FB,GOOGLE,INTAGRAM,YOUTUBE,LINKEDIN)
          </option>
          <option
            value="Domain Registration (DNS / SSL management)"
            className="text-red-400"
          >
            Domain Registration (DNS / SSL management)
          </option>
          <option
            value="Hosting (SQL,MySql,FTP,Webmail)"
            className="text-red-400"
          >
            Hosting (SQL,MySql,FTP,Webmail)
          </option>
          <option
            value="E-commerce Websit(checkout/payment integration)"
            className="text-red-400"
          >
            E-commerce Websit(checkout/payment integration)
          </option>
          <option value="Email Exchange (google)" className="text-red-400">
            Email Exchange (google)
          </option>
          <option value="SEO (Basic & Advanced)" className="text-red-400">
            SEO (Basic & Advanced)
          </option>
          <option value="Payment GateWay Integration" className="text-red-400">
            Payment GateWay Integration
          </option>
          <option value="Social Media Management" className="text-red-400">
            Social Media Management
          </option>
          <option value="Software Counsling" className="text-red-400">
            Software Counsling
          </option>
          <option
            value="Video Management (Editing & Straming)"
            className="text-red-400"
          >
            Video Management (Editing & Straming)
          </option>
          <option
            value="Websites (One page & Multi-page)"
            className="text-red-400"
          >
            Websites (One page & Multi-page)
          </option>
          <option
            value="Mobile App Developement (IOS / Android)"
            className="text-red-400"
          >
            Mobile App Developement (IOS / Android)
          </option>
          {/* Add more options as needed */}
        </select>
        <TooltipButton
          content={
            <p>
              First, select your business model.
              <br />
              Choose one service that fits your goals.
              <br />
              Contact us for more information.
            </p>
          }
        />
        {selectError && (
          <p id="" className="text-red-500 text-[10px] ">
            {selectError}
          </p>
        )}

        <div className="w-full flex-wrap flex gap-3 ">
          {items.map((item, index) => (
            <div
              className="px-2 py-1 text-xs font-sans font-bold border text-red-500 rounded-full  border-stone-500 rounded-"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {/* <CountriesLists/> */}
      <CountryStates
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <div className="flex flex-wrap items-center gap-2 md:gap-6">
        <CiChat1 />
        <textarea
          type="text"
          rows="4"
          cols="50"
          style={{
            WebkitUserDrag: "none",
            userDrag: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            MsUserSelect: "none",
            userSelect: "none",
          }}
          onChange={(e) => setMessage(e.target.value)}
          draggable={false}
          className=" w-[300px] py-3 h-[50px]  overflow-hidden bg-stone-100     outline-none px-4 bg-opacity-90 placeholder:text-stone-900 text-black placeholder:text-opacity-80"
          placeholder="message"
        />
        <TooltipButton
          content={
            <p>
              • Describe your requirements or challenges.
              <br />
              • Mention any deadlines.
              <br />
              • Provide additional details to help us understand your needs.
              <br />
            </p>
          }
          onclick={(e) => e.stopPropagation()}
        />
        <p className="text-red-500 text-[10px] w-[200px] font-bold font-sans flex">
          <span className="  text-black text-[12px]">
            {100 - message.length} &nbsp;
          </span>{" "}
          letters left
        </p>
      </div>

      <div className=" w-full flex justify-between items-end text-black text-xl h-fit">
        <button
          type={"submit"}
          // style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
          className="w-fit text-white  font-sans  flex font-bold text:md px-3 py-2 h-fit hover:px-4 transition-all duration-300  bg-red-500 bg-opacity-80 hover:bg-opacity-80 rounded-"
        >
          <FaChevronRight />
          Connect with us.
        </button>
        <button
          type={"submit"}
          className="w-fit text-black flex items-center font-bold text:md h-fit  transition-all duration-300  bg-opacity-80 hover:bg-opacity-80 rounded-"
        >
          <span className="text-[12px] font-bold font-sans">Powered by</span>
          <img src={logo} className="w-10 h-auto" />
        </button>

        {/* <SocialMediaIcons title={} icon={}/> */}
      </div>
    </form>
  );
}

export default Form;
