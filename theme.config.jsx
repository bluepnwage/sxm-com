export default {
  logo: <span>SXM COM Audit</span>,
  project: {
    link: "https://github.com/bluepnwage/sxm-com"
  },
  primaryHue: 150,
  footer: {
    text: (
      <span>
        Built by{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="https://bluepnwage-portfolio.vercel.app"
          target="_blank"
        >
          Agis Carty
        </a>
        , <time dateTime={new Date().toString()}>{new Date().getFullYear()}</time>.
      </span>
    )
  }
};
