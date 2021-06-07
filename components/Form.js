function Form() {
  return (
    <>
      <form className="form contact-form">
        <div className="form-row">
          <label htmlFor="name">your name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email">your email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="form-row">
          <label htmlFor="message">message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit" className="btn block">
          submit
        </button>
      </form>
    </>
  );
}

export default Form;
