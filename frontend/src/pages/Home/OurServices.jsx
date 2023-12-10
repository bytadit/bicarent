import img_service from "../../assets/img/img_service.png";

export default function OurServices() {
  const listItems = [
    "Sewa Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Sewa Mobil Jangka Panjang Bulanan",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In Out",
  ];

  return (
    <section id="ourservices">
      <div className="container-fluid byt-container row align-items-center mx-auto">
        <div className="col-12 col-md-6 my-5 my-lg-0">
          <img
            src={img_service}
            className="d-block mx-auto img-fluid"
            alt="Hero img"
            loading="lazy"
          />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="fw-bold byt-title">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h2>
          <p className="lead my-4" style={{ fontSize: "16.5px" }}>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <div className="row gap-2">
            {listItems.map((item, index) => (
            <div className="d-flex flex-row" key={index}>
              <div className="rounded-circle p-1 byt-list">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 4L5.99996 11.3333L2.66663 8"
                    stroke="#0D28A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="my-auto ms-3">
                {item}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
