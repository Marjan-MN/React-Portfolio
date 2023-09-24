export default function ContactPage() {
  return (
    <div className="form-container pt-4">
      <h2>Contact me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <br />
        <input className="input-name" type="text" />
        <br />
        <label htmlFor="email">Email Address:</label>
        <br />
        <input className="input-email" type="email" />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea className="input-message" type="description" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
