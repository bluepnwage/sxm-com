const icon = <img src={"/logo-icon.svg"} width={35} height={35} style={{ marginRight: 5 }} />;

export default {
  logo: (
    <>
      {icon}
      <span>SXM COM Audit</span>
    </>
  ),
  docsRepositoryBase: "https://github.com/bluepnwage/sxm-com",
  project: {
    link: "https://github.com/bluepnwage/sxm-com"
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – SXM COM Audit"
    };
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
