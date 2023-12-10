import { Link } from "react-router-dom";
import img_car from "../../assets/img/img_car.png";

export default function Hero() {
  return (
    <section id="hero" className="pt-0">
      <div className="pt-5 byt-bg-secondary">
        <div className="container-fluid byt-container row align-items-center mx-auto pe-0">
          <div className="col-lg-5 px-0 pe-4">
            <h2 className="fw-bold byt-title">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h2>
            <p className="lead" style={{ fontSize: "18px" }}>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link to="/cars" className="btn btn-primary btn-lg byt-button">
              Mulai Sewa Mobil
            </Link>
          </div>
          <div className="col-12 col-lg-7 mt-5 mt-lg-0 px-0">
            <img
              src={img_car}
              className="d-block mx-lg-auto img-fluid w-100"
              alt="Hero img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
