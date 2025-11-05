import { useState, useEffect } from "react";
import whatsapp from "../../assets/whatsapp.png";

function Contact() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [toast, setToast] = useState({ type: "", message: "" });

  // Auto-dismiss success toast after 5 seconds
  useEffect(() => {
    if (toast && toast.message) {
      const timer = setTimeout(() => {
        setToast({ type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Phone validation: allow only numbers and optional '+'
    if (name === "phone") {
      const validValue = value.replace(/[^\d+]/g, "");
      if (
        validValue.split("+").length > 2 ||
        (validValue.includes("+") && validValue[0] !== "+")
      )
        return;
      setFormData((prev) => ({ ...prev, [name]: validValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://ng.tyktt.com/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Server error: ${response.status}`
        );
      }

      setToast({
        type: "success",
        message:
          "Message sent successfully! Check your email for confirmation.",
      });

      // Clear form
      setFormData({
        country: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setValidated(false);
    } catch (error) {
      console.error("Form submission error:", error);
      setToast({
        type: "danger",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="make_image_contact">
        <h1 className="text-black fw-bold">Contact us</h1>
      </div>
      <div className="container my-5">
        <section className="py-5 make_bg rounded">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-4">
                <div className="card shadow-2 border-0 h-100">
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">Get in Touch</h4>
                    <p className="text-muted mb-4">
                      Whether you're an agency partner or new to Tyktt, we'd
                      love to hear from you. Reach us through any of the
                      following channels:
                    </p>

                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Nigeria (Physical Address)
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div className="d-flex mb-2">
                              <span className="me-4">&nbsp;</span>
                              <h6 className="">Travel Yakata Office</h6>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                              <i className="fas fa-map-marker-alt text-dark fa-lg me-3"></i>
                              <p className="mb-0 text-muted">
                                Suite 7B, Level 3, Dominion Plaza, <br />
                                Nicole Balogun Street, Igbo-Efon, Lekki, Lagos.
                              </p>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                              <i className="fas fa-phone text-dark fa-lg me-3"></i>
                              <p className="mb-0 text-muted">
                                +234-706-859-8416, +234-903-953-1793
                              </p>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                              <img
                                src={whatsapp}
                                alt={whatsapp}
                                width="25"
                                className="me-2"
                              />
                              <p className="mb-0 text-muted">
                                +234-706-859-8416, +234-903-953-1793
                              </p>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                              <i className="fas fa-envelope text-dark fa-lg me-3"></i>
                              <p className="mb-0 text-muted">ng@tyktt.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Ghana (Physical Address)
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div className="d-flex mb-2">
                              <span className="me-4">&nbsp;</span>
                              <h6 className="">Travel Yakata Office</h6>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                              <i className="fas fa-map-marker-alt text-dark fa-lg me-3"></i>
                              <p className="mb-0 text-muted">
                                Shop 9, Adom Plaza, <br />
                                Plot 18700 Spintex Road, <br />
                                Rainbow Junction Baatsona Spintex <br />
                                GT-358-8558 <br />
                                Accra Ghana.
                              </p>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                              <i className="fas fa-phone text-dark fa-lg me-3"></i>
                              <p className="mb-0 text-muted">
                                +233-539-615-959, +233-538-786-490
                              </p>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                              <img
                                src={whatsapp}
                                alt={whatsapp}
                                width="25"
                                className="me-2"
                              />
                              <p className="mb-0 text-muted">
                                +233-539-615-959
                              </p>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                              <i className="fas fa-envelope text-dark fa-lg me-3"></i>
                              <p className="mb-0 text-muted">gh@tyktt.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                {/* Bootstrap Toast */}
                {toast.message && (
                  <div
                    className={`toast align-items-center text-bg-${toast.type} border-0 show position-fixed top-0 end-0 m-3 z-3`}
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <div className="d-flex">
                      <div className="toast-body">{toast.message}</div>
                      <button
                        type="button"
                        className="btn-close btn-close-white me-2 m-auto"
                        onClick={() => setToast({ type: "", message: "" })}
                      ></button>
                    </div>
                  </div>
                )}

                {/* Contact Form */}
                <div className="card shadow-2 border-0 h-100">
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">Send Us a Message</h4>

                    <form
                      className={`needs-validation ${
                        validated ? "was-validated" : ""
                      }`}
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      {/* Country */}
                      <div className="mb-3">
                        <label htmlFor="country" className="form-label">
                          Select Country
                        </label>
                        <select
                          className="form-select"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        >
                          <option value="">Choose...</option>
                          <option value="nigeria">Nigeria</option>
                          <option value="ghana">Ghana</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select your country.
                        </div>
                      </div>

                      {/* Name */}
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                        <div className="invalid-feedback">
                          Please enter your name.
                        </div>
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address.
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          pattern="^\+?\d{7,15}$"
                          inputMode="tel"
                          disabled={loading}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid phone number (digits only,
                          optional +).
                        </div>
                      </div>

                      {/* Message */}
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        ></textarea>
                        <div className="invalid-feedback">
                          Please enter your message.
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="col-12">
                        <button
                          className="btn make_background btn-lg shadow-0 w-100"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <ul
            className="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Nigeria Address
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Ghana Address
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6602570075133!2d3.5183882246573877!3d6.437661593553533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf733cd68942b%3A0x2af02147eaaeccf2!2sTravel%20Yakata%20(Nigeria)!5e0!3m2!1sen!2sng!4v1758896057757!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5592743039088!2d-0.09762492534957476!3d5.631878894349231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf850b91d392c3%3A0x83ff9e33796a7a5b!2sTravel%20Yakata%20(Ghana)!5e0!3m2!1sen!2sng!4v1758992077123!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
