const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col gap-1 text-xs">
      <h6>Ukraine {currentYear} © Sviatoslav. </h6>
      <p>
        Career Status -{" "}
        <a
          href="mailto:sviatoslavvww@gmail.com"
          className="bg-foreground/80 px-1 font-medium text-background"
        >
          Open to offers
        </a>
      </p>
    </div>
  )
}

export default Footer
