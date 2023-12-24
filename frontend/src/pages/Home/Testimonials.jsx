import OwlCarousel from "react-owl-carousel";

const testiData = [
  {
    img: "assets/testi1.png",
  },
  {
    img: "assets/testi2.png",
  },
  {
    img: "assets/testi3.png",
  },
];

export default function Testimonials() {
  const options = {
    loop: true,
    center: true,
    margin: 20,
    nav: true,
    navClass: ["byt-owl-prev", "byt-owl-next"],
    navText: [
      "<svg width='30' height='30' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.5 15L7.5 10L12.5 5' stroke='#222222' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
      "<svg width='30' height='30' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='20' height='20' fill='#5CB85F'/><path d='M7.5 15L12.5 10L7.5 5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  };

  return (
    <section id="testimonial">
      <div className="container-fluid byt-container px-md-0">
        <div className="testimonials text-center">
          <h2 className="fw-bold byt-title">Testimonial</h2>
          <p className="my-4">
            Berbagai review positif dari para pelanggan kami
          </p>
          <OwlCarousel className="byt-owl" {...options}>
            {testiData.map((item, index) => (
              <div
                className="rounded-4 text-center d-flex flex-column flex-lg-row align-items-center p-5 byt-bg-secondary"
                key={index}
              >
                <img
                  className="rounded-circle img-fluid testimonial__img"
                  src={item.img}
                  alt=""
                  loading="lazy"
                />
                <div className="text-start ms-lg-4">
                  <div className="d-flex justify-content-center justify-content-lg-start my-4 my-lg-0">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <svg
                        key={index}
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                          fill="#F9CC00"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="my-3 byt-fs-15">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod"
                  </p>
                  <h6 className="fw-bold">John Dee 32, Bromo</h6>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}
