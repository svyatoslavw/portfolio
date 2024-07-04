import { MailIcon } from "../icons/MailIcon"
import { TelegramIcon } from "../icons/TelegramIcon"

import "./contact.css"

const Contact = () => {
  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__list">
        <a href="mailto:sviatoslavvww@gmail.com">
          <button type="button" className="btn btn--outline">
            <MailIcon width={22} height={22} />
          </button>
        </a>
        <a href="https://t.me/svy4tosl0v3">
          <button type="button" className="btn btn--outline">
            <TelegramIcon width={21} height={21} />
          </button>
        </a>
      </div>
    </section>
  )
}

export default Contact
